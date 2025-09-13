'use client'

import { motion } from 'framer-motion'
import Section from '@/components/Section'
import GlitchText from '@/components/GlitchText'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Section className="min-h-screen flex items-center" variant="fractal">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <GlitchText 
              text="Automate Your Paperwork & Routes"
              className="text-5xl md:text-7xl font-bold gradient-text text-shadow-recursive"
            />
            <motion.h2 
              className="text-2xl md:text-3xl font-mono text-recursion-blue"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Let's Partner.
            </motion.h2>
            
            <motion.div
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="recursive-border p-8 bg-deep-void/80 backdrop-blur">
                <h3 className="text-xl font-semibold mb-4">What You Get:</h3>
                <ul className="space-y-3 text-left font-mono text-sm">
                  <li className="flex items-start">
                    <span className="op-symbol mr-2">∋</span>
                    <span>Automatically generates and stores digital Waste Transfer Notes (WTNs)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="op-symbol mr-2">∋</span>
                    <span>Optimizes collection routes to save fuel + time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="op-symbol mr-2">∋</span>
                    <span>Tracks driver performance + collection history digitally</span>
                  </li>
                  <li className="flex items-start">
                    <span className="op-symbol mr-2">∋</span>
                    <span>Ensures full compliance with Environment Agency regulations</span>
                  </li>
                </ul>
                
                <div className="mt-6 pt-6 border-t border-pragmatic-gray/30">
                  <h3 className="text-xl font-semibold mb-2">What I Ask:</h3>
                  <p className="font-mono text-sm">
                    You cover my £184 waste carrier registration fee + let me shadow your ops for 1 week.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.a
              href="#contact"
              className="btn-mythic inline-flex holographic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Building Your Tool
            </motion.a>
          </motion.div>
        </div>
      </Section>

      {/* Problem Section */}
      <Section variant="recursive">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <GlitchText 
              text="The Problem:"
              as="h2"
              className="text-3xl md:text-4xl font-bold text-alert-orange mb-4"
            />
            <h3 className="text-2xl md:text-3xl font-semibold mb-8">
              Paperwork Is Killing Your Profit
            </h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <span className="text-alert-orange mr-3 text-2xl">×</span>
                <span>Manual WTNs are tedious, error-prone, and a compliance risk.</span>
              </li>
              <li className="flex items-start">
                <span className="text-alert-orange mr-3 text-2xl">×</span>
                <span>Inefficient routes burn fuel and limit daily jobs.</span>
              </li>
              <li className="flex items-start">
                <span className="text-alert-orange mr-3 text-2xl">×</span>
                <span>Paper records are easily lost—audits become nightmares.</span>
              </li>
            </ul>
          </div>
          <motion.div 
            className="relative h-64 md:h-96"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-alert-orange/20 to-pragmatic-gray/20 rounded-lg animate-pulse-subtle" />
            <div className="absolute inset-4 bg-deep-void/80 rounded flex items-center justify-center font-mono text-alert-orange">
              <div className="text-center">
                <div className="text-6xl mb-4">⚠</div>
                <div className="text-xl">INEFFICIENCY</div>
                <div className="text-sm opacity-70">DETECTED</div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Solution Section */}
      <Section variant="fractal">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 md:order-1 relative h-64 md:h-96"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-earth-green/20 to-recursion-blue/20 rounded-lg animate-pulse-subtle" />
            <div className="absolute inset-4 bg-deep-void/80 rounded flex items-center justify-center font-mono text-earth-green">
              <div className="text-center">
                <div className="text-6xl mb-4">✓</div>
                <div className="text-xl">AUTOMATION</div>
                <div className="text-sm opacity-70">ACTIVATED</div>
              </div>
            </div>
          </motion.div>
          <div className="order-1 md:order-2">
            <GlitchText 
              text="The Solution:"
              as="h2"
              className="text-3xl md:text-4xl font-bold text-earth-green mb-4"
            />
            <h3 className="text-2xl md:text-3xl font-semibold mb-8">
              AI-Powered Efficiency
            </h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <span className="op-symbol mr-3">∋</span>
                <span>A simple web app your drivers use on their phones.</span>
              </li>
              <li className="flex items-start">
                <span className="op-symbol mr-3">∋</span>
                <span>Snap a post-collection photo → AI logs volume, location, time, auto-generates WTN.</span>
              </li>
              <li className="flex items-start">
                <span className="op-symbol mr-3">∋</span>
                <span>System plans optimal routes each morning.</span>
              </li>
              <li className="flex items-start">
                <span className="op-symbol mr-3">∋</span>
                <span>All records stored securely in the cloud—accessible anytime for audits.</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Partnership Section */}
      <Section>
        <div className="text-center mb-12">
          <GlitchText 
            text="The Partnership:"
            as="h2"
            className="text-3xl md:text-4xl font-bold mb-4"
          />
          <h3 className="text-2xl md:text-3xl font-semibold gradient-text">
            Trade, Not Transaction
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            className="recursive-border p-6 bg-deep-void/80"
            whileHover={{ y: -5 }}
          >
            <h4 className="text-xl font-bold mb-4 text-earth-green">You Get:</h4>
            <ul className="space-y-2 font-mono text-sm">
              <li>• Tool that saves hours weekly</li>
              <li>• Cuts fuel costs</li>
              <li>• Reduces audit risk</li>
              <li>• Full ownership</li>
            </ul>
          </motion.div>

          <motion.div 
            className="recursive-border p-6 bg-deep-void/80"
            whileHover={{ y: -5 }}
          >
            <h4 className="text-xl font-bold mb-4 text-recursion-blue">I Get:</h4>
            <ul className="space-y-2 font-mono text-sm">
              <li>• £184 certification covered</li>
              <li>• Real-world ops knowledge</li>
              <li>• Testing ground for tool</li>
              <li>• Partnership validation</li>
            </ul>
          </motion.div>

          <motion.div 
            className="recursive-border p-6 bg-deep-void/80"
            whileHover={{ y: -5 }}
          >
            <h4 className="text-xl font-bold mb-4 text-alert-orange">Result:</h4>
            <ul className="space-y-2 font-mono text-sm">
              <li>• One-time exchange</li>
              <li>• Mutual benefit</li>
              <li>• No ongoing fees</li>
              <li>• Pure efficiency gain</li>
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* About Section */}
      <Section variant="recursive">
        <div className="max-w-3xl mx-auto text-center">
          <GlitchText 
            text="Who I Am & Why I Can Do This"
            as="h2"
            className="text-3xl md:text-4xl font-bold mb-8"
          />
          <div className="space-y-6 text-lg">
            <p>
              I build AI automation for complex logistics—this isn't theory.
            </p>
            <p>
              Founder of <span className="font-mono text-recursion-blue">Genesis Reloop</span>—a new system 
              designed to make waste collection efficient and transparent for operators like you.
            </p>
            <p className="font-bold text-xl gradient-text">
              I only care about building what actually works.
            </p>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" variant="fractal">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <GlitchText 
              text="Let's Build Your Tool"
              as="h2"
              className="text-3xl md:text-4xl font-bold mb-4"
            />
            <p className="text-xl text-pragmatic-gray">
              Stop Doing Paperwork.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="recursive-border p-8 bg-deep-void/90 backdrop-blur"
          >
            <ContactForm />
          </motion.div>

          <motion.div 
            className="mt-8 text-center font-mono text-sm text-pragmatic-gray"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p>Or reach out directly:</p>
            <p className="mt-2">
              <a href="mailto:warren@genesisreloop.com" className="text-recursion-blue hover:underline">
                warren@genesisreloop.com
              </a>
            </p>
          </motion.div>
        </div>
      </Section>
    </main>
  )
}
