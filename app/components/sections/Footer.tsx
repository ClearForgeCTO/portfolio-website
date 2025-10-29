'use client'

import { SOCIAL_LINKS, SITE_INFO } from '@/app/lib/constants'
import { Linkedin, Twitter, Github, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="glass border-t border-glass-border py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-2">
              {SITE_INFO.name}
            </h3>
            <p className="text-text-secondary text-sm mb-4">
              {SITE_INFO.title}
            </p>
            <p className="text-text-tertiary text-xs italic">
              Built by AI. Directed by Expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-text-secondary hover:text-blue-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-text-secondary hover:text-blue-primary transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#work" className="text-text-secondary hover:text-blue-primary transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#contact" className="text-text-secondary hover:text-blue-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4">
              Connect
            </h4>
            <div className="flex space-x-4">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-blue-primary transition-colors hover:scale-110 transform"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-blue-primary transition-colors hover:scale-110 transform"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-blue-primary transition-colors hover:scale-110 transform"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.email}
                className="text-text-secondary hover:text-blue-primary transition-colors hover:scale-110 transform"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-glass-border pt-8 text-center">
          <p className="text-text-secondary text-sm">
            © {currentYear} {SITE_INFO.name}. All rights reserved.
          </p>
          <p className="text-text-tertiary text-xs mt-2">
            ClearForge AI • Forging the Connection Between Human Intelligence and AI
          </p>
        </div>
      </div>
    </footer>
  )
}
