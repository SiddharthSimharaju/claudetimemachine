'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { KilledCompany } from '@/types/update'

interface KilledCompaniesProps {
  companies: KilledCompany[]
}

export function KilledCompanies({ companies }: KilledCompaniesProps) {
  const [open, setOpen] = useState(false)
  const preview = companies.slice(0, 4)
  const remaining = companies.length - 4

  return (
    <>
      <div className="killed-companies mt-5">
        <p className="section-label mb-3">Companies it made irrelevant</p>
        <div className="companies-grid">
          {preview.map((co) => (
            <div key={co.name} className="company-card">
              <div className="flex items-center justify-between gap-2 mb-0.5">
                <span className="company-name">{co.flag} {co.name}</span>
                {co.raised && (
                  <span className="company-raised">{co.raised}</span>
                )}
              </div>
              <p className="company-what">{co.what}</p>
            </div>
          ))}
        </div>
        {remaining > 0 && (
          <button onClick={() => setOpen(true)} className="see-more-btn mt-3">
            See more (+{remaining})
          </button>
        )}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="drawer-panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 32 }}
          >
            <div className="drawer-header">
              <p className="section-label">All companies made irrelevant</p>
              <button className="drawer-close" onClick={() => setOpen(false)}>✕</button>
            </div>
            <div className="drawer-body">
              {companies.map((co) => (
                <div key={co.name} className="drawer-company-row">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
                        <span className="company-name">{co.flag} {co.name}</span>
                        {co.raised && (
                          <span className="company-raised">{co.raised}</span>
                        )}
                      </div>
                      <p className="company-what">{co.what}</p>
                    </div>
                    {co.website && (
                      <a
                        href={co.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="drawer-website-link"
                      >
                        ↗
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
