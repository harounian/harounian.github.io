import { Link } from 'react-router-dom'
import { ArrowIcon } from '../components/Icons'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import '../styles/notfound.css'

export function NotFound() {
  useDocumentTitle('Page Not Found — Joseph Harounian')

  return (
    <div className="page notfound">
      <div className="grid-field" />
      <div className="page-shell notfound__inner">
        <span className="mono notfound__code">404</span>
        <h1>Page not found</h1>
        <p>The page you&rsquo;re looking for doesn&rsquo;t exist, or it moved.</p>
        <Link to="/" className="btn btn--primary">
          <ArrowIcon flip /> Back to Home
        </Link>
      </div>
    </div>
  )
}
