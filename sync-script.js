// sync-script.js
import { Client } from '@notionhq/client';
import { Octokit } from '@octokit/rest';

// Initialize clients
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const [GITHUB_OWNER, REPO_FULL_NAME] = process.env.REPO_FULL_NAME.split('/');

async function debugConnection() {
  console.log('=== DEBUGGING CONNECTION ===');
  console.log('Database ID:', NOTION_DATABASE_ID);
  console.log('Database ID length:', NOTION_DATABASE_ID?.length);
  console.log('GitHub Owner:', GITHUB_OWNER);
  console.log('GitHub Repo:', REPO_FULL_NAME);
  
  // Test basic connection
  try {
    const me = await notion.users.me();
    console.log('✅ Notion connection successful');
    console.log('Bot name:', me.name);
  } catch (error) {
    console.log('❌ Notion connection failed:', error.message);
    return;
  }
  
  // Test database access
  try {
    const database = await notion.databases.retrieve({
      database_id: NOTION_DATABASE_ID,
    });
    console.log('✅ Database access successful');
    console.log('Database title:', database.title?.[0]?.plain_text);
    console.log('Database properties:', Object.keys(database.properties));
  } catch (error) {
    console.log('❌ Database access failed:', error.message);
    console.log('Full error:', error);
    return;
  }
  
  // Test query
  try {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
    });
    console.log('✅ Database query successful');
    console.log('Total pages found:', response.results.length);
    
    response.results.forEach((page, index) => {
      const title = page.properties.Name?.title?.[0]?.plain_text || 'Untitled';
      const status = page.properties.Status?.select?.name || 'No status';
      const githubCreated = page.properties['GitHub Issue Created']?.checkbox || false;
      console.log(`Page ${index + 1}: "${title}" - Status: ${status} - GitHub Created: ${githubCreated}`);
    });
    
  } catch (error) {
    console.log('❌ Database query failed:', error.message);
  }
  
  console.log('=== END DEBUG ===');
}

async function analyzeDescriptionWithAI(description, title) {
  if (!ANTHROPIC_API_KEY) {
    console.log('No Anthropic API key found, using basic analysis');
    return analyzeDescriptionBasic(description);
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 2000,
        messages: [{
          role: 'user',
          content: `Analyze this app description and create a structured GitHub issue with specific development tasks.

App Title: ${title}

Description:
${description}

Please provide:
1. A brief technical summary
2. Key features breakdown
3. Suggested tech stack
4. Detailed task list with checkboxes
5. Implementation priority order

Format the response as markdown that's ready for a GitHub issue.`
        }]
      })
    });

    if (!response.ok) {
      throw new Error(`Anthropic API error: ${response.status}`);
    }

    const data = await response.json();
    return data.content[0].text;
  } catch (error) {
    console.error('Error calling Anthropic API:', error);
    return analyzeDescriptionBasic(description);
  }
}

function analyzeDescriptionBasic(description) {
  // Fallback basic analysis
  const lines = description.split('\n').filter(line => line.trim() !== '');
  
  const tasks = [];
  let currentTask = '';
  
  for (const line of lines) {
    if (line.trim().startsWith('-') || line.trim().startsWith('*') || line.trim().startsWith('•')) {
      if (currentTask) {
        tasks.push(currentTask.trim());
      }
      currentTask = line.trim().substring(1).trim();
    } else if (line.trim().startsWith('1.') || /^\d+\./.test(line.trim())) {
      if (currentTask) {
        tasks.push(currentTask.trim());
      }
      currentTask = line.trim().replace(/^\d+\./, '').trim();
    } else if (currentTask) {
      currentTask += ' ' + line.trim();
    }
  }
  
  if (currentTask) {
    tasks.push(currentTask.trim());
  }

  let analysisResult = `## App Description\n\n${description}\n\n`;
  
  if (tasks.length > 0) {
    analysisResult += `## Development Tasks\n\n`;
    tasks.forEach(task => {
      analysisResult += `- [ ] ${task}\n`;
    });
  } else {
    analysisResult += `## Development Tasks\n\n`;
    analysisResult += `- [ ] Set up project structure\n`;
    analysisResult += `- [ ] Implement core functionality\n`;
    analysisResult += `- [ ] Add user interface\n`;
    analysisResult += `- [ ] Testing and optimization\n`;
  }
  
  return analysisResult;
}

