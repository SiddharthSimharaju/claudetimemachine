'use client'

interface FunFactProps {
  text: string
}

export function FunFact({ text }: FunFactProps) {
  return (
    <div className="fun-fact mt-5 pl-4 py-3 pr-4 rounded-r-lg">
      <p className="text-xs uppercase tracking-widest font-semibold fun-fact-label mb-1">
        Fun fact
      </p>
      <p className="text-sm fun-fact-text leading-relaxed">{text}</p>
    </div>
  )
}
