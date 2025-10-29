import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shawn Sloan - AI Systems Translator | Enterprise AI for SMBs',
  description: "20+ years translating Fortune 500 AI capabilities into SMB reality. Founder of ClearForge AI. Making enterprise intelligence accessible.",
  keywords: 'AI consultant, enterprise architecture, SMB technology, AI systems, ClearForge, technology translator',
  authors: [{ name: 'Shawn Sloan' }],
  openGraph: {
    title: 'Shawn Sloan - AI Systems Translator',
    description: 'Enterprise AI architect helping SMBs leverage Fortune 500 capabilities',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shawn Sloan - AI Systems Translator',
    description: '20+ years enterprise AI architecture',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="smooth-scroll">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
