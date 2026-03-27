'use client'

import { Update } from '@/types/update'

interface TimelineRailProps {
  updates: Update[]
  activeIndex: number
}

export function TimelineRail({ updates, activeIndex }: TimelineRailProps) {
  const scrollToStop = (index: number) => {
    const el = document.getElementById(`stop-${index}`)
    if (el) {
      const container = el.closest('.scroll-container')
      if (container) {
        container.scrollTo({ top: index * window.innerHeight, behavior: 'smooth' })
      } else {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  // Group updates by year for labels
  const years = updates.map(u => u.isoDate.slice(0, 4))

  return (
    <nav className="timeline-rail fixed right-3 top-0 h-screen w-10 flex flex-col items-center justify-center gap-0.5 z-50 py-16">
      <div className="timeline-scroll-hint">
        <span className="timeline-scroll-text">scroll</span>
        <span className="timeline-scroll-arrow">↓</span>
      </div>
      {updates.map((update, i) => {
        const isActive = i === activeIndex
        const showYearLabel = i === 0 || years[i] !== years[i - 1]

        return (
          <div key={update.id} className="flex flex-col items-center">
            {showYearLabel && (
              <span className="timeline-year block text-center mb-1.5 mt-2">
                {years[i]}
              </span>
            )}
            <button
              onClick={() => scrollToStop(i)}
              title={update.title}
              className={`timeline-dot rounded-full ${
                isActive
                  ? 'timeline-dot-active w-2 h-2'
                  : 'timeline-dot-inactive w-1.5 h-1.5'
              }`}
            />
          </div>
        )
      })}
    </nav>
  )
}
