'use client'

import { useScroll, useTransform, useMotionValueEvent, motion, MotionValue } from 'framer-motion'
import { useRef, useState } from 'react'
import { Update } from '@/types/update'
import { UpdateCard } from './UpdateCard'
import { TimelineRail } from './TimelineRail'
import { VisitorCount } from './VisitorCount'

interface TimeMachineShellProps {
  updates: Update[]
}

function StopSection({
  update,
  index,
  total,
  scrollYProgress,
}: {
  update: Update
  index: number
  total: number
  scrollYProgress: MotionValue<number>
}) {
  const stopSize = 1 / total
  const stopStart = index * stopSize
  const stopEnd = stopStart + stopSize

  const scale = useTransform(
    scrollYProgress,
    [stopStart, stopStart + stopSize * 0.15, stopEnd - stopSize * 0.15, stopEnd],
    [0.9, 1, 1, 0.9]
  )

  return (
    <section
      id={`stop-${index}`}
      className="stop-section h-screen flex items-center justify-center"
    >
      <UpdateCard update={update} scale={scale} />
    </section>
  )
}

export function TimeMachineShell({ updates }: TimeMachineShellProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({ container: containerRef })

  const progressScaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const idx = Math.round(latest * (updates.length - 1))
    setActiveIndex(Math.max(0, Math.min(updates.length - 1, idx)))
  })

  return (
    <div ref={containerRef} className="scroll-container page-bg relative">
      {/* Progress bar */}
      <motion.div
        className="progress-bar"
        style={{ scaleX: progressScaleX, width: '100%' }}
      />

      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-5 py-2.5 site-header">
        <div className="flex items-center gap-2">
          {/* Agentation-style square logo mark */}
          <div className="header-logo flex items-center justify-center rounded-md" style={{ width: 26, height: 26, background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}>
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="3" fill="#3b82f6"/>
              <path d="M8 1v3M8 12v3M1 8h3M12 8h3" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="text-sm font-semibold header-title">Claude Time Machine</span>
        </div>
        <div className="flex items-center gap-3">
          <VisitorCount />
          <a
            href="https://x.com/sidsimharaju"
            target="_blank"
            rel="noopener noreferrer"
            className="twitter-link"
            aria-label="Follow on X"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.743l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Stops */}
      {updates.map((update, i) => (
        <StopSection
          key={update.id}
          update={update}
          index={i}
          total={updates.length}
          scrollYProgress={scrollYProgress}
        />
      ))}

      {/* Timeline rail */}
      <TimelineRail updates={updates} activeIndex={activeIndex} />
    </div>
  )
}
