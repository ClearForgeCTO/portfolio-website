# Shawn Sloan - Portfolio Website Requirements Document

**Version:** 1.0  
**Date:** October 27, 2025  
**Builder:** Claude Code  
**Purpose:** Personal portfolio demonstrating AI-powered development capabilities while establishing credibility in SMB market

---

## PROJECT OVERVIEW

### Mission
Create a technically sophisticated portfolio website that demonstrates what's possible when human expertise meets AI capabilities. The site itself becomes proof of concept - if AI can build this level of sophistication in 30 minutes, imagine what it can do for your business.

### Target Audience
**Primary:** SMB owners, executives, and decision-makers who:
- Are intimidated by or skeptical of AI
- Don't understand how to leverage technology
- Need to see tangible proof before believing
- Respect deep experience over marketing hype

**Secondary:** 
- Potential consulting clients (mid-market companies)
- Industry peers and collaborators
- Media/press for thought leadership

### Core Message
"20+ years translating Fortune 500 capabilities into SMB reality. This site was built by AI following my direction - your business transformation starts the same way."

---

## DESIGN PHILOSOPHY

### Visual Identity
**Base:** ClearForge Design System (reference: ClearForge_Design_System_Bible_v1_0.md in repo)
- Deep blacks (#0A0A0B background)
- Blue (#0066CC), Purple (#6600CC), Pink (#FF0080)
- Glassmorphism with premium feel
- Sophisticated, not showy

### "Johnny Ive" Evolved
**Traditional Johnny Ive:**
- Minimalist
- Clean
- Functional

**This Site:**
- Minimalist **with purpose**
- Clean **with depth**
- Functional **with delight**

Think: Apple keynote meets Stripe's website meets high-end architectural visualization. Every animation serves a purpose. Every interaction teaches something. Nothing gratuitous.

### The "Wow" Factor
**NOT:** 
- Animated backgrounds that distract
- Spinning 3D objects for no reason
- Flashy effects that scream "look at me"

**YES:**
- Smooth page transitions that feel inevitable
- Scroll-triggered animations that reveal information progressively
- Micro-interactions that respond to user intent
- 3D elements that serve the narrative
- Parallax effects that add depth, not chaos

### Technical Sophistication Goals
1. **Demonstrate capability** - Site quality proves AI + human expertise works
2. **Remove fear** - Show AI as tool, not threat
3. **Inspire possibility** - "If this took 30 minutes, what could we do in 30 days?"
4. **Establish credibility** - Enterprise experience serving SMB needs

---

## TECHNICAL REQUIREMENTS

### Tech Stack
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS + CSS custom properties from Design System
- **Animations:** Framer Motion (high-performance, declarative)
- **3D (if used):** Three.js via React Three Fiber
- **Scroll:** Locomotive Scroll or Lenis (smooth scrolling)
- **Type:** TypeScript strict mode
- **Performance:** Target 90+ Lighthouse scores all categories

### Core Technical Features

#### 1. Advanced Page Transitions
- Smooth, physics-based page transitions between routes
- No jarring page loads - seamless navigation
- Route-specific transition styles
- Implement View Transitions API where supported

#### 2. Scroll-Based Animations
- Text/elements fade in as they enter viewport
- Parallax scrolling (subtle, purposeful)
- Progress indicators showing journey through content
- Scroll-triggered number counters (20+ years, 48+ microservices, etc.)
- Horizontal scroll sections for project showcases

#### 3. Interactive Elements
- Hover states that teach (tooltip micro-explanations)
- Clickable elements that expand/reveal detail
- Timeline component showing career progression
- Interactive project cards with 3D tilt effects
- Animated statistics/metrics

#### 4. Performance Optimization
- Image optimization (next/image with WebP)
- Code splitting per route
- Lazy loading below fold content
- Preload critical assets
- Zero layout shift (CLS = 0)

#### 5. Accessibility
- WCAG AA minimum
- Keyboard navigation throughout
- Screen reader optimized
- Reduced motion support (respect prefers-reduced-motion)
- Focus indicators per Design System

---

## CONTENT STRUCTURE

### Navigation (Sticky Header)
```
Logo (left) | About | Experience | Work | Contact (right)
```

Sticky header with glassmorphic background blur when scrolled. 
Smooth scroll to sections (one-page site with distinct sections).

---

### Section 1: Hero
**Goal:** Immediate credibility + intrigue

**Layout:**
- Full viewport height
- Large headline (animated in)
- Subheadline establishing expertise
- Subtle animated background (particles, gradient, or geometric pattern)
- Scroll indicator at bottom

**Copy Framework:**
```
Headline: "Forging the Connection Between Human Intelligence and AI"

Subheadline: "20+ years translating Fortune 500 capabilities into SMB reality. 
Technology translator. Enterprise architect. Founder, ClearForge Technologies."

CTA: "See the Journey" (smooth scroll to next section)
```

**Technical Features:**
- Text fade-in with stagger
- Animated gradient background (subtle)
- Particle system or geometric shapes that respond to mouse movement
- Smooth reveal of elements
- Parallax on background elements

---

### Section 2: The Proof (Meta Section)
**Goal:** Demonstrate capability through the site itself

**Layout:**
- Split screen or centered content
- Code-style terminal aesthetic showing "build log"
- Live statistics about site (build time, lines of code, components used)

**Copy Framework:**
```
"This site was built by AI in [X] minutes.

Not through templates.
Not through no-code builders.
Through expertise directing capability.

[Animated counter showing]:
- Build time: 32 minutes
- Components created: 47
- Lines of code: 2,847
- AI interactions: 23

This is what's possible when human expertise meets AI execution.
Now imagine what we can do for your business."
```

**Technical Features:**
- Terminal-style animation showing build process
- Live counters animating to final numbers
- Code syntax highlighting for sample snippets
- Glassmorphic cards for statistics
- Fade-in reveal as user scrolls

---

### Section 3: About / Philosophy
**Goal:** Establish credibility and approach

**Layout:**
- Two-column on desktop, stacked on mobile
- Left: Professional photo (placeholder for now)
- Right: Bio + philosophy

**Copy Framework:**
```
"The Technology Translator

I've spent two decades building the pipes that move data at scale for Fortune 500 companies. 
IBM. Computacenter. BTA. TBC Corporation.

But I got tired of watching small businesses—the 43% of our GDP—locked out of capabilities 
they desperately need because nobody bothers translating enterprise into their language.

I'm not a developer writing code at 2 AM. I'm an architect who sees the gaps between what 
technology can do and what businesses need, then builds the bridges that connect them.

I don't gatekeep. I don't hide behind jargon. I believe in data democracy—that the same 
intelligence tools Amazon uses should be accessible to the HVAC company down the street.

This site proves it. Built by AI. Directed by expertise. In less than an hour.

Your business transformation starts the same way."
```

**Key Stats (Animated Counters):**
- 20+ years enterprise architecture
- 4 Fortune 500+ companies
- 48+ microservices managed
- 40-60% cost reduction achieved

**Technical Features:**
- Image with subtle parallax/3D tilt on hover
- Text fade-in as scrolled into view
- Animated counters for statistics
- Timeline component showing career milestones

---

### Section 4: Experience / What I've Done
**Goal:** Deep credibility through specific achievements

**Layout:**
- Vertical timeline (desktop) or card stack (mobile)
- Each position/project is interactive card

**Content Structure:**
Each experience card includes:
- Company logo area (placeholder)
- Role title
- Time period
- 2-3 key achievements (bullet points)
- Technologies/skills used (tag badges)

**Experience Data:**
```
[Enterprise Background - Condensed]

IBM / Computacenter / BTA / TBC Corporation
Enterprise Network Architect & Solutions Lead
1999-2019

• Designed and implemented Fortune 500 infrastructure at scale
• Managed multi-million dollar technology deployments
• Translated complex enterprise capabilities for diverse stakeholders
• Built the foundation for modern cloud infrastructure adoption

Key Capabilities: Enterprise Architecture, Network Design, Large-Scale 
Implementation, Stakeholder Management, Technology Translation

---

ClearForge Technologies
Founder & CTO
2019-Present

• Built 48+ microservice platform in 18 months
• Achieved 40-60% cost reduction vs direct AI API usage
• Pioneered SMB-accessible enterprise intelligence infrastructure
• Developed "Continuum" methodology: internal use → partner validation → commercial launch

Current Products:
- Foundry Platform: Intelligence-as-a-service for SMBs
- NEXUS: ASO validation using Neural EXpert Unified Search
- Foundry Business: OS with industry-specific templates

Key Innovation: Not building custom—orchestrating best-in-class open source 
solutions (MindsDB, n8n, Supabase, WasmEdge) into accessible platforms.
```

**Technical Features:**
- Timeline with scroll progress indicator
- Cards with 3D hover tilt effect
- Expand/collapse for detailed information
- Smooth transitions between timeline items
- Technology badges with hover tooltips

---

### Section 5: Current Work / ClearForge
**Goal:** Showcase active platform and capability

**Layout:**
- Large feature section with visuals
- Product showcase cards
- Architecture diagram (interactive or animated)

**Copy Framework:**
```
"ClearForge Technologies: Enterprise Infrastructure for Small Business Economics

The platform you're experiencing right now powers intelligence systems for businesses 
across real estate, professional services, automotive, and home services.

We don't build custom AI from scratch. We orchestrate proven open source solutions—
the same tools Reddit, Stripe, and Airbnb use—and make them accessible to businesses 
that could never afford enterprise data teams.

[Product Showcase Cards]

Foundry Platform
48+ microservices managing intelligence, automation, and optimization
• 40-60% cost reduction vs direct AI usage
• Multi-LLM routing (OpenAI, Anthropic, Google, Perplexity)
• Enterprise-grade reliability, SMB-accessible pricing

NEXUS
ASO validation platform using Neural EXpert Unified Search
• Optimize for AI-powered search (ChatGPT, Perplexity, Gemini)
• Intent-first methodology, not keyword manipulation
• Real-time validation and improvement tracking

Foundry Business: OS
Multi-project management with industry-specific templates
• Real Estate, Professional Services, Home Services, Automotive
• Built-in intelligence, automation, and optimization
• $349-699/month vs competitors' $800-3500/month
```

**Technical Features:**
- Horizontal scroll section for product cards
- Interactive architecture diagram (animated connections between services)
- Hover cards with 3D tilt effect
- Statistics counters animating on scroll
- Product demo previews (embedded or linked)
- Technology badge clouds showing stack

---

### Section 6: The AI Systems Translator (Online Persona)
**Goal:** Humanize expertise, show community leadership, remove AI fear

**Layout:**
- Featured illustration (provided animated persona image)
- Two-column: Mission/Philosophy + Content Showcase
- Community engagement metrics
- Recent content preview cards

**Copy Framework:**
```
"The AI Systems Translator: Making Enterprise AI Accessible to Everyone"

[Animated illustration of The AI Systems Translator]

"Online, I'm The AI Systems Translator—your guide through the maze of artificial intelligence, 
breaking down complex enterprise concepts into language real business owners understand.

The Mission:
Remove the gatekeepers. End the jargon. Make AI approachable.

While consultants charge $15,000 for 'AI strategy,' I'm teaching the fundamentals for free. 
While vendors hide capabilities behind paywalls, I'm explaining exactly how it all works. 
While experts gatekeep knowledge, I'm translating it into terms your team can actually use.

What I Do:
• Break down enterprise AI concepts into digestible explanations
• Show real implementations, not theoretical frameworks
• Teach business owners how to leverage AI without technical degrees
• Build in public—sharing wins, failures, and lessons learned
• Create tools and templates SMBs can actually use

The Community:
[Animated counters]
• Content pieces published: [X]
• Business owners helped: [X]
• Free resources shared: [X]
• Community members: [X]

This isn't marketing. It's education. It's data democracy in action.

Because the future of AI isn't about who has the biggest research budget—
it's about who can make it useful for everyone who needs it."
```

**Content Showcase Section:**
Display 3-6 recent content pieces:
- Blog posts about AI implementation
- Tutorial videos on using AI tools
- Free templates and resources
- Case studies from real implementations

Each content card includes:
- Thumbnail/icon
- Title
- Brief description
- Link to full content
- Engagement metrics (views, shares, etc.)

**Technical Features:**
- Illustrated persona image with subtle animation (breathing, eye movement)
- Content cards with hover preview
- Smooth transitions between content items
- Social proof metrics with animated counters
- Tag filtering for content types
- "View All Content" CTA linking to blog/resources

---

### Section 7: How We Can Work Together
**Goal:** Clear next steps, remove friction from engagement

**Layout:**
- Three-column service offering cards
- Contact form or calendar booking
- Testimonial/social proof section

**Service Offerings:**

**1. AI Strategy Consulting**
```
"You don't need a $15K strategy deck. You need someone who's built this at scale 
and can tell you what actually works."

• 90-minute intensive session
• Audit current capabilities and gaps
• Identify highest-ROI AI opportunities
• Create actionable 90-day implementation roadmap
• Follow-up support included

Investment: $2,500
```

**2. Platform Implementation**
```
"Stop paying $3,500/month for basic features. Get enterprise capabilities at 
small business economics."

• Foundry Platform implementation
• Industry-specific template customization
• Team training and onboarding
• Ongoing optimization and support

Starting: $349-699/month
```

**3. Speaking & Workshops**
```
"Bring The AI Systems Translator to your conference, association, or team 
to demystify AI and show what's actually possible."

• Keynotes on AI accessibility
• Hands-on workshops for business teams
• Industry-specific implementations
• Custom content for your audience

Contact for availability and pricing
```

**Contact Section:**
- Email: [email]
- LinkedIn: [profile]
- Twitter/X: [handle]
- Calendar booking link (Calendly or similar)
- Optional simple contact form

**Technical Features:**
- Service cards with hover effects
- Pricing displayed clearly
- Calendar embed or integration
- Form validation and submission
- Success/thank you state
- Smooth scroll to section from nav

---

### Section 8: Footer
**Content:**
- Copyright © 2025 Shawn Sloan
- "Built by AI. Directed by Expertise."
- Social links (LinkedIn, Twitter, GitHub, Medium, etc.)
- Email contact
- Links: Privacy Policy, Terms of Use (if needed)
- ClearForge Technologies link

**Technical Features:**
- Glassmorphic footer design
- Smooth hover states on links
- Minimal, clean layout

---

## ADVANCED TECHNICAL FEATURES

### Animation Specifications

**Page Load Animation:**
```
Hero section:
1. Background elements fade in (0-300ms)
2. Headline slides up + fades in (300-600ms, stagger letters)
3. Subheadline fades in (600-900ms)
4. CTA appears (900-1200ms)
5. Scroll indicator pulses (1200ms+)
```

**Scroll Animations:**
- Trigger point: Element 20% into viewport
- Fade + slide up: 400ms ease-out
- Stagger child elements: 50ms delay between each
- Parallax speed: 0.5x background, 1.0x foreground

**Hover Animations:**
- Duration: 200ms
- Easing: cubic-bezier(0.4, 0, 0.2, 1)
- Transform: scale(1.02) or translateY(-4px)
- Add subtle glow or shadow

**Page Transitions:**
- Exit: fade out + scale down slightly (300ms)
- Enter: fade in + scale up (300ms)
- Overlap transitions for smoothness
- Maintain scroll position context

### Interactive Elements Specifications

**3D Tilt Cards:**
```javascript
// On hover, card tilts based on mouse position
// Max tilt: 10 degrees
// Smooth spring animation
// Inner elements shift with parallax effect
```

**Animated Counters:**
```javascript
// Count from 0 to target over 1000ms
// Easing: ease-out
// Trigger: When scrolled 30% into viewport
// Format: Commas for thousands, + symbol for ranges
```

**Timeline Component:**
```
• Vertical line with progress indicator
• Nodes for each experience
• Click to expand detail
• Smooth height transition (400ms)
• Scroll progress updates indicator position
```

**Horizontal Scroll Section:**
```
• Smooth momentum scrolling
• Snap to cards
• Progress indicator showing position
• Mouse drag + wheel scroll support
• Touch friendly on mobile
```

### Performance Requirements

**Lighthouse Score Targets:**
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

**Core Web Vitals:**
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

**Optimization Strategies:**
- All images: next/image with WebP format
- Critical CSS inlined
- Fonts: Self-hosted, font-display: swap
- Code splitting: Per route + dynamic imports
- Lazy load: Below-fold images and components
- Preconnect: To analytics/external domains
- Compression: Brotli for static assets

### Responsive Design

**Breakpoints:**
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1439px
- Large: 1440px+

**Mobile-Specific Adjustments:**
- Stack all multi-column layouts
- Disable parallax (performance)
- Simplify animations (reduce motion)
- Touch-optimized targets (48px minimum)
- Hamburger navigation menu
- Simplified hero section
- Vertical timeline instead of horizontal

**Tablet Adjustments:**
- 2-column layouts where appropriate
- Maintain some animations
- Optimize touch targets
- Hybrid navigation (may keep horizontal)

---

## CONTENT GUIDELINES

### Tone of Voice
**Authority without arrogance:**
- Confident from experience, not ego
- Direct and clear, never condescending
- Technical when needed, accessible always
- Human and relatable, not corporate

**Examples:**
✓ "I've spent 20 years building this infrastructure at scale"
✗ "I'm the world's leading expert in..."

✓ "Here's what actually works vs what vendors promise"
✗ "Everyone else is doing it wrong"

✓ "This site took 30 minutes because I know how to direct AI"
✗ "Look how amazing I am at AI"

### Writing Style
- Short paragraphs (2-3 sentences)
- Active voice
- Strong verbs
- Concrete examples over abstract concepts
- Numbers and specifics (20 years, 48 microservices, $2,500)
- Occasional rhetorical questions for engagement
- Em dashes for emphasis—like this

### What to Avoid
- Buzzwords without substance (synergy, paradigm, disruptive)
- Marketing speak (game-changing, revolutionary, cutting-edge)
- Excessive technical jargon (unless explaining it)
- Hyperbole (best, greatest, only)
- Corporate language (leverage, utilize, facilitate)

---

## ASSETS NEEDED

### Images
- [x] Professional illustration (The AI Systems Translator persona) - PROVIDED
- [ ] Professional headshot (realistic photo for About section)
- [ ] Company logos (IBM, Computacenter, BTA, TBC if allowed)
- [ ] ClearForge logo (existing - use latest version)
- [ ] Product screenshots/demos (optional)
- [ ] Content thumbnails (blog posts, videos)

### Icons
- Use Lucide React (consistent with Design System)
- Consistent size and stroke width
- Animated on hover where appropriate

### Media
- All images: Optimized WebP format
- Illustrations: SVG when possible
- Videos: MP4, optimized, autoplay muted, lazy load
- Background assets: Subtle, performance-optimized

---

## TECHNICAL IMPLEMENTATION NOTES

### File Structure
```
/app
  /(routes)
    /page.tsx          # Main single-page site
  /components
    /sections          # Hero, About, Experience, etc.
    /ui                # Reusable components
    /animations        # Framer Motion wrappers
  /lib
    /utils.ts          # Helper functions
    /constants.ts      # Content, data
  /styles
    /globals.css       # Design System CSS variables
/public
  /images             # Optimized images
  /fonts              # Self-hosted fonts
```

### Design System Integration
Import and use ClearForge Design System variables:
```css
/* Reference ClearForge_Design_System_Bible_v1_0.md */
:root {
  --bg-primary: #0A0A0B;
  --surface-l1: #141416;
  --blue-primary: #0066CC;
  --purple-primary: #6600CC;
  --pink-primary: #FF0080;
  --text-primary: #FFFFFF;
  --text-secondary: #A3A3A3;
  --glass-panel: rgba(255, 255, 255, 0.04);
  --glass-border: rgba(255, 255, 255, 0.12);
  /* ... etc */
}
```

### Animation Libraries
```json
{
  "framer-motion": "^10.18.0",
  "react-intersection-observer": "^9.5.3",
  "lenis": "^1.0.0" // or locomotive-scroll
}
```

### SEO Requirements
```typescript
// app/page.tsx metadata
export const metadata = {
  title: "Shawn Sloan - AI Systems Translator | Enterprise AI for SMBs",
  description: "20+ years translating Fortune 500 AI capabilities into SMB reality. Founder of ClearForge Technologies. Making enterprise intelligence accessible.",
  keywords: "AI consultant, enterprise architecture, SMB technology, AI systems, ClearForge",
  openGraph: {
    title: "Shawn Sloan - AI Systems Translator",
    description: "Enterprise AI architect helping SMBs leverage Fortune 500 capabilities",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shawn Sloan - AI Systems Translator",
    description: "20+ years enterprise AI architecture",
    images: ["/twitter-image.jpg"],
  }
}
```

---

## ACCESSIBILITY CHECKLIST

### WCAG AA Compliance
- [ ] Color contrast ratios: 4.5:1 minimum for text
- [ ] All interactive elements: keyboard accessible
- [ ] Focus indicators: visible on all focusable elements
- [ ] Alt text: on all images
- [ ] ARIA labels: on icon-only buttons
- [ ] Semantic HTML: proper heading hierarchy
- [ ] Skip links: for navigation
- [ ] Form labels: associated with inputs
- [ ] Error messages: descriptive and helpful
- [ ] Reduced motion: respect prefers-reduced-motion

### Screen Reader Optimization
- Descriptive link text (not "click here")
- Meaningful heading structure (H1 → H2 → H3)
- ARIA landmarks (nav, main, footer)
- Live regions for dynamic content
- Hidden content properly marked (aria-hidden or display:none)

---

## ANALYTICS & TRACKING

### Metrics to Track
- Page views and unique visitors
- Section scroll depth
- Time on page
- Interaction rate (clicks, hovers on key elements)
- Form submissions
- Contact/CTA conversion rate
- Referral sources
- Device/browser breakdown

### Implementation
- Google Analytics 4 (or privacy-focused alternative)
- Event tracking on key interactions
- Conversion goals for contact forms
- Performance monitoring (Lighthouse CI)

---

## LAUNCH CHECKLIST

### Pre-Launch
- [ ] All content reviewed and approved
- [ ] All images optimized and loaded
- [ ] Design System applied consistently
- [ ] All animations tested across browsers
- [ ] Mobile responsive at all breakpoints
- [ ] Accessibility audit passed
- [ ] Performance targets met (Lighthouse 95+)
- [ ] SEO metadata complete
- [ ] Analytics configured
- [ ] Contact forms tested
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] SSL certificate installed
- [ ] Domain configured correctly
- [ ] 404 page designed
- [ ] Favicon and app icons created

### Post-Launch
- [ ] Monitor analytics for errors
- [ ] Test contact forms with real submissions
- [ ] Monitor Core Web Vitals
- [ ] Collect user feedback
- [ ] A/B test CTAs if needed
- [ ] Update content regularly

---

## SUCCESS METRICS

**Primary Goals:**
1. Establish credibility with SMB decision-makers
2. Generate consulting/speaking inquiries
3. Drive ClearForge platform interest
4. Build The AI Systems Translator community

**KPIs:**
- Contact form submissions: Target 10+/month
- Average time on page: Target 3+ minutes
- Scroll depth: 70%+ reach bottom sections
- Social shares: Track engagement with content
- Referral traffic: Build from content marketing
- Return visitors: Build engaged audience

**Qualitative Metrics:**
- Quality of inbound inquiries
- Mentions/backlinks from industry sources
- Speaking/podcast invitations
- Community engagement and feedback

---

## MAINTENANCE PLAN

### Regular Updates
- **Monthly:** Update statistics, recent work, content showcase
- **Quarterly:** Refresh experience section, add new case studies
- **Annually:** Review and update all content for accuracy

### Technical Maintenance
- Keep Next.js and dependencies updated
- Monitor performance metrics
- Review analytics for optimization opportunities
- Fix broken links and issues
- Backup site regularly

---

## FINAL NOTES FOR CLAUDE CODE

### Build Priority
1. Set up Next.js 14 project with TypeScript + Tailwind
2. Implement Design System (colors, fonts, base styles)
3. Build structure (all sections, basic layout)
4. Add content (copy, placeholder images)
5. Implement animations (scroll, transitions, interactions)
6. Optimize performance (images, code splitting, lazy loading)
7. Test responsiveness (mobile, tablet, desktop)
8. Accessibility audit and fixes
9. SEO optimization
10. Final polish and launch prep

### Key Reminders
- **This site IS the proof of concept** - quality demonstrates capability
- **Performance is non-negotiable** - must hit 95+ Lighthouse
- **Animations serve purpose** - every effect should enhance understanding
- **Mobile-first approach** - but desktop is showcase experience
- **Accessibility always** - inclusive design from start
- **Copy is critical** - tone establishes trust and removes fear

### Philosophy to Guide Build
"This isn't a portfolio to show what Shawn has done.
It's a demonstration of what's possible when expertise meets AI.
The site itself should make SMB owners think:
'If AI can build something this sophisticated in 30 minutes...
what could it do for my business in 30 days?'

Every animation, every interaction, every word should remove fear
and inspire possibility."

---

**END OF REQUIREMENTS DOCUMENT**

*Shawn Sloan - The AI Systems Translator*  
*"Forging the Connection Between Human Intelligence and AI"*