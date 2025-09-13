'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  variant?: 'default' | 'fractal' | 'recursive'
}

export default function Section({ children, className = '', id, variant = 'default' }: SectionProps) {
  const variants = {
    default: 'relative',
    fractal: 'relative fractal-bg',
    recursive: 'relative bg-recursion-pattern'
  }

  return (
    <motion.section
      id={id}
      className={`${variants[variant]} py-20 px-4 sm:px-6 lg:px-8 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </motion.section>
  )
}
