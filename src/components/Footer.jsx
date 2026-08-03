import { Link } from 'react-router-dom'
import { social } from '../data/site'
import { socialIcons, ArrowIcon } from './Icons'
import '../styles/footer.css'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell site-footer__inner">
        <div className="site-footer__brand">
          <p className="eyebrow">Electrical Engineering</p>
          <h2>Joseph Harounian</h2>
          <Link to="/" className="btn btn--sm">
            Back to top
            <ArrowIcon diagonal />
          </Link>
        </div>

        <div className="site-footer__social" aria-label="Social links">
          {social.map((item) => {
            const Icon = socialIcons[item.icon]
            return (
              <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.name}>
                <Icon />
              </a>
            )
          })}
        </div>

        <div className="site-footer__bottom">
          <p>Joseph Harounian <span>&copy; {new Date().getFullYear()}</span></p>
        </div>
      </div>
    </footer>
  )
}
