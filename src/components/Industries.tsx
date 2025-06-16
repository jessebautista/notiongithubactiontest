'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Industries: React.FC = () => {
  const industries = [
    {
      name: 'Healthcare',
      description: 'Streamline patient care, automate administrative tasks, and improve healthcare outcomes.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      useCases: ['Patient scheduling', 'Symptom assessment', 'Medication reminders', 'Telemedicine support'],
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'Finance & Banking',
      description: 'Enhance customer service, automate compliance, and reduce operational risks.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      useCases: ['Fraud detection', 'Customer onboarding', 'Loan processing', 'Investment advice'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'E-commerce',
      description: 'Boost sales, improve customer experience, and optimize inventory management.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      useCases: ['Product recommendations', 'Order tracking', 'Customer support', 'Inventory optimization'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Education',
      description: 'Personalize learning experiences and automate administrative processes.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      useCases: ['Tutoring assistance', 'Student assessment', 'Course recommendations', 'Administrative support'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Real Estate',
      description: 'Automate lead qualification, schedule viewings, and provide market insights.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      useCases: ['Lead qualification', 'Property matching', 'Market analysis', 'Virtual tours'],
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Manufacturing',
      description: 'Optimize production processes, predict maintenance needs, and ensure quality control.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      useCases: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'Production planning'],
      color: 'from-gray-500 to-gray-600'
    }
  ]

  return (
    <section id="industries" className="py-24 bg-gray-50 dark:bg-gray-800/50">
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
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tailored AI solutions across diverse industries to meet specific business challenges and opportunities
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 relative overflow-hidden"
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {industry.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300" 
                    style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}>
                  {industry.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {industry.description}
                </p>

                {/* Use Cases */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide">
                    Key Use Cases
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {industry.useCases.map((useCase, useCaseIndex) => (
                      <motion.div
                        key={useCaseIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (useCaseIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="flex items-center text-sm text-gray-500 dark:text-gray-400"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${industry.color} rounded-full mr-2 flex-shrink-0`}></div>
                        <span className="truncate">{useCase}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Learn More Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-6 w-full py-2 px-4 bg-gradient-to-r ${industry.color} text-white font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm`}
                >
                  Learn More
                </motion.button>
              </div>

              {/* Decorative elements */}
              <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r ${industry.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </div>

        {/* Success Stories Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 border border-white rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white rounded-full"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Industry?</h3>
              <p className="text-primary-100 mb-6 max-w-2xl mx-auto text-lg">
                Join hundreds of companies already leveraging AI agents to revolutionize their operations
              </p>
              
              <div className="flex flex-wrap justify-center gap-8 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-primary-200 text-sm">Companies Served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-primary-200 text-sm">Industries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">1M+</div>
                  <div className="text-primary-200 text-sm">AI Interactions</div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('contact')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-300"
              >
                Start Your Transformation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Industries