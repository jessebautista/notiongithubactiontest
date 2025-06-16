'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Features: React.FC = () => {
  const features = [
    {
      title: 'Lightning Fast Deployment',
      description: 'Get your AI agents up and running in minutes, not months.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      stats: '< 5 min',
      statsLabel: 'Setup Time'
    },
    {
      title: 'Scalable Architecture',
      description: 'Built to handle millions of interactions with enterprise-grade reliability.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
      stats: '99.99%',
      statsLabel: 'Uptime SLA'
    },
    {
      title: 'Advanced Analytics',
      description: 'Real-time insights and performance metrics to optimize your operations.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      stats: '24/7',
      statsLabel: 'Monitoring'
    },
    {
      title: 'Multi-Channel Support',
      description: 'Deploy across web, mobile, voice, and messaging platforms seamlessly.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      stats: '10+',
      statsLabel: 'Platforms'
    }
  ]

  const benefits = [
    {
      title: 'Reduce Operational Costs',
      description: 'Cut operational expenses by up to 60% with intelligent automation',
      percentage: '60%',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Improve Response Time',
      description: 'Respond to customer inquiries 10x faster with AI assistance',
      percentage: '10x',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Increase Customer Satisfaction',
      description: 'Boost satisfaction scores with 24/7 intelligent support',
      percentage: '95%',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Scale Effortlessly',
      description: 'Handle unlimited concurrent interactions without hiring',
      percentage: '∞',
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <section id="features" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose IntelliAgent?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Cutting-edge features and unmatched performance that set us apart from the competition
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="text-center group"
            >
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 w-16 h-16 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {feature.description}
              </p>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  {feature.stats}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {feature.statsLabel}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Measurable Business Impact
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            See real results with our proven AI solutions that deliver tangible business value
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center overflow-hidden group cursor-pointer"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className={`text-4xl font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent mb-3`}>
                  {benefit.percentage}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </div>

              {/* Hover effect */}
              <div className={`absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-r ${benefit.color} rounded-full opacity-0 group-hover:opacity-20 transition-all duration-300 transform scale-0 group-hover:scale-100`}></div>
            </motion.div>
          ))}
        </div>

        {/* Integration Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Seamless Integration
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Connect with your existing tools and platforms in minutes with our extensive integration library
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {/* Integration logos/icons - simplified representations */}
            {['Slack', 'Teams', 'Salesforce', 'HubSpot', 'Zapier', 'API'].map((integration, index) => (
              <motion.div
                key={integration}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="bg-white dark:bg-gray-600 rounded-lg px-4 py-2 shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {integration}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features