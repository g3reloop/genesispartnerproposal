import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Genesis Route Partner - Automate Your Waste Collection',
  description: 'Partner with Genesis Route to get a custom AI logistics agent that automates WTNs, routing, and compliance for waste carriers.',
  keywords: 'waste carrier, waste collection, WTN automation, route optimization, compliance, AI logistics',
  authors: [{ name: 'Genesis Route' }],
  openGraph: {
    title: 'Genesis Route Partner - Automate Your Waste Collection',
    description: 'Stop drowning in paperwork. Get a custom AI tool that handles your WTNs, routes, and compliance automatically.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
