'use client'

import Image from 'next/image'
import ScrollReveal from '@/app/components/animations/ScrollReveal'
import Counter from '@/app/components/ui/Counter'
import { ABOUT_CONTENT } from '@/app/lib/constants'

export default function About() {
  return (
    <section id="about" className="section bg-surface-l1">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <ScrollReveal>
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden glass">
                <Image
                  src="/images/shawn-profile.jpeg"
                  alt="Shawn Sloan"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-primary/20 rounded-full blur-3xl"></div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal delay={0.2}>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {ABOUT_CONTENT.title}
              </h2>

              <div className="text-text-secondary space-y-4 mb-8 text-lg leading-relaxed">
                {ABOUT_CONTENT.bio.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {ABOUT_CONTENT.stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={0.4 + index * 0.1}>
              <div className="glass rounded-lg p-6 text-center hover:scale-105 transition-transform">
                <Counter value={stat.value} label={stat.label} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
