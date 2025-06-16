import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IntelliAgent Solutions - AI Agents Development',
  description: 'Transform your business with intelligent AI agents. Custom development, deployment, and optimization services for modern enterprises.',
  keywords: 'AI agents, artificial intelligence, automation, business solutions, AI development',
  authors: [{ name: 'IntelliAgent Solutions' }],
  openGraph: {
    title: 'IntelliAgent Solutions - AI Agents Development',
    description: 'Transform your business with intelligent AI agents. Custom development, deployment, and optimization services for modern enterprises.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IntelliAgent Solutions - AI Agents Development',
    description: 'Transform your business with intelligent AI agents.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}