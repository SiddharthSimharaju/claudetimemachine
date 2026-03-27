export type UpdateCategory = 'Model' | 'Feature' | 'Agent' | 'Platform'

export type LinkType = 'announcement' | 'news' | 'tweet' | 'reddit' | 'research'

export interface Link {
  label: string
  url: string
  type: LinkType
  source: string   // e.g. "Anthropic", "TechCrunch", "X/Twitter"
}

export interface VibeReading {
  label: 'Excited' | 'Skeptical' | 'Mind-blown'
  pct: number
}

export interface KilledCompany {
  name: string
  flag: string        // emoji flag
  what: string        // one-line description of what they do
  raised?: string     // funding raised, e.g. "$24M"
  website?: string    // homepage URL
}

export interface Update {
  id: string
  date: string
  isoDate: string
  title: string
  category: UpdateCategory
  summary: string
  killed: string[]
  links: Link[]
  vibes: VibeReading[]
  killedCompanies: KilledCompany[]
}
