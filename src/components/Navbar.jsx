import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { nav, social } from '../data/site'
import { GitHubIcon } from './Icons'
import '../styles/navbar.css'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredHref, setHoveredHref] = useState('')
  const [indicator, setIndicator] = useState({ x: 0, width: 0, visible: false })
  const navRef = useRef(null)
  const linkRefs = useRef(new Map())
  const location = useLocation()

  const activeHref = nav.find((item) => location.pathname.startsWith(item.href))?.href || ''
  const highlightedHref = hoveredHref || activeHref
  const github = social.find((item) => item.icon === 'github')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useLayoutEffect(() => {
    const updateIndicator = () => {
      const container = navRef.current
      const link = linkRefs.current.get(highlightedHref)
      if (!container || !link) {
        setIndicator((current) => ({ ...current, visible: false }))
        return
      }
      const containerBounds = container.getBoundingClientRect()
      const linkBounds = link.getBoundingClientRect()
      setIndicator({
        x: linkBounds.left - containerBounds.left,
        width: linkBounds.width,
        visible: true,
      })
    }

    updateIndicator()
    window.addEventListener('resize', updateIndicator)
    return () => window.removeEventListener('resize', updateIndicator)
  }, [highlightedHref, scrolled])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${menuOpen ? 'nav--open' : ''}`}>
      <div className="nav__pill">
        <Link to="/" className="nav__brand" aria-label="Joseph Harounian, home">
          <img src="/assets/images/brand/jh-home.png" alt="" width="28" height="28" />
          <span>Joseph Harounian</span>
        </Link>

        <nav
          className="nav__links"
          aria-label="Primary"
          ref={navRef}
          onPointerLeave={() => setHoveredHref('')}
        >
          <span
            className={`nav__indicator ${indicator.visible ? 'nav__indicator--visible' : ''}`}
            style={{ '--indicator-x': `${indicator.x}px`, '--indicator-width': `${indicator.width}px` }}
            aria-hidden="true"
          />
          {nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              ref={(element) => {
                if (element) linkRefs.current.set(item.href, element)
                else linkRefs.current.delete(item.href)
              }}
              onPointerEnter={() => setHoveredHref(item.href)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav__actions">
          {github && (
            <a className="nav__social" href={github.href} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GitHubIcon />
            </a>
          )}

          <button
            className="nav__toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className="nav__sheet" aria-hidden={!menuOpen}>
        {nav.map((item) => (
          <NavLink key={item.href} to={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </NavLink>
        ))}
        {github && (
          <a href={github.href} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
            GitHub
          </a>
        )}
      </div>
    </header>
  )
}
