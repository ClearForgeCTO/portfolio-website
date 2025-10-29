'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '@/app/components/animations/ScrollReveal'
import { EXPERIENCE_DATA } from '@/app/lib/constants'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>('clearforge')

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="experience" className="section bg-bg-primary">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Experience & <span className="gradient-text">Impact</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Two decades of translating enterprise capabilities into business value
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-primary via-purple-primary to-pink-primary"></div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {EXPERIENCE_DATA.map((exp, index) => (
              <ScrollReveal key={exp.id} delay={index * 0.2}>
                <div className="relative">
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 -ml-2 rounded-full bg-blue-primary ring-4 ring-bg-primary z-10"></div>

                  {/* Card */}
                  <motion.div
                    className={`
                      glass rounded-xl p-6 md:p-8
                      ${index % 2 === 0 ? 'md:mr-[52%]' : 'md:ml-[52%]'}
                      hover:scale-[1.02] transition-all duration-300 cursor-pointer
                    `}
                    onClick={() => toggleExpand(exp.id)}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-text-primary mb-1">
                          {exp.company}
                        </h3>
                        <p className="text-blue-primary font-medium">{exp.role}</p>
                      </div>
                      <span className="text-text-secondary text-sm whitespace-nowrap ml-4">
                        {exp.period}
                      </span>
                    </div>

                    {/* Highlight */}
                    <p className="text-text-secondary mb-4 italic">
                      {exp.highlight}
                    </p>

                    {/* Expandable Content */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedId === exp.id ? 'auto' : 0,
                        opacity: expandedId === exp.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-glass-border">
                        <h4 className="text-sm font-semibold text-text-primary mb-3">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2 mb-4">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start text-text-secondary">
                              <span className="text-blue-primary mr-2">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>

                        <h4 className="text-sm font-semibold text-text-primary mb-3">
                          Technologies & Skills:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-surface-l2 rounded-full text-sm text-text-secondary hover:text-blue-primary hover:bg-surface-l3 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    {/* Expand Button */}
                    <button
                      className="mt-4 flex items-center text-blue-primary hover:text-blue-light transition-colors focus:outline-none focus:ring-2 focus:ring-blue-primary rounded px-2 py-1"
                      aria-expanded={expandedId === exp.id}
                    >
                      {expandedId === exp.id ? (
                        <>
                          <span className="mr-2">Show Less</span>
                          <ChevronUp size={20} />
                        </>
                      ) : (
                        <>
                          <span className="mr-2">Show More</span>
                          <ChevronDown size={20} />
                        </>
                      )}
                    </button>
                  </motion.div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
