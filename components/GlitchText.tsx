'use client'

import { useState, useEffect } from 'react'

interface GlitchTextProps {
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
}

export default function GlitchText({ text, className = '', as: Component = 'h1' }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 300)
    }, 4000 + Math.random() * 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Component 
      className={`${className} ${isGlitching ? 'glitch' : ''}`}
      data-text={text}
    >
      {text}
    </Component>
  )
}
