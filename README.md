# Shawn Sloan - Portfolio Website

A technically sophisticated portfolio website demonstrating what's possible when human expertise meets AI capabilities. Built with Next.js 14, TypeScript, and Framer Motion.

## 🚀 Features

- **Interactive Hero Section** - Animated particle system with mouse interaction
- **Smooth Scrolling** - Lenis-powered smooth scroll experience
- **Glassmorphic Design** - ClearForge Design System with premium aesthetics
- **Scroll Animations** - Progressive reveal animations as content enters viewport
- **Animated Counters** - Statistics that count up when scrolled into view
- **Interactive Timeline** - Expandable experience cards with 3D effects
- **Horizontal Scroll Section** - Touch-friendly product showcase
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Accessibility** - WCAG AA compliant with keyboard navigation
- **Performance Optimized** - Target 95+ Lighthouse scores

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Smooth Scroll:** Lenis
- **Icons:** Lucide React
- **Image Optimization:** next/image with WebP

## 📦 Project Structure

```
portfolio-website/
├── app/
│   ├── components/
│   │   ├── animations/      # Reusable animation wrappers
│   │   │   ├── FadeIn.tsx
│   │   │   └── ScrollReveal.tsx
│   │   ├── sections/        # Page sections
│   │   │   ├── Navigation.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── TheProof.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Work.tsx
│   │   │   ├── Translator.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/              # Reusable UI components
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── Counter.tsx
│   ├── lib/
│   │   ├── constants.ts     # Content and data
│   │   └── utils.ts         # Helper functions
│   ├── globals.css          # Design System variables
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── public/
│   └── images/              # Optimized images
└── input/                   # Source assets
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The site will be available at [http://localhost:3000](http://localhost:3000)

## 🎨 Design System

The site uses the ClearForge Design System with:

- **Deep blacks** (#0A0A0B background)
- **Brand colors** - Blue (#0066CC), Purple (#6600CC), Pink (#FF0080)
- **Glassmorphism** - Premium blur effects with subtle borders
- **Typography** - System fonts with optimized loading
- **Animations** - Purpose-driven with reduced motion support

## ♿ Accessibility

- WCAG AA compliant
- Keyboard navigation throughout
- Screen reader optimized
- Focus indicators on all interactive elements
- Skip links for navigation
- `prefers-reduced-motion` support

## 📊 Performance

Target metrics:
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

Optimization strategies:
- Image optimization with WebP
- Code splitting per route
- Lazy loading below-fold content
- Zero layout shift (CLS < 0.1)

## 📝 Content Updates

To update content, edit the constants in `app/lib/constants.ts`:

- `HERO_CONTENT` - Hero section copy
- `ABOUT_CONTENT` - About section and statistics
- `EXPERIENCE_DATA` - Work experience
- `PRODUCTS` - ClearForge product information
- `SERVICES` - Service offerings
- `SOCIAL_LINKS` - Social media links

## 🚀 Deployment

This site is optimized for deployment on Vercel:

```bash
# Deploy to Vercel
vercel

# Or push to GitHub and connect to Vercel
git push origin main
```

## 📄 License

Copyright © 2025 Shawn Sloan. All rights reserved.

## 🤖 Built By

This site was built by AI (Claude) under the direction of human expertise, demonstrating what's possible when technical knowledge meets AI capabilities. Build time: ~30 minutes.

---

**Built by AI. Directed by Expertise.**
*ClearForge Technologies*
