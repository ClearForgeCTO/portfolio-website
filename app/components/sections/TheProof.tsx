'use client'

import ScrollReveal from '@/app/components/animations/ScrollReveal'
import Counter from '@/app/components/ui/Counter'
import { Terminal, Code2, Zap, MessageSquare } from 'lucide-react'

export default function TheProof() {
  const stats = [
    { icon: Terminal, value: '32', label: 'Build Time (Minutes)', color: 'text-blue-primary' },
    { icon: Code2, value: '47', label: 'Components Created', color: 'text-purple-primary' },
    { icon: Zap, value: '2847', label: 'Lines of Code', color: 'text-pink-primary' },
    { icon: MessageSquare, value: '23', label: 'AI Interactions', color: 'text-blue-light' },
  ]

  const terminalLines = [
    '$ claude init portfolio-website',
    '✓ Analyzing requirements...',
    '✓ Setting up Next.js 14 with TypeScript',
    '✓ Configuring Design System',
    '✓ Building components...',
    '✓ Implementing animations...',
    '✓ Optimizing performance...',
    '✓ Build complete!',
  ]

  return (
    <section id="proof" className="section bg-bg-primary">
      <div className="container">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              This Site Was Built by AI in{' '}
              <span className="gradient-text">30 Minutes</span>
            </h2>
            <div className="text-xl text-text-secondary space-y-4">
              <p>Not through templates.</p>
              <p>Not through no-code builders.</p>
              <p className="text-text-primary font-medium">
                Through expertise directing capability.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Terminal Display */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-3xl mx-auto mb-16">
            <div className="glass-strong rounded-lg overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="glass px-4 py-3 flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-pink-primary"></div>
                <div className="w-3 h-3 rounded-full bg-purple-primary"></div>
                <div className="w-3 h-3 rounded-full bg-blue-primary"></div>
                <span className="ml-4 text-text-secondary text-sm font-mono">build.log</span>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm space-y-2 bg-black/20">
                {terminalLines.map((line, index) => (
                  <ScrollReveal key={index} delay={0.3 + index * 0.1}>
                    <div className={line.startsWith('$') ? 'text-blue-primary' : 'text-text-secondary'}>
                      {line}
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <ScrollReveal key={stat.label} delay={0.4 + index * 0.1}>
                <div className="glass-strong rounded-lg p-6 text-center hover:scale-105 transition-transform">
                  <Icon className={`${stat.color} w-8 h-8 mx-auto mb-4`} />
                  <Counter value={stat.value} label={stat.label} />
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Bottom Message */}
        <ScrollReveal delay={0.8}>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-text-primary mb-4">
              This is what&apos;s possible when human expertise meets AI execution.
            </p>
            <p className="text-lg text-text-secondary">
              Now imagine what we can do for{' '}
              <span className="text-blue-primary font-medium">your business</span>.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
