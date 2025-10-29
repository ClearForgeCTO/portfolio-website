'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import ScrollReveal from '@/app/components/animations/ScrollReveal'
import Card from '@/app/components/ui/Card'
import Button from '@/app/components/ui/Button'
import { PRODUCTS } from '@/app/lib/constants'
import { Rocket, Search, Building2, ArrowRight } from 'lucide-react'

export default function Work() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const icons = {
    'sophia': Rocket,
    'aso-nexus': Search,
    'real-estate': Building2,
  }

  const projectLinks = {
    'sophia': '/projects/sophia',
    'aso-nexus': '/projects/aso',
    'real-estate': '/projects/real-estate',
  }

  return (
    <section id="work" ref={sectionRef} className="section bg-surface-l1">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Current Work: <span className="gradient-text">ClearForge AI</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Enterprise Infrastructure for Small Business Economics
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              The platform you&apos;re experiencing right now powers intelligence systems for businesses
              across real estate, professional services, automotive, and home services.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              We don&apos;t build custom AI from scratch. We orchestrate proven open source solutions—
              the same tools Reddit, Stripe, and Airbnb use—and make them accessible to businesses
              that could never afford enterprise data teams.
            </p>
          </div>
        </ScrollReveal>

        {/* Horizontal Scroll Section for Desktop */}
        <div className="hidden md:block pb-8">
          <div className="flex space-x-6 justify-center">
            {PRODUCTS.map((product, index) => {
              const Icon = icons[product.id as keyof typeof icons]
              const projectLink = projectLinks[product.id as keyof typeof projectLinks]
              return (
                <ScrollReveal key={product.id} delay={0.3 + index * 0.1}>
                  <motion.div
                    className="w-[400px] h-[480px]"
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="h-full flex flex-col">
                      <div className="mb-4 flex-grow">
                        <Icon className="w-12 h-12 text-blue-primary mb-4" />
                        <h3 className="text-2xl font-bold text-text-primary mb-2">
                          {product.name}
                        </h3>
                        <p className="text-text-secondary mb-4">
                          {product.description}
                        </p>

                        <ul className="space-y-3">
                          {product.features.map((feature, i) => (
                            <li key={i} className="flex items-start text-text-secondary">
                              <span className="text-blue-primary mr-2 mt-1">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 mt-4 border-t border-glass-border">
                        <Link href={projectLink}>
                          <Button variant="secondary" size="sm" className="w-full flex items-center justify-center group">
                            <span>Learn More</span>
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </Card>
                  </motion.div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>

        {/* Stacked Cards for Mobile */}
        <div className="md:hidden space-y-6">
          {PRODUCTS.map((product, index) => {
            const Icon = icons[product.id as keyof typeof icons]
            const projectLink = projectLinks[product.id as keyof typeof projectLinks]
            return (
              <ScrollReveal key={product.id} delay={0.3 + index * 0.1}>
                <Card className="flex flex-col">
                  <div className="mb-4 flex-grow">
                    <Icon className="w-12 h-12 text-blue-primary mb-4" />
                    <h3 className="text-2xl font-bold text-text-primary mb-2">
                      {product.name}
                    </h3>
                    <p className="text-text-secondary mb-4">
                      {product.description}
                    </p>

                    <ul className="space-y-3">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-text-secondary">
                          <span className="text-blue-primary mr-2 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 mt-4 border-t border-glass-border">
                    <Link href={projectLink}>
                      <Button variant="secondary" size="sm" className="w-full flex items-center justify-center group">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Architecture Note */}
        <ScrollReveal delay={0.6}>
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <div className="glass rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                48+ Microservices. One Platform.
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Not building custom—orchestrating best-in-class open source solutions
                (MindsDB, n8n, Supabase, WasmEdge) into accessible platforms.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
