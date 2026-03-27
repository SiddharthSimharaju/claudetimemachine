'use client'

import { Link, VibeReading } from '@/types/update'

interface InternetSaidProps {
  links: Link[]
  vibes: VibeReading[]
}

const vibeColors: Record<string, string> = {
  Excited: 'vibe-excited',
  Skeptical: 'vibe-skeptical',
  'Mind-blown': 'vibe-mindblown',
}

const typeIcon: Record<string, string> = {
  announcement: '📣',
  news:         '📰',
  tweet:        '𝕏',
  reddit:       '↗',
  research:     '🔬',
}

const sourceBadgeClass: Record<string, string> = {
  'Anthropic':   'source-anthropic',
  'TechCrunch':  'source-news',
  'The Verge':   'source-news',
  'Ars Technica':'source-news',
  'Hacker News': 'source-hn',
  'Reddit':      'source-hn',
  'X/Twitter':   'source-twitter',
}

export function InternetSaid({ links, vibes }: InternetSaidProps) {
  return (
    <div className="mt-5">
      <p className="section-label mb-3">In the news</p>

      <div className="links-grid mb-4">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-card group"
          >
            <div className="flex items-start justify-between gap-2 mb-1.5">
              <span className={`source-badge ${sourceBadgeClass[link.source] ?? 'source-default'}`}>
                {link.source}
              </span>
              <span className="link-arrow group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150">
                {typeIcon[link.type] ?? '↗'}
              </span>
            </div>
            <p className="link-label">{link.label}</p>
          </a>
        ))}
      </div>

      <div className="flex gap-2 flex-wrap">
        {vibes.map((vibe) => (
          <div
            key={vibe.label}
            className={`vibe-pill flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${vibeColors[vibe.label]}`}
          >
            <span>{vibe.label}</span>
            <span className="opacity-60">{vibe.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}
