'use client'

import { useEffect, useRef } from 'react'
import { HERO_CONTENT } from '@/app/lib/constants'
import FadeIn from '@/app/components/animations/FadeIn'
import Button from '@/app/components/ui/Button'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const updateSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    updateSize()
    window.addEventListener('resize', updateSize)

    // Particle system
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
    }> = []

    const particleCount = 100

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      })
    }

    // Mouse interaction
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 11, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Mouse attraction
        const dx = mouseX - particle.x
        const dy = mouseY - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 150) {
          const force = (150 - distance) / 150
          particle.vx += (dx / distance) * force * 0.02
          particle.vy += (dy / distance) * force * 0.02
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 102, 204, ${0.3 + particle.size / 10})`
        ctx.fill()

        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index === otherIndex) return

          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `rgba(0, 102, 204, ${0.1 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', updateSize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const scrollToNext = () => {
    const proofSection = document.querySelector('#proof')
    if (proofSection) {
      proofSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(135deg, #0A0A0B 0%, #141416 100%)' }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-primary z-10" />

      {/* Content */}
      <div className="container relative z-20 text-center px-6">
        <FadeIn delay={0.3}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {HERO_CONTENT.headline.split(' ').map((word, index) => {
              if (word === 'Technology') {
                return (
                  <span key={index} className="gradient-text">
                    {word}{' '}
                  </span>
                )
              }
              return <span key={index}>{word} </span>
            })}
          </h1>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto mb-12 leading-relaxed">
            {HERO_CONTENT.subheadline}
          </p>
        </FadeIn>

        <FadeIn delay={0.9}>
          <Button onClick={scrollToNext} size="lg" className="group">
            {HERO_CONTENT.cta}
            <ChevronDown className="inline-block ml-2 group-hover:translate-y-1 transition-transform" size={20} />
          </Button>
        </FadeIn>
      </div>

      {/* Scroll Indicator */}
      <FadeIn delay={1.2}>
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce focus:outline-none focus:ring-2 focus:ring-blue-primary rounded-full p-2"
          aria-label="Scroll to next section"
        >
          <ChevronDown size={32} className="text-text-secondary" />
        </button>
      </FadeIn>
    </section>
  )
}
