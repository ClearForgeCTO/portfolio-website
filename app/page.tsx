'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import Navigation from './components/sections/Navigation'
import Hero from './components/sections/Hero'
import TheProof from './components/sections/TheProof'
import About from './components/sections/About'
import AIRevolution from './components/sections/AIRevolution'
import Experience from './components/sections/Experience'
import Work from './components/sections/Work'
import Translator from './components/sections/Translator'
import TheCollision from './components/sections/TheCollision'
import TheVision from './components/sections/TheVision'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

export default function Home() {
  // Initialize smooth scrolling with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <main id="main-content">
      <Navigation />
      <Hero />
      <About />
      <AIRevolution />
      <Experience />
      <Work />
      <Translator />
      <TheCollision />
      <TheVision />
      <TheProof />
      <Contact />
      <Footer />
    </main>
  )
}
