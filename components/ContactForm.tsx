'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { supabase, type ContactForm } from '@/lib/supabase'

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    business_name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const { error } = await supabase
        .from('partner_inquiries')
        .insert([formData])

      if (error) throw error

      setSubmitStatus('success')
      setFormData({
        name: '',
        business_name: '',
        email: '',
        phone: '',
        message: ''
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-mono text-recursion-blue mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="input-mythic"
            placeholder="John Smith"
          />
        </div>
        
        <div>
          <label htmlFor="business_name" className="block text-sm font-mono text-recursion-blue mb-2">
            Business Name
          </label>
          <input
            type="text"
            id="business_name"
            name="business_name"
            required
            value={formData.business_name}
            onChange={handleChange}
            className="input-mythic"
            placeholder="Smith Waste Solutions Ltd"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-mono text-recursion-blue mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="input-mythic"
            placeholder="john@smithwaste.co.uk"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-mono text-recursion-blue mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="input-mythic"
            placeholder="07XXX XXXXXX"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-mono text-recursion-blue mb-2">
          Tell me about your operation
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          className="input-mythic resize-none"
          placeholder="E.g., I run 2 trucks collecting commercial waste in North London. Currently using paper WTNs and struggling with route planning..."
        />
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="btn-mythic w-full holographic"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="inline-block w-5 h-5 border-2 border-quantum-white border-t-transparent rounded-full mr-2"
            />
            Processing...
          </span>
        ) : (
          "Let's Build Your Tool"
        )}
      </motion.button>

      <AnimatePresence>
        {submitStatus !== 'idle' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`p-4 rounded font-mono text-sm ${
              submitStatus === 'success' 
                ? 'bg-earth-green/20 text-earth-green border border-earth-green/30' 
                : 'bg-alert-orange/20 text-alert-orange border border-alert-orange/30'
            }`}
          >
            {submitStatus === 'success' 
              ? "∋ Message received. I'll be in touch within 24 hours." 
              : "∋ Error sending message. Please try again or email directly."}
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  )
}
