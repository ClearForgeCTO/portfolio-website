'use client'

import ScrollReveal from '@/app/components/animations/ScrollReveal'
import Card from '@/app/components/ui/Card'
import { Coffee, Lightbulb, Users, Rocket, Heart } from 'lucide-react'

export default function TheCollision() {
  const collisionStory = [
    {
      icon: Coffee,
      title: 'The Raffle Prize',
      description: "I donated a prize to a Port St. Lucie Business Club raffle. Josh won it. He reached out to say thank you. I figured—why not meet up? Worst case, it's a cup of coffee.",
      quote: "I went into that coffee expecting nothing. I walked out having found the person I'd been searching for.",
    },
    {
      icon: Lightbulb,
      title: 'The Ten-Minute Recognition',
      description: "Ten minutes in, I realized I wasn't talking to another small business owner who needed help with their tech stack. I was talking to someone who'd been fighting the same war I had—just from the other side of the battlefield.",
      quote: "Josh understood the problem from the human side. I understood it from the systems side. But we were both furious about the same thing.",
    },
    {
      icon: Users,
      title: 'The Mirror Image',
      description: "I spent 20 years explaining to business people why their technology was failing them. Josh spent 20 years explaining to families why the financial system was failing them. Different industries. Same systemic gatekeeping. Same artificial complexity designed to keep people dependent.",
      quote: "We were both translators—just speaking different dialects of the same language.",
    },
    {
      icon: Rocket,
      title: 'The Marathon Sessions',
      description: "Our coffee meetings turned into multi-hour deep dives. I'd explain how enterprises orchestrate 40+ microservices to create intelligence platforms. Josh would ask the question that mattered: 'Why can't my business have that?' The answer was always the same: You can. They just don't want you to know how.",
      quote: "Josh saw the people being locked out. I saw the technology being weaponized as a moat. Together, we saw the path forward.",
    },
  ]

  return (
    <section id="collision" className="section bg-surface-l1">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="gradient-text">Collision</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              How a raffle prize connected two translators fighting the same war from opposite sides
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-8 max-w-5xl mx-auto mb-16">
          {collisionStory.map((chapter, index) => {
            const Icon = chapter.icon
            return (
              <ScrollReveal key={chapter.title} delay={0.2 + index * 0.1}>
                <Card className="border-l-4 border-blue-primary">
                  <div className="flex items-start space-x-4">
                    <Icon className="w-12 h-12 text-blue-primary flex-shrink-0 mt-1" />
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-text-primary mb-3">
                        {chapter.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed mb-4">
                        {chapter.description}
                      </p>
                      <div className="bg-blue-primary/10 border-l-4 border-blue-primary p-4 rounded">
                        <p className="text-blue-light italic">
                          {chapter.quote}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal delay={0.6}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-primary/10 to-cyan-primary/10 rounded-xl p-12 border border-blue-primary/20">
              <div className="text-center mb-8">
                <Heart className="w-16 h-16 text-pink-primary mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-6">
                  Then We Started Connecting The Dots
                </h3>
              </div>

              <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                <p>
                  The systemic problem that affects every small business trying to compete in a world designed for giants.
                </p>

                <p className="text-text-primary font-medium">
                  Small businesses generate massive amounts of intelligence every single day—but have no way to connect it.
                </p>

                <p>
                  Website analytics sit isolated in Google Analytics. Financial data lives in QuickBooks.
                  Customer interactions scatter across email, social media, phone systems, and face-to-face conversations.
                  Reviews accumulate on multiple platforms. Marketing performance fragments across different tools.
                </p>

                <p className="text-text-primary font-medium">
                  Nobody ever built the connective tissue.
                </p>

                <p>
                  Meanwhile, Fortune 500 companies orchestrate all of this into unified intelligence platforms
                  that reveal patterns small businesses can&apos;t see: customer lifetime value predictions,
                  real-time profitability analysis, predictive marketing optimization, operational efficiency insights,
                  automated workflow intelligence.
                </p>

                <p className="text-xl text-blue-light font-bold text-center pt-6">
                  That&apos;s when ClearForge AI crystallized.
                </p>

                <p className="text-center">
                  Not to sell AI hype. Not to create dependency. But to demolish the artificial barriers
                  keeping 43% of US GDP locked out of the intelligence infrastructure that could transform
                  their operations.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.8}>
          <div className="mt-12 text-center">
            <div className="glass rounded-xl p-8 max-w-3xl mx-auto">
              <p className="text-2xl text-text-primary font-bold mb-4">
                Two Translators. One Mission.
              </p>
              <p className="text-lg text-text-secondary mb-4">
                Shawn translates enterprise technology into accessible reality.
              </p>
              <p className="text-lg text-text-secondary mb-6">
                Josh translates complex concepts into human language and builds the relationships
                that turn capability into impact.
              </p>
              <p className="text-xl text-blue-primary font-medium">
                Together, we&apos;re unlocking the 90% who&apos;ve been locked out by complexity.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
