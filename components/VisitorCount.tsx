'use client'

import { useEffect, useState } from 'react'

export function VisitorCount() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    fetch('https://api.counterapi.dev/v1/claude-timemachine/visitors/up')
      .then((r) => r.json())
      .then((data) => setCount(data.count))
      .catch(() => {/* silently ignore */})
  }, [])

  if (count === null) return null

  return (
    <div className="visitor-counter">
      <span className="visitor-dot" />
      <span className="visitor-number">{count.toLocaleString()}</span>
      <span className="visitor-label">visitors</span>
    </div>
  )
}
