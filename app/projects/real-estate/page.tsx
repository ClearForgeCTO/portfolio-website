'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Building2, Users, Zap, Heart, MessageSquare, TrendingUp, CheckCircle } from 'lucide-react'
import ScrollReveal from '@/app/components/animations/ScrollReveal'
import Card from '@/app/components/ui/Card'
import Button from '@/app/components/ui/Button'
import ProjectNavigation from '@/app/components/ui/ProjectNavigation'

export default function RealEstateProject() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const problems = [
    'Agents drowning in administrative tasks instead of building relationships',
    'Clients feeling like another transaction in a conveyor belt system',
    'Technology that creates distance instead of enabling connection',
    'Back-office operations consuming resources that should serve clients',
  ]

  const capabilities = [
    {
      icon: MessageSquare,
      title: 'AI-Driven Client Engagement',
      description: 'Intelligent systems that handle routine inquiries and education',
      details: 'AI that responds to initial client questions, provides property information, schedules showings, and offers educational resources—freeing agents to focus on relationship-building and strategic guidance when it truly matters.',
    },
    {
      icon: Zap,
      title: 'Automated Back-End Operations',
      description: 'Streamline processes that don\'t require human touch',
      details: 'Document processing, compliance tracking, transaction coordination, appointment scheduling, and follow-up sequences handled automatically. Agents spend time with clients, not with paperwork.',
    },
    {
      icon: Users,
      title: 'Social Outreach & Relationship Management',
      description: 'Stay connected without manual effort',
      details: 'Intelligent CRM that tracks meaningful touchpoints, suggests outreach timing, automates social engagement, and ensures no client relationship goes stale—while keeping communication genuine and personal.',
    },
    {
      icon: TrendingUp,
      title: 'Lead Generation & Qualification',
      description: 'Bring quality prospects to your agents automatically',
      details: 'AI-powered lead generation across multiple channels, intelligent qualification based on behavior and fit, and automated nurturing until prospects are ready for human conversation.',
    },
  ]

  const outcomes = [
    'Agents spend 70% more time with clients, 70% less time on administrative tasks',
    'Faster response times without sacrificing personal touch',
    'Consistent client experience even during high-volume periods',
    'Scalable operations that grow without proportional overhead increases',
    'Technology that enhances relationships instead of replacing them',
  ]

  const translateSteps = [
    { letter: 'T', word: 'Truth Assessment', description: 'Honest conversation about what you actually need' },
    { letter: 'R', word: 'Resources Mapping', description: 'What you already have that we can leverage' },
    { letter: 'A', word: 'Amplification Planning', description: 'Designing YOUR specific solution' },
    { letter: 'N', word: 'Navigate Implementation', description: 'Building it together, at YOUR pace' },
    { letter: 'S', word: 'Systematic Training', description: 'You learning WHY, not just HOW' },
    { letter: 'L', word: 'Launch Execution', description: 'You take ownership when YOU\'RE ready' },
    { letter: 'A', word: 'Adapt Monitoring', description: 'Adjusting as you grow' },
    { letter: 'T', word: 'Track Results', description: 'Transparent documentation of what works' },
    { letter: 'E', word: 'Evolve Continuously', description: 'Your learning helps everyone' },
  ]

  return (
    <main className="min-h-screen bg-bg-primary">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-bg-primary/80 backdrop-blur-lg border-b border-glass-border">
        <div className="container mx-auto px-6 py-4">
          <Link href="/#work" className="inline-flex items-center space-x-2 text-text-secondary hover:text-blue-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section pt-20">
        <div className="container">
          {/* Top Navigation */}
          <ScrollReveal>
            <ProjectNavigation currentProject="real-estate" />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="max-w-4xl mx-auto text-center mb-16 mt-16">
              <div className="inline-flex items-center space-x-3 mb-6">
                <Building2 className="w-16 h-16 text-blue-primary" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Real Estate Intelligence Platform
              </h1>
              <p className="text-2xl md:text-3xl gradient-text font-bold mb-6">
                Bringing Humanity Back to Real Estate
              </p>
              <p className="text-xl text-text-secondary leading-relaxed">
                SaaS platform for Brokers, Agents, and Lenders—AI-driven operations that free you to focus on relationships
              </p>
            </div>
          </ScrollReveal>

          {/* The Problem */}
          <ScrollReveal delay={0.2}>
            <div className="max-w-4xl mx-auto mb-20">
              <div className="glass rounded-xl p-8">
                <h2 className="text-3xl font-bold mb-6">The Problem: Technology Created Distance</h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  Real estate became a technology arms race. Every new platform promised efficiency.
                  Instead, they created a market where clients feel like transactions and agents drown in tools.
                </p>
                <div className="space-y-3">
                  {problems.map((problem, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-pink-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-text-secondary">{problem}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* The Solution */}
          <ScrollReveal delay={0.3}>
            <div className="max-w-4xl mx-auto mb-20">
              <div className="bg-gradient-to-br from-blue-primary/10 to-purple-primary/10 rounded-xl p-8 border border-blue-primary/20 text-center">
                <Heart className="w-16 h-16 text-pink-primary mx-auto mb-6" />
                <p className="text-2xl text-text-primary font-bold mb-4">
                  What if technology handled the busywork so you could focus on the relationship?
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  Built for the people who understand that real estate is about trust, guidance, and human connection—
                  not just processing transactions efficiently.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* How It Works */}
          <ScrollReveal delay={0.4}>
            <div className="mb-20">
              <h2 className="text-4xl font-bold mb-12 text-center">
                How It <span className="gradient-text">Actually Works</span>
              </h2>

              <div className="space-y-8 max-w-5xl mx-auto">
                {capabilities.map((capability, index) => {
                  const Icon = capability.icon
                  return (
                    <ScrollReveal key={capability.title} delay={0.5 + index * 0.1}>
                      <Card className="border-l-4 border-blue-primary">
                        <div className="flex items-start space-x-4">
                          <Icon className="w-12 h-12 text-blue-primary flex-shrink-0 mt-1" />
                          <div className="flex-grow">
                            <h3 className="text-2xl font-bold text-text-primary mb-2">
                              {capability.title}
                            </h3>
                            <p className="text-purple-primary font-medium mb-3 italic">
                              {capability.description}
                            </p>
                            <p className="text-text-secondary leading-relaxed">
                              {capability.details}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </ScrollReveal>
                  )
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* The T.R.A.N.S.L.A.T.E. Methodology */}
          <ScrollReveal delay={0.8}>
            <div className="mb-20 bg-surface-l1 rounded-xl p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">
                  Built Using <span className="gradient-text">T.R.A.N.S.L.A.T.E.</span><sup className="text-xl">™</sup>
                </h2>
                <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                  Our proven methodology for transferring capability, not creating dependency
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {translateSteps.map((step, index) => (
                  <div key={step.letter} className="glass rounded-lg p-6">
                    <div className="flex items-start space-x-3 mb-3">
                      <span className="text-3xl font-bold gradient-text">{step.letter}</span>
                      <div>
                        <h4 className="font-bold text-text-primary">{step.word}</h4>
                      </div>
                    </div>
                    <p className="text-sm text-text-secondary">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Real-World Impact */}
          <ScrollReveal delay={1.0}>
            <div className="max-w-4xl mx-auto mb-20">
              <h2 className="text-4xl font-bold mb-8 text-center">Real-World Impact</h2>
              <div className="space-y-4">
                {outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start space-x-3 glass rounded-lg p-6">
                    <CheckCircle className="w-6 h-6 text-blue-primary flex-shrink-0 mt-1" />
                    <p className="text-lg text-text-secondary">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Who This Is For */}
          <ScrollReveal delay={1.1}>
            <div className="max-w-4xl mx-auto mb-20">
              <div className="glass rounded-xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-center">Who This Is For</h2>
                <div className="space-y-4 text-lg text-text-secondary leading-relaxed">
                  <p>
                    <span className="text-text-primary font-bold">Brokers</span> who want their agents focused on
                    closing deals, not buried in administrative tasks.
                  </p>
                  <p>
                    <span className="text-text-primary font-bold">Agents</span> who got into real estate to help
                    people make life-changing decisions, not to manage software platforms.
                  </p>
                  <p>
                    <span className="text-text-primary font-bold">Lenders</span> who want to maintain relationships
                    throughout the client lifecycle, not just at closing.
                  </p>
                  <p className="text-text-primary font-medium text-center pt-4">
                    If you believe relationships matter more than transaction volume, this is for you.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={1.2}>
            <div className="max-w-3xl mx-auto text-center">
              <div className="glass rounded-xl p-12">
                <h3 className="text-3xl font-bold mb-6">
                  Ready to Bring Humanity Back?
                </h3>
                <p className="text-xl text-text-secondary mb-8">
                  Let&apos;s talk about building a platform that amplifies your relationships, not replaces them.
                </p>
                <Link href="/#contact">
                  <Button variant="primary" size="lg">
                    Start a Conversation
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Project Navigation */}
          <ScrollReveal delay={1.3}>
            <ProjectNavigation currentProject="real-estate" />
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
