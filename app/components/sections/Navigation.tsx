'use client'

import { useState, useEffect } from 'react'
import { NAV_ITEMS, SITE_INFO, SOCIAL_LINKS } from '@/app/lib/constants'
import { cn } from '@/app/lib/utils'
import { Menu, X, Download } from 'lucide-react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'bg-surface-l1/95 backdrop-blur-lg py-4 shadow-lg border-b border-glass-border' : 'bg-transparent py-6'
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#hero')}
            className="text-xl font-bold gradient-text hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-primary rounded"
            aria-label="Home"
          >
            {SITE_INFO.name}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-text-secondary hover:text-text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-blue-primary rounded px-2 py-1"
              >
                {item.label}
              </button>
            ))}
            <a
              href={SOCIAL_LINKS.resume}
              download
              className="flex items-center space-x-2 px-4 py-2 bg-blue-primary hover:bg-blue-hover text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-primary"
            >
              <Download size={16} />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-text-primary hover:text-blue-primary transition-colors focus:outline-none focus:ring-2 focus:ring-blue-primary rounded"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative h-full w-full flex items-center justify-center">
            <div className="glass-strong rounded-2xl p-8 m-4 flex flex-col space-y-6">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-2xl text-text-primary hover:text-blue-primary transition-colors focus:outline-none focus:ring-2 focus:ring-blue-primary rounded px-4 py-2"
                >
                  {item.label}
                </button>
              ))}
              <a
                href={SOCIAL_LINKS.resume}
                download
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-blue-primary hover:bg-blue-hover text-white rounded-lg transition-colors text-xl focus:outline-none focus:ring-2 focus:ring-blue-primary"
              >
                <Download size={20} />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