async function getNotionPages() {
  try {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
      filter: {
        and: [
          {
            property: 'Status',
            select: {
              equals: 'In Progress'
            }
          },
          {
            property: 'GitHub Issue Created',
            checkbox: {
              equals: false
            }
          }
        ]
      }
    });
    
    return response.results;
  } catch (error) {
    console.error('Error fetching Notion pages:', error);
    return [];
  }
}

async function getPageContent(pageId) {
  try {
    const response = await notion.blocks.children.list({
      block_id: pageId,
    });
    
    let content = '';
    for (const block of response.results) {
      if (block.type === 'paragraph' && block.paragraph.rich_text.length > 0) {
        content += block.paragraph.rich_text.map(text => text.plain_text).join('') + '\n\n';
      } else if (block.type === 'heading_1' && block.heading_1.rich_text.length > 0) {
        content += '# ' + block.heading_1.rich_text.map(text => text.plain_text).join('') + '\n\n';
      } else if (block.type === 'heading_2' && block.heading_2.rich_text.length > 0) {
        content += '## ' + block.heading_2.rich_text.map(text => text.plain_text).join('') + '\n\n';
      } else if (block.type === 'heading_3' && block.heading_3.rich_text.length > 0) {
        content += '### ' + block.heading_3.rich_text.map(text => text.plain_text).join('') + '\n\n';
      } else if (block.type === 'bulleted_list_item' && block.bulleted_list_item.rich_text.length > 0) {
        content += '- ' + block.bulleted_list_item.rich_text.map(text => text.plain_text).join('') + '\n';
      } else if (block.type === 'numbered_list_item' && block.numbered_list_item.rich_text.length > 0) {
        content += '1. ' + block.numbered_list_item.rich_text.map(text => text.plain_text).join('') + '\n';
      }
    }
    
    return content.trim();
  } catch (error) {
    console.error('Error fetching page content:', error);
    return '';
  }
}

async function createGitHubIssue(title, description) {
  try {
    const response = await octokit.rest.issues.create({
      owner: GITHUB_OWNER,
      repo: REPO_FULL_NAME,
      title: title,
      body: description,
      labels: ['notion-sync', 'auto-generated']
    });
    
    return response.data;
  } catch (error) {
    console.error('Error creating GitHub issue:', error);
    return null;
  }
}

async function updateNotionPage(pageId, issueUrl) {
  try {
    await notion.pages.update({
      page_id: pageId,
      properties: {
        'GitHub Issue Created': {
          checkbox: true
        },
        'GitHub Issue URL': {
          url: issueUrl
        }
      }
    });
  } catch (error) {
    console.error('Error updating Notion page:', error);
  }
}

function analyzeDescription(description) {
  // This function is kept for backward compatibility but now unused
  // since we use AI analysis instead
  return [];
}

a// ... (rest of your sync-script.js code)

async function main() {
  console.log('Starting Notion to GitHub sync...');

  // Add debug first
  await debugConnection();

  const pages = await getNotionPages();
  console.log(`Found ${pages.length} pages with "In Progress" status`);

  for (const page of pages) {
    try {
      // Get page title
      const title = page.properties.Name?.title?.[0]?.plain_text || 'Untitled';

      // Get page description
      const description = await getPageContent(page.id);

      if (!description) {
        console.log(`Skipping page "${title}" - no description found`);
        continue;
      }

      // Analyze description to extract tasks (this function is unused but kept for backward compatibility)
      // const tasks = analyzeDescription(description); // This line can likely be removed or commented out

      // Use AI to analyze the description and create structured tasks
      const aiAnalysis = await analyzeDescriptionWithAI(description, title);

      // Create the issue body with AI analysis
      let issueBody = aiAnalysis;

      // === ADD THIS LINE TO INCLUDE THE @CLAUDE TRIGGER ===
      // Place it strategically so it feels natural, e.g., after the main analysis but before footers.
      issueBody += `\n\n@claude please generate code to implement this feature request based on the analysis above.`;
      // You can customize the prompt for Claude here.

      issueBody += `\n\n---\n*This issue was automatically created from Notion page: ${page.url}*\n`;
      issueBody += `*Analysis powered by Claude AI*`;

      // Create GitHub issue
      const issue = await createGitHubIssue(title, issueBody);

      if (issue) {
        console.log(`Created GitHub issue: ${issue.html_url}`);

        // Update Notion page to mark as processed
        await updateNotionPage(page.id, issue.html_url);

        console.log(`Updated Notion page "${title}"`);
      }

    } catch (error) {
      console.error(`Error processing page:`, error);
    }
  }

  console.log('Sync completed!');
}

main().catch(console.error);