'use client'

import { useScroll, useTransform, MotionValue } from 'framer-motion'

export function useStopProgress(
  stopIndex: number,
  totalStops: number
): { scale: MotionValue<number>; opacity: MotionValue<number> } {
  const { scrollYProgress } = useScroll()

  const stopSize = 1 / totalStops
  const stopStart = stopIndex * stopSize
  const stopEnd = stopStart + stopSize

  const scale = useTransform(
    scrollYProgress,
    [stopStart, stopStart + stopSize * 0.08, stopEnd - stopSize * 0.08, stopEnd],
    [0.88, 1, 1, 0.88]
  )

  const opacity = useTransform(
    scrollYProgress,
    [stopStart, stopStart + stopSize * 0.06, stopEnd - stopSize * 0.06, stopEnd],
    [0, 1, 1, 0]
  )

  return { scale, opacity }
}

export function useActiveIndex(totalStops: number): MotionValue<number> {
  const { scrollYProgress } = useScroll()
  return useTransform(scrollYProgress, [0, 1], [0, totalStops - 1])
}
