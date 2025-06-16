'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Features from '@/components/Features'
import Industries from '@/components/Industries'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <Header />
      <Hero />
      <Services />
      <Features />
      <Industries />
      <About />
      <Contact />
      <Footer />
    </motion.main>
  )
}