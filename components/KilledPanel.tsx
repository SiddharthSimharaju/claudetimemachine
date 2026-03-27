'use client'

interface KilledPanelProps {
  items: string[]
}

export function KilledPanel({ items }: KilledPanelProps) {
  return (
    <div className="killed-panel rounded-xl p-4 mt-5">
      <p className="killed-label text-xs uppercase tracking-widest font-semibold mb-3">
        What it made obsolete
      </p>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2 text-sm killed-item">
            <span className="killed-arrow mt-0.5 flex-shrink-0">↓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
