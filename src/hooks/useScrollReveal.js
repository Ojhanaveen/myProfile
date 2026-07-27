import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../utils/gsapConfig'

export function useScrollReveal(selector = '.reveal-up', options = {}) {
  const containerRef = useRef(null)
  const { y = 40, duration = 0.9, stagger = 0.12, start = 'top 85%' } = options

  useEffect(() => {
    if (!containerRef.current) return

    const els = containerRef.current.querySelectorAll(selector)
    if (els.length === 0) return

    const tween = gsap.fromTo(
      els,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        ease: 'power3.out',
        overwrite: true,
        scrollTrigger: {
          trigger: containerRef.current,
          start,
          once: true,
        },
      }
    )

    ScrollTrigger.refresh()

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selector, y, duration, stagger, start])

  return containerRef
}
