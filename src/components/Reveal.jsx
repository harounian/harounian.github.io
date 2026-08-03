import { useReveal } from '../hooks/useReveal'

export function Reveal({ as: Element = 'div', children, className = '', delay = 0, ...props }) {
  const revealRef = useReveal()

  return (
    <Element
      ref={revealRef}
      className={`reveal ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...props}
    >
      {children}
    </Element>
  )
}
