'use client'

import Image from 'next/image'
import ScrollReveal from '@/app/components/animations/ScrollReveal'
import Card from '@/app/components/ui/Card'
import { BookOpen, Video, FileText, Users } from 'lucide-react'

export default function Translator() {
  const contentTypes = [
    {
      icon: BookOpen,
      title: 'AI Implementation Guides',
      description: 'Step-by-step tutorials for real business applications',
    },
    {
      icon: Video,
      title: 'Educational Videos',
      description: 'Breaking down complex concepts into digestible lessons',
    },
    {
      icon: FileText,
      title: 'Free Templates',
      description: 'Ready-to-use resources for your business',
    },
    {
      icon: Users,
      title: 'Case Studies',
      description: 'Real implementations with measurable results',
    },
  ]

  return (
    <section id="translator" className="section bg-bg-primary">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Illustration */}
          <ScrollReveal>
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden glass">
                <Image
                  src="/images/systems-translator.jpg"
                  alt="The AI Systems Translator"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-purple-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-pink-primary/20 rounded-full blur-3xl"></div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal delay={0.2}>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                The <span className="gradient-text">AI Systems Translator</span>
              </h2>
              <p className="text-xl text-text-secondary mb-6 leading-relaxed">
                Making Enterprise AI Accessible to Everyone
              </p>

              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Online, I&apos;m The AI Systems Translator—your guide through the maze of artificial
                  intelligence, breaking down complex enterprise concepts into language real business
                  owners understand.
                </p>

                <div className="bg-surface-l1 rounded-lg p-6 my-6">
                  <h3 className="text-xl font-bold text-text-primary mb-4">The Mission:</h3>
                  <p className="text-text-secondary">
                    Remove the gatekeepers. End the jargon. Make AI approachable.
                  </p>
                </div>

                <p>
                  While consultants charge $15,000 for &apos;AI strategy,&apos; I&apos;m teaching the fundamentals
                  for free. While vendors hide capabilities behind paywalls, I&apos;m explaining exactly
                  how it all works. While experts gatekeep knowledge, I&apos;m translating it into terms
                  your team can actually use.
                </p>

                <p className="text-text-primary font-medium pt-4">
                  I&apos;m just getting started with content creation, but the mission is clear: remove the gatekeepers, end the jargon, make AI approachable.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Content Types */}
        <ScrollReveal delay={0.4}>
          <div>
            <h3 className="text-2xl font-bold text-center mb-8">What I Do</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {contentTypes.map((type, index) => {
                const Icon = type.icon
                return (
                  <Card key={type.title} className="flex items-start space-x-4">
                    <Icon className="w-8 h-8 text-blue-primary flex-shrink-0" />
                    <div>
                      <h4 className="text-xl font-bold text-text-primary mb-2">
                        {type.title}
                      </h4>
                      <p className="text-text-secondary">{type.description}</p>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom Message */}
        <ScrollReveal delay={0.6}>
          <div className="mt-16 text-center max-w-3xl mx-auto">
            <p className="text-xl text-text-secondary leading-relaxed">
              Because the future of AI isn&apos;t about who has the biggest research budget—
              <span className="text-text-primary font-medium block mt-2">
                it&apos;s about who can make it useful for everyone who needs it.
              </span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
