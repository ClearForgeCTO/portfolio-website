'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Search, Target, Network, BarChart, Repeat, AlertCircle, CheckCircle } from 'lucide-react'
import ScrollReveal from '@/app/components/animations/ScrollReveal'
import Card from '@/app/components/ui/Card'
import Button from '@/app/components/ui/Button'
import ProjectNavigation from '@/app/components/ui/ProjectNavigation'

export default function ASOProject() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const howWeDoIt = [
    {
      icon: Target,
      title: 'Intent Mapping & Semantic Architecture',
      description: 'Understanding the "job to be done" behind searches',
      details: 'We don\'t optimize for "best pizza near me." We optimize for the intent: "I want authentic Italian pizza, quick service, family-friendly, under $50." We map your business capabilities to intent categories, then structure content so AI systems recognize the match. This includes entity relationships, service taxonomies, and outcome-based descriptions.',
      impact: 'AI systems understand what you do and who you serve',
    },
    {
      icon: Network,
      title: 'Multi-Platform Discoverability Framework',
      description: 'One source of truth, infinite discovery paths',
      details: 'We create a canonical knowledge base about your business (services, expertise, outcomes, proof) using structured data formats that feed traditional search, AI training contexts, voice assistants, and social platforms. When ChatGPT or Perplexity looks for an answer, your business shows up because we\'ve made you discoverable to their retrieval systems.',
      impact: 'Consistent presence across all search modalities',
    },
    {
      icon: BarChart,
      title: 'AI Training Context Optimization',
      description: 'Teaching AI systems what you actually do',
      details: 'Large Language Models pull from training data and real-time retrieval. We optimize your digital footprint using techniques like semantic markup, knowledge graph integration, and citation-worthy content structures. When an AI searches for solutions in your domain, it finds authoritative, clear information about your capabilities.',
      impact: 'Become a trusted source AI systems reference',
    },
    {
      icon: Repeat,
      title: 'Continuous Intelligence Validation',
      description: 'Real-time testing across search modalities',
      details: 'We don\'t guess what\'s working. We systematically test: How do ChatGPT, Perplexity, Google, Bing, and voice assistants respond when asked about your services? What language triggers recommendations? What competitor signals are stronger? We track, measure, adjust, and re-validate continuously.',
      impact: 'Data-driven optimization, not assumptions',
    },
    {
      icon: AlertCircle,
      title: 'Cross-Platform Consistency Engine',
      description: 'Why conflicting information kills discoverability',
      details: 'AI systems penalize inconsistency. If your website says one thing, your Google Business says another, and your LinkedIn says something else, AI doesn\'t know what to trust—so it ignores you. We establish a single source of truth and propagate it across all touchpoints. Business information, service descriptions, expertise claims, customer outcomes—all aligned.',
      impact: 'Trusted signals that AI systems can confidently cite',
    },
  ]

  const methodology = [
    { step: '1. Intent Analysis', description: 'Map the jobs your customers are trying to accomplish' },
    { step: '2. Digital Audit', description: 'Identify where your current presence confuses or fails AI systems' },
    { step: '3. Semantic Structuring', description: 'Rebuild information architecture for machine + human understanding' },
    { step: '4. Multi-Platform Deployment', description: 'Publish optimized presence across discovery channels' },
    { step: '5. Validation Loop', description: 'Continuously test, measure, and refine' },
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
    'Show up in ChatGPT recommendations when prospects ask for solutions',
    'Appear in Perplexity citations as an authoritative source',
    'Get discovered through voice assistants without paid ads',
    'Build competitive moat as AI systems learn to trust your signals',
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
            <ProjectNavigation currentProject="aso-nexus" />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="max-w-4xl mx-auto text-center mb-16 mt-16">
              <div className="inline-flex items-center space-x-3 mb-6">
                <Search className="w-16 h-16 text-blue-primary" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                ASO<sup className="text-2xl">™</sup>
              </h1>
              <p className="text-2xl md:text-3xl gradient-text font-bold mb-6">
                Adaptive Search Optimization<sup className="text-xl">™</sup>
              </p>
              <p className="text-xl text-text-secondary leading-relaxed">
                Preparing businesses for how people actually find information today
              </p>
            </div>
          </ScrollReveal>

          {/* The Problem */}
          <ScrollReveal delay={0.2}>
            <div className="max-w-4xl mx-auto mb-20">
              <div className="glass rounded-xl p-8">
                <h2 className="text-3xl font-bold mb-6">The Problem: Search Has Fundamentally Changed</h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-4">
                  65% of searches now happen through AI chat interfaces (ChatGPT, Perplexity, Gemini).
                  Traditional SEO optimizes for Google&apos;s algorithm.
                </p>
                <p className="text-xl text-text-primary font-medium">
                  ASO<sup className="text-sm">™</sup> optimizes for intent satisfaction across all discovery platforms—traditional
                  search, AI chat, voice assistants, and whatever comes next.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* What ASO Actually Is */}
          <ScrollReveal delay={0.3}>
            <div className="max-w-4xl mx-auto mb-20">
              <h2 className="text-4xl font-bold mb-8 text-center">
                What ASO<sup className="text-xl">™</sup> Actually Is
              </h2>
              <div className="bg-gradient-to-br from-blue-primary/10 to-purple-primary/10 rounded-xl p-8 border border-blue-primary/20 mb-8">
                <p className="text-2xl text-text-primary font-bold leading-relaxed mb-4 text-center">
                  The ONLY Holistic Approach to Modern Discovery
                </p>
                <p className="text-xl text-text-secondary leading-relaxed mb-4">
                  ASO<sup className="text-xs">™</sup> isn&apos;t just another SEO strategy. It&apos;s the unified framework
                  that addresses <span className="text-text-primary font-bold">every way people find businesses today</span>.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  While competitors chase individual channels, ASO<sup className="text-xs">™</sup> orchestrates them all—creating
                  a seamless discovery presence that works whether someone searches on Google, asks ChatGPT,
                  uses voice commands, or scrolls social media.
                </p>
              </div>

              {/* The Four Pillars */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="glass rounded-lg p-6 border-l-4 border-blue-primary">
                  <h3 className="text-xl font-bold text-text-primary mb-2">SEO</h3>
                  <p className="text-sm text-text-tertiary mb-2">Search Engine Optimization</p>
                  <p className="text-text-secondary">Traditional search discovery through Google, Bing, and search engines</p>
                </div>
                <div className="glass rounded-lg p-6 border-l-4 border-purple-primary">
                  <h3 className="text-xl font-bold text-text-primary mb-2">GEO</h3>
                  <p className="text-sm text-text-tertiary mb-2">Generative Engine Optimization</p>
                  <p className="text-text-secondary">AI-powered discovery through ChatGPT, Perplexity, Gemini, and LLMs</p>
                </div>
                <div className="glass rounded-lg p-6 border-l-4 border-pink-primary">
                  <h3 className="text-xl font-bold text-text-primary mb-2">VSO</h3>
                  <p className="text-sm text-text-tertiary mb-2">Voice Search Optimization</p>
                  <p className="text-text-secondary">Voice-based discovery through Alexa, Siri, Google Assistant, and voice AI</p>
                </div>
                <div className="glass rounded-lg p-6 border-l-4 border-blue-light">
                  <h3 className="text-xl font-bold text-text-primary mb-2">Social Discovery</h3>
                  <p className="text-sm text-text-tertiary mb-2">Platform-Native Content</p>
                  <p className="text-text-secondary">Social content generation based on web engagement and platform requirements</p>
                </div>
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
                {howWeDoIt.map((capability, index) => {
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

          {/* The Methodology */}
          <ScrollReveal delay={0.8}>
            <div className="max-w-4xl mx-auto mb-20">
              <h2 className="text-3xl font-bold mb-8 text-center">
                The ASO<sup className="text-lg">™</sup> Implementation Framework
              </h2>
              <div className="space-y-4">
                {methodology.map((item, index) => (
                  <div key={index} className="glass rounded-lg p-6 flex items-start space-x-4">
                    <div className="text-3xl font-bold gradient-text flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-text-primary mb-2">
                        {item.step.replace(/^\d+\.\s/, '')}
                      </h4>
                      <p className="text-text-secondary">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* The T.R.A.N.S.L.A.T.E. Methodology */}
          <ScrollReveal delay={1.0}>
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

          {/* Social Content Engine */}
          <ScrollReveal delay={1.0}>
            <div className="max-w-4xl mx-auto mb-20">
              <div className="glass rounded-xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-center">
                  Automated Social Content Production
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  ASO<sup className="text-xs">™</sup> doesn&apos;t just optimize your website—it generates platform-native
                  social content based on what&apos;s actually working on your web presence.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-text-secondary">
                      <span className="text-text-primary font-bold">Content Intelligence:</span> Analyzes which web content
                      drives engagement, then adapts it for LinkedIn, X, Facebook, Instagram, and TikTok
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-text-secondary">
                      <span className="text-text-primary font-bold">Platform Requirements:</span> Continuously monitors and
                      adapts to changing algorithm requirements across all platforms
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-text-secondary">
                      <span className="text-text-primary font-bold">Unified Messaging:</span> Maintains brand consistency
                      while optimizing format and tone for each platform&apos;s audience
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-light rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-text-secondary">
                      <span className="text-text-primary font-bold">Performance Feedback:</span> Tracks social performance
                      and feeds insights back into your overall discovery strategy
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-primary/10 rounded-lg border-l-4 border-blue-primary">
                  <p className="text-text-primary font-bold mb-2">
                    This is the competitive advantage most businesses miss:
                  </p>
                  <p className="text-text-secondary">
                    Your competitors are manually posting to social media. You&apos;re systematically generating
                    platform-optimized content based on proven web engagement—while maintaining consistent
                    discoverability across search, AI chat, and voice.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Why This Matters Now */}
          <ScrollReveal delay={1.1}>
            <div className="max-w-4xl mx-auto mb-20">
              <div className="bg-gradient-to-br from-pink-primary/10 to-purple-primary/10 rounded-xl p-8 border border-pink-primary/20">
                <h2 className="text-3xl font-bold mb-6 text-center">
                  <span className="gradient-text">Why This Matters NOW</span>
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-4">
                  Right now, AI search is still learning. Businesses that establish strong semantic clarity
                  NOW become the authoritative sources AI systems reference.
                </p>
                <p className="text-xl text-text-primary font-medium text-center">
                  Wait 2 years, and you&apos;re competing against entrenched signals.<br />
                  This is the land grab moment for AI-powered discovery.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Real-World Impact */}
          <ScrollReveal delay={1.2}>
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
          <ScrollReveal delay={1.3}>
            <div className="max-w-3xl mx-auto text-center">
              <div className="glass rounded-xl p-12">
                <h3 className="text-3xl font-bold mb-6">
                  Ready to Get Discovered in the AI Era?
                </h3>
                <p className="text-xl text-text-secondary mb-8">
                  Let&apos;s talk about positioning your business for the future of search—before your competitors do.
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
          <ScrollReveal delay={1.4}>
            <ProjectNavigation currentProject="aso-nexus" />
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
