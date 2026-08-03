// Shared pointer-reactive glow + gentle tilt for interactive cards.
// Pure CSS-var driven so it costs nothing when idle; rAF-throttled while moving.

let frame = null

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function cardPointerMove(event) {
  if (reducedMotion()) return
  const target = event.currentTarget
  const { clientX, clientY } = event

  if (frame) cancelAnimationFrame(frame)
  frame = requestAnimationFrame(() => {
    const bounds = target.getBoundingClientRect()
    const px = (clientX - bounds.left) / bounds.width
    const py = (clientY - bounds.top) / bounds.height
    target.style.setProperty('--mx', `${px * 100}%`)
    target.style.setProperty('--my', `${py * 100}%`)
    target.style.setProperty('--rx', `${(px - 0.5) * 6}deg`)
    target.style.setProperty('--ry', `${(0.5 - py) * 6}deg`)
  })
}

export function cardPointerLeave(event) {
  const target = event.currentTarget
  target.style.setProperty('--rx', '0deg')
  target.style.setProperty('--ry', '0deg')
}
