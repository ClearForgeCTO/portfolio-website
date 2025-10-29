'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Rocket, Zap, Brain, Network, DollarSign, TrendingUp, CheckCircle } from 'lucide-react'
import ScrollReveal from '@/app/components/animations/ScrollReveal'
import Card from '@/app/components/ui/Card'
import Button from '@/app/components/ui/Button'
import ProjectNavigation from '@/app/components/ui/ProjectNavigation'

export default function SOPHIAProject() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const capabilities = [
    {
      icon: Brain,
      title: 'Multi-LLM Intelligent Routing',
      description: 'Dynamic model selection based on task complexity',
      details: 'Not every question needs GPT-4. We analyze intent, complexity, and required reasoning depth, then route to the optimal model (OpenAI, Anthropic, Google, Perplexity). Simple queries → cheap/fast models. Complex reasoning → premium models.',
      impact: '40-60% cost reduction vs direct AI usage',
    },
    {
      icon: Network,
      title: 'Context Persistence & Memory Architecture',
      description: 'AI that remembers without re-explaining',
      details: 'Enterprise systems maintain context across interactions. We built distributed memory architecture that tracks conversation history, learned preferences, and business-specific knowledge—so AI responses get smarter over time, not repetitive.',
      impact: 'Eliminates redundant context-setting across interactions',
    },
    {
      icon: Zap,
      title: 'Workflow Automation Orchestration',
      description: '48+ microservices working in concert',
      details: 'Using n8n as the orchestration backbone, automated workflows trigger based on business events. Customer inquiry → AI analyzes intent → Routes to system → Executes action → Logs to CRM → Triggers follow-up. No human intervention for routine operations.',
      impact: 'Operations that scale without linear headcount growth',
    },
    {
      icon: TrendingUp,
      title: 'Real-Time Intelligence Feedback Loops',
      description: 'Self-optimization through performance monitoring',
      details: 'Every interaction is measured: response quality, cost efficiency, user satisfaction. The system learns what works and automatically adjusts routing decisions. MindsDB provides the intelligence layer that identifies patterns humans miss.',
      impact: 'Continuous improvement without manual tuning',
    },
    {
      icon: DollarSign,
      title: 'Cost Optimization Engine',
      description: 'Making enterprise AI economically accessible',
      details: 'We cache common responses, batch process where latency isn\'t critical, use embeddings for semantic search before hitting expensive LLMs, and negotiate bulk API pricing.',
      impact: 'Enterprise capability at fractional cost',
    },
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

  const outcomes = [
    'Customer support that scales without hiring',
    'Data insights previously requiring a 6-person analytics team',
    'Marketing automation that adapts to what actually works',
    'Operations intelligence that predicts problems before they happen',
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
            <ProjectNavigation currentProject="sophia" />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="max-w-4xl mx-auto text-center mb-16 mt-16">
              <div className="inline-flex items-center space-x-3 mb-6">
                <Rocket className="w-16 h-16 text-blue-primary" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                SOPHIA<sup className="text-2xl">™</sup>
              </h1>
              <p className="text-2xl md:text-3xl gradient-text font-bold mb-6">
                Self-Optimizing Platform for Human Intelligence Augmentation
              </p>
              <p className="text-xl text-text-secondary leading-relaxed">
                Enterprise AI infrastructure at small business economics. Built from 48+ orchestrated microservices.
              </p>
            </div>
          </ScrollReveal>

          {/* The Problem */}
          <ScrollReveal delay={0.2}>
            <div className="max-w-4xl mx-auto mb-20">
              <div className="glass rounded-xl p-8">
                <h2 className="text-3xl font-bold mb-6">The Problem We&apos;re Solving</h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-4">
                  Enterprises spend millions on data teams, AI infrastructure, and custom integrations.
                  Small businesses get sold overpriced, limited SaaS tools that lock them in.
                </p>
                <p className="text-xl text-text-primary font-medium">
                  We built the bridge.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* What SOPHIA Actually Is */}
          <ScrollReveal delay={0.3}>
            <div className="max-w-4xl mx-auto mb-20">
              <h2 className="text-4xl font-bold mb-8 text-center">
                What SOPHIA<sup className="text-xl">™</sup> Actually Is
              </h2>
              <div className="bg-gradient-to-br from-blue-primary/10 to-purple-primary/10 rounded-xl p-8 border border-blue-primary/20">
                <p className="text-xl text-text-secondary leading-relaxed mb-4">
                  An orchestration layer, not another AI wrapper.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  We don&apos;t build AI from scratch. We orchestrate best-in-class open source solutions—the same
                  tools Reddit, Stripe, and Airbnb use—into an intelligent platform that makes decisions about
                  routing, cost optimization, and performance.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* How We Do It */}
          <ScrollReveal delay={0.4}>
            <div className="mb-20">
              <h2 className="text-4xl font-bold mb-12 text-center">
                How We <span className="gradient-text">Actually Do It</span>
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
                            <p className="text-text-secondary leading-relaxed mb-4">
                              {capability.details}
                            </p>
                            <div className="bg-blue-primary/10 rounded-lg p-3 inline-block">
                              <p className="text-blue-primary font-bold text-sm">
                                ⚡ {capability.impact}
                              </p>
                            </div>
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
              <div className="grid md:grid-cols-2 gap-6">
                {outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start space-x-3 glass rounded-lg p-6">
                    <CheckCircle className="w-6 h-6 text-blue-primary flex-shrink-0 mt-1" />
                    <p className="text-lg text-text-secondary">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={1.1}>
            <div className="max-w-3xl mx-auto text-center">
              <div className="glass rounded-xl p-12">
                <h3 className="text-3xl font-bold mb-6">
                  Ready to See What&apos;s Possible?
                </h3>
                <p className="text-xl text-text-secondary mb-8">
                  Let&apos;s talk about bringing enterprise AI capability to your business—without the enterprise price tag.
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
          <ScrollReveal delay={1.2}>
            <ProjectNavigation currentProject="sophia" />
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
