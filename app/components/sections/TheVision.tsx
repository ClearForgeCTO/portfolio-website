'use client'

import ScrollReveal from '@/app/components/animations/ScrollReveal'
import Card from '@/app/components/ui/Card'
import Button from '@/app/components/ui/Button'
import { Target, Zap, Shield, Users, TrendingUp, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function TheVision() {
  return (
    <section id="vision" className="section bg-surface-l1">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="gradient-text">Vision</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              We know exactly which walls need to come down—and we're coming for them
            </p>
          </div>
        </ScrollReveal>

        {/* Shawn's Laser Focus */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-gradient-to-br from-blue-primary/10 to-purple-primary/10 rounded-xl p-8 border border-blue-primary/20">
              <div className="flex items-start space-x-4 mb-6">
                <Target className="w-12 h-12 text-blue-primary flex-shrink-0" />
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Laser-Focused. Zero Distractions.
                  </h3>
                  <p className="text-lg text-text-secondary leading-relaxed mb-4">
                    While Josh balances his mortgage practice with building ClearForge AI, I have one job:
                    <span className="text-text-primary font-bold"> tear down the walls that keep 43% of US GDP
                    locked out of enterprise capability.</span>
                  </p>
                  <p className="text-lg text-text-secondary leading-relaxed mb-4">
                    I've spent 20+ years learning how enterprise technology works—every architecture pattern,
                    every implementation strategy, every cost model. I know where the complexity is intentional.
                    I know where it's accidental. And I know exactly how to route around both.
                  </p>
                  <p className="text-xl text-text-primary font-medium mb-4">
                    This isn't a side project. This is the mission.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* A Message to Enterprise */}
        <ScrollReveal delay={0.4}>
          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <div className="glass rounded-xl p-8 border-l-4 border-pink-primary">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  A Message to <span className="text-pink-primary">Enterprise</span>
                </h3>
                <div className="space-y-4 text-lg text-text-secondary leading-relaxed">
                  <p>
                    You've built moats of complexity around capability that should be accessible to everyone.
                    Some of it's intentional—protecting market position. Most of it's accidental—legacy
                    architectures that made sense 15 years ago but haven't been questioned since.
                  </p>
                  <p>
                    I'm not asking for permission to cross your moats. I'm building bridges over them.
                  </p>
                  <p className="text-text-primary font-bold text-xl">
                    The 90% you've locked out? They're about to have the same intelligence infrastructure
                    you do—at 2% of the cost.
                  </p>
                  <p>
                    You can partner with us and help democratize capability. Or you can watch from the
                    sidelines while we make your $50 million systems irrelevant for small business.
                  </p>
                  <p className="text-blue-primary font-medium">
                    Your call.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* A Message to SMBs */}
        <ScrollReveal delay={0.6}>
          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <div className="glass rounded-xl p-8 border-l-4 border-blue-primary">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  A Message to <span className="text-blue-primary">Small Business</span>
                </h3>
                <div className="space-y-4 text-lg text-text-secondary leading-relaxed">
                  <p>
                    You've been told that enterprise AI is out of reach. That the technology is too complex,
                    the costs too high, the implementation timelines too long. That you need to accept
                    "good enough" solutions built for businesses your size.
                  </p>
                  <p className="text-text-primary font-bold text-xl">
                    That's over.
                  </p>
                  <p>
                    You generate intelligence 24/7—website analytics, sales data, customer interactions,
                    transaction history. Enterprises blend that data and see patterns you can't imagine.
                    Not because they're smarter. Because they have infrastructure you don't.
                  </p>
                  <p>
                    <span className="text-text-primary font-medium">Until now.</span>
                  </p>
                  <p>
                    Josh and I are building the same intelligence infrastructure Fortune 500 companies
                    deploy—orchestrating best-in-class open source (MindsDB, n8n, Supabase) into platforms
                    that cost 40-60% less than direct AI usage while delivering enterprise-grade reliability.
                  </p>
                  <p className="text-blue-primary font-bold text-xl">
                    We're not fighting for you. We're fighting with you.
                  </p>
                  <p>
                    This is about unlocking the 90% who've been told they don't belong in the conversation.
                    The creative minds, the domain experts, the people who know their business better than
                    any technologist ever could—if they just had access to the tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Two Translators, One Mission */}
        <ScrollReveal delay={0.8}>
          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-8 text-center">
              Two Translators. <span className="gradient-text">One Mission.</span>
            </h3>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card>
                <div className="flex items-start space-x-4 mb-6">
                  <div className="glass rounded-lg p-4">
                    <Users className="w-8 h-8 text-purple-primary" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-text-primary mb-2">Josh - CEO</h4>
                    <p className="text-purple-light italic">The Community Translator</p>
                  </div>
                </div>

                <p className="text-text-secondary mb-4 leading-relaxed">
                  Balancing his people-first mortgage practice with building ClearForge AI.
                  He understands what businesses actually need because he lives it every day.
                </p>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-purple-primary" />
                    <span className="text-text-secondary text-sm">Business Operations & Strategy</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-purple-primary" />
                    <span className="text-text-secondary text-sm">Community & Relationship Building</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-purple-primary" />
                    <span className="text-text-secondary text-sm">Market Understanding & Go-to-Market</span>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start space-x-4 mb-6">
                  <div className="glass rounded-lg p-4">
                    <Zap className="w-8 h-8 text-blue-primary" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-text-primary mb-2">Shawn - CTO</h4>
                    <p className="text-blue-light italic">The AI Translator</p>
                  </div>
                </div>

                <p className="text-text-secondary mb-4 leading-relaxed">
                  Laser-focused on one thing: tearing down the complexity walls that keep small
                  business locked out of enterprise capability.
                </p>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-blue-primary" />
                    <span className="text-text-secondary text-sm">Technology Strategy & Architecture</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-blue-primary" />
                    <span className="text-text-secondary text-sm">Product Vision & Platform Development</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-blue-primary" />
                    <span className="text-text-secondary text-sm">20+ Years Enterprise Infrastructure</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA to Josh's Portfolio */}
        <ScrollReveal delay={1.0}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="glass rounded-xl p-12">
              <h3 className="text-3xl font-bold mb-6">
                Meet the Community Translator
              </h3>
              <p className="text-xl text-text-secondary mb-8">
                Josh brings the relationships, the market understanding, and 20+ years of
                building trust in an industry that desperately needs it
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="http://localhost:3002" target="_blank">
                  <Button variant="primary" size="lg" className="group">
                    Meet My Co-Founder
                    <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="http://localhost:3002/#vision" target="_blank">
                  <Button variant="secondary" size="lg" className="group">
                    See His Journey
                    <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
