'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface CounterProps {
  value: string
  label: string
  duration?: number
}

export default function Counter({ value, label, duration = 1000 }: CounterProps) {
  const [count, setCount] = useState<string>('0')
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true

      // Extract numeric part and suffix
      const match = value.match(/^(\d+)(.*)$/)
      if (match) {
        const numericValue = parseInt(match[1], 10)
        const suffix = match[2]

        const increment = numericValue / (duration / 16)
        let current = 0

        const timer = setInterval(() => {
          current += increment
          if (current >= numericValue) {
            setCount(value)
            clearInterval(timer)
          } else {
            setCount(Math.floor(current).toString() + suffix)
          }
        }, 16)

        return () => clearInterval(timer)
      } else {
        setCount(value)
      }
    }
  }, [inView, value, duration])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
        {count}
      </div>
      <div className="text-text-secondary text-sm md:text-base">
        {label}
      </div>
    </div>
  )
}
