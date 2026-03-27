'use client'

import { motion, MotionValue } from 'framer-motion'
import { Update } from '@/types/update'
import { KilledPanel } from './KilledPanel'
import { InternetSaid } from './InternetSaid'
import { KilledCompanies } from './KilledCompanies'

interface UpdateCardProps {
  update: Update
  scale: MotionValue<number>
}

const categoryClass: Record<string, string> = {
  Model: 'badge-model',
  Feature: 'badge-feature',
  Agent: 'badge-agent',
  Platform: 'badge-platform',
}

export function UpdateCard({ update, scale }: UpdateCardProps) {
  return (
    <motion.div
      style={{ scale }}
      className="w-full max-w-2xl mx-auto px-4"
    >
      <div className="update-card rounded-2xl p-7 relative overflow-hidden">
        <div className="flex items-start justify-between gap-4 mb-1">
          <p className="card-date">{update.date}</p>
          <span className={`badge whitespace-nowrap ${categoryClass[update.category]}`}>
            {update.category}
          </span>
        </div>
        <h2 className="card-title text-2xl font-semibold mb-4">{update.title}</h2>

        <p className="card-summary text-sm">{update.summary}</p>

        <hr className="card-divider" />

        <KilledPanel items={update.killed} />
        <InternetSaid links={update.links} vibes={update.vibes} />
        <KilledCompanies companies={update.killedCompanies} />
      </div>
    </motion.div>
  )
}
