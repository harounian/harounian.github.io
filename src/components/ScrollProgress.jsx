import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollProgress() {
  const barRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    let frame = null

    const update = () => {
      frame = null
      const doc = document.documentElement
      const scrollable = doc.scrollHeight - doc.clientHeight
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0
      barRef.current?.style.setProperty('transform', `scaleX(${Math.min(1, Math.max(0, progress))})`)
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [pathname])

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div ref={barRef} className="scroll-progress__bar" />
    </div>
  )
}
