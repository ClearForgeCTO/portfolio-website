'use client'

import { useState } from 'react'
import ScrollReveal from '@/app/components/animations/ScrollReveal'
import Card from '@/app/components/ui/Card'
import Button from '@/app/components/ui/Button'
import { COLLABORATION_APPROACHES, SOCIAL_LINKS, SITE_INFO } from '@/app/lib/constants'
import { Mail, Linkedin, Twitter, Github, MessageCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('sending')

    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success')
      setFormData({ name: '', email: '', service: '', message: '' })

      setTimeout(() => {
        setFormStatus('idle')
      }, 5000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="section bg-surface-l1">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How We Can <span className="gradient-text">Work Together</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Clear next steps. No friction. Real results.
            </p>
          </div>
        </ScrollReveal>

        {/* Collaboration Approaches */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {COLLABORATION_APPROACHES.map((approach, index) => (
            <ScrollReveal key={approach.id} delay={0.2 + index * 0.1}>
              <Card className="h-full flex flex-col">
                <h3 className="text-2xl font-bold text-text-primary mb-3">
                  {approach.title}
                </h3>
                <p className="text-text-secondary mb-4 italic">
                  {approach.description}
                </p>
                <ul className="space-y-2 flex-grow">
                  {approach.approach.map((item, i) => (
                    <li key={i} className="flex items-start text-text-secondary text-sm">
                      <span className="text-blue-primary mr-2 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Contact Form and Info */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <ScrollReveal delay={0.5}>
            <div className="glass rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

              {formStatus === 'success' ? (
                <div className="bg-blue-primary/20 border border-blue-primary rounded-lg p-6 text-center">
                  <p className="text-text-primary font-medium mb-2">
                    Thank you for reaching out!
                  </p>
                  <p className="text-text-secondary text-sm">
                    I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-text-secondary mb-2 text-sm">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-surface-l2 border border-glass-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-blue-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-text-secondary mb-2 text-sm">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-surface-l2 border border-glass-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-blue-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-text-secondary mb-2 text-sm">
                      Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full bg-surface-l2 border border-glass-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-blue-primary"
                    >
                      <option value="">Select an option</option>
                      <option value="consulting">Consulting & Advisory</option>
                      <option value="custom-development">Custom Development</option>
                      <option value="short-term">Short Term & Project Work</option>
                      <option value="speaking">Speaking & Workshops</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-text-secondary mb-2 text-sm">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full bg-surface-l2 border border-glass-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-blue-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={formStatus === 'sending'}
                  >
                    {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal delay={0.6}>
            <div className="space-y-8">
              <div className="glass rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6">Connect</h3>

                <div className="space-y-4">
                  <a
                    href={SOCIAL_LINKS.email}
                    className="flex items-center space-x-3 text-text-secondary hover:text-blue-primary transition-colors group"
                  >
                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>{SITE_INFO.email}</span>
                  </a>

                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-text-secondary hover:text-blue-primary transition-colors group"
                  >
                    <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={SOCIAL_LINKS.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-text-secondary hover:text-blue-primary transition-colors group"
                  >
                    <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>X (Twitter)</span>
                  </a>

                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-text-secondary hover:text-blue-primary transition-colors group"
                  >
                    <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={SOCIAL_LINKS.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-text-secondary hover:text-blue-primary transition-colors group"
                  >
                    <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>Discord</span>
                  </a>
                </div>
              </div>

              <div className="glass rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">Response Time</h3>
                <p className="text-text-secondary">
                  I typically respond within 24-48 hours during business days.
                  For urgent inquiries, put &quot;URGENT&quot; in the subject line and my mail routing will keep it at the top of my inbox.
                </p>
              </div>

              <div className="glass rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">Availability</h3>
                <p className="text-text-secondary">
                  Based in {SITE_INFO.location}
                  <br />
                  {SITE_INFO.availability}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
