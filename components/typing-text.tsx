"use client"
import { useState, useEffect } from "react"

interface TypingTextProps {
  text: string
  speed?: number
  className?: string
}

export default function TypingText({ text, speed = 50, className = "" }: TypingTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  return (
    <span className={className}>
      {displayText}
      {currentIndex < text.length && <span className="terminal-cursor">|</span>}
    </span>
  )
}
