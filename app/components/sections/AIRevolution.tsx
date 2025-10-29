'use client'

import ScrollReveal from '@/app/components/animations/ScrollReveal'
import Card from '@/app/components/ui/Card'
import { AlertTriangle, Lightbulb, Users, TrendingUp } from 'lucide-react'

export default function AIRevolution() {
  const challenges = [
    {
      icon: AlertTriangle,
      title: 'The Data Understanding Gap',
      description: 'You generate intelligence 24/7. Nobody ever taught you what to do with it.',
      color: 'text-pink-primary',
    },
    {
      icon: Lightbulb,
      title: 'The AI Confusion',
      description: "The tech industry benefits from keeping AI mysterious and scary. We're removing the confusion.",
      color: 'text-purple-primary',
    },
  ]

  const opportunities = [
    {
      icon: Users,
      title: 'Unlock the 90%',
      description: 'The creative minds locked out by complexity could change everything if they had access.',
    },
    {
      icon: TrendingUp,
      title: 'Jobs Nobody Predicted',
      description: 'When people can leverage technology without becoming technologists, entirely new industries emerge.',
    },
  ]

  return (
    <section id="ai-revolution" className="section bg-surface-l1">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="gradient-text">Real Revolution</span> Isn&apos;t AI
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              It&apos;s what happens when we remove the barriers keeping people from using it
            </p>
          </div>
        </ScrollReveal>

        {/* The Two Core Challenges */}
        <div className="mb-20">
          <ScrollReveal delay={0.2}>
            <h3 className="text-3xl font-bold text-center mb-12">
              Two Challenges Limiting Human Potential
            </h3>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon
              return (
                <ScrollReveal key={challenge.title} delay={0.3 + index * 0.1}>
                  <Card className="h-full">
                    <Icon className={`${challenge.color} w-12 h-12 mb-4`} />
                    <h4 className="text-2xl font-bold text-text-primary mb-3">
                      {challenge.title}
                    </h4>
                    <p className="text-text-secondary leading-relaxed">
                      {challenge.description}
                    </p>
                  </Card>
                </ScrollReveal>
              )
            })}
          </div>

          <ScrollReveal delay={0.5}>
            <div className="max-w-4xl mx-auto">
              <div className="glass rounded-lg p-8">
                <p className="text-lg text-text-secondary leading-relaxed mb-4">
                  Your website analytics sit in Google Analytics. Your sales data sits in QuickBooks.
                  Your POS system tracks every transaction. <span className="text-text-primary font-medium">
                  Nobody ever connected the dots.</span>
                </p>
                <p className="text-lg text-text-secondary leading-relaxed mb-4">
                  Meanwhile, enterprises blend ALL this data together and see things you can&apos;t even imagine:
                  which customers are most profitable, what marketing actually drives revenue, when to launch
                  products based on patterns.
                </p>
                <p className="text-lg text-text-primary font-medium">
                  The problem is simple: People don&apos;t know what data exists, what questions to ask,
                  or what&apos;s actually possible.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* The Real Opportunity */}
        <div className="mb-20">
          <ScrollReveal delay={0.6}>
            <h3 className="text-3xl font-bold text-center mb-6">
              What Everyone&apos;s Missing
            </h3>
            <p className="text-xl text-text-secondary text-center max-w-3xl mx-auto mb-12">
              When you remove the complexity barriers and AI confusion, you unlock innovation from the{' '}
              <span className="text-blue-primary font-medium">
                90% of creative minds currently locked out
              </span>
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {opportunities.map((opportunity, index) => {
              const Icon = opportunity.icon
              return (
                <ScrollReveal key={opportunity.title} delay={0.7 + index * 0.1}>
                  <Card className="h-full border-2 border-blue-primary/20">
                    <Icon className="text-blue-primary w-12 h-12 mb-4" />
                    <h4 className="text-2xl font-bold text-text-primary mb-3">
                      {opportunity.title}
                    </h4>
                    <p className="text-text-secondary leading-relaxed">
                      {opportunity.description}
                    </p>
                  </Card>
                </ScrollReveal>
              )
            })}
          </div>

          <ScrollReveal delay={0.9}>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-blue-primary/10 to-purple-primary/10 rounded-lg p-8 border border-blue-primary/20">
                <p className="text-xl text-text-secondary leading-relaxed mb-4">
                  The teacher who could revolutionize personalized learning.
                  The restaurant owner who could transform local food culture.
                  The nonprofit director who could 10x their impact.
                  The local manufacturer who could predict supply chain issues before they happen.
                </p>
                <p className="text-xl text-text-primary font-medium">
                  These aren&apos;t technical people. They&apos;re experts in what they do.
                </p>
                <p className="text-2xl text-blue-primary font-bold mt-6">
                  What happens when they can leverage technology without becoming technologists?
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* The Wake Up Call */}
        <ScrollReveal delay={1.0}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass rounded-lg p-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">Plot Twist: You&apos;re Already Behind</span>
              </h3>
              <p className="text-xl text-text-secondary leading-relaxed mb-6">
                We&apos;re not trying to scare you about AI taking your job.
              </p>
              <p className="text-2xl text-text-primary font-medium mb-6">
                We&apos;re trying to show you how to prepare for a world where AI amplifies
                human capability—if you know how to use it.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                The future belongs to those who understand what&apos;s possible and learn to leverage it.
                Not the ones who wait for the perfect moment or the fear to subside.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
