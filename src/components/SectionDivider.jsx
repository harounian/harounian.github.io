import { useReveal } from '../hooks/useReveal'

// A routed-trace divider between sections -- a nod to PCB copper instead of
// a plain <hr>. Two "vias" sit at fixed points along the line, and a soft
// pulse travels the length of it once the divider scrolls into view.
export function SectionDivider() {
  const revealRef = useReveal({ threshold: 0.4 })

  return (
    <div ref={revealRef} className="circuit-divider reveal" aria-hidden="true">
      <span className="circuit-divider__line" />
      <span className="circuit-divider__via" style={{ '--via-x': '22%' }} />
      <span className="circuit-divider__via" style={{ '--via-x': '78%' }} />
      <span className="circuit-divider__pulse" />
    </div>
  )
}
