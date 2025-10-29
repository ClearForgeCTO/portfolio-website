'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PRODUCTS } from '@/app/lib/constants'

interface ProjectNavigationProps {
  currentProject: string
}

export default function ProjectNavigation({ currentProject }: ProjectNavigationProps) {
  const pathname = usePathname()

  const projectLinks = {
    'sophia': { path: '/projects/sophia', name: 'SOPHIA' },
    'aso-nexus': { path: '/projects/aso', name: 'ASO' },
    'real-estate': { path: '/projects/real-estate', name: 'Real Estate' },
  }

  const allProjects = Object.keys(projectLinks)
  const currentIndex = allProjects.findIndex(key => pathname.includes(key))

  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null

  return (
    <div className="max-w-4xl mx-auto mt-16 pt-8 border-t border-glass-border">
      <div className="flex items-center justify-between">
        {/* Previous Project */}
        <div className="flex-1">
          {prevProject && (
            <Link
              href={projectLinks[prevProject as keyof typeof projectLinks].path}
              className="group inline-flex items-center space-x-2 text-text-secondary hover:text-blue-primary transition-colors"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <div>
                <div className="text-xs text-text-tertiary">Previous</div>
                <div className="font-medium">
                  {projectLinks[prevProject as keyof typeof projectLinks].name}
                </div>
              </div>
            </Link>
          )}
        </div>

        {/* Project Dots */}
        <div className="flex items-center space-x-3">
          {allProjects.map((projectKey, index) => {
            const isActive = pathname.includes(projectKey)
            return (
              <Link
                key={projectKey}
                href={projectLinks[projectKey as keyof typeof projectLinks].path}
                className={`w-2 h-2 rounded-full transition-all ${
                  isActive
                    ? 'bg-blue-primary w-8'
                    : 'bg-surface-l2 hover:bg-blue-primary/50'
                }`}
                aria-label={`Go to ${projectLinks[projectKey as keyof typeof projectLinks].name}`}
              />
            )
          })}
        </div>

        {/* Next Project */}
        <div className="flex-1 flex justify-end">
          {nextProject && (
            <Link
              href={projectLinks[nextProject as keyof typeof projectLinks].path}
              className="group inline-flex items-center space-x-2 text-text-secondary hover:text-blue-primary transition-colors"
            >
              <div className="text-right">
                <div className="text-xs text-text-tertiary">Next</div>
                <div className="font-medium">
                  {projectLinks[nextProject as keyof typeof projectLinks].name}
                </div>
              </div>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
