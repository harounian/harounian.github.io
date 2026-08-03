import { Reveal } from '../components/Reveal'
import { SectionDivider } from '../components/SectionDivider'
import { ClockIcon, ExternalIcon, DownloadIcon } from '../components/Icons'
import { publications } from '../data/publications'
import { cardPointerMove, cardPointerLeave } from '../utils/interactions'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import '../styles/publications.css'

function PublicationCard({ pub, index }) {
  return (
    <Reveal
      as="article"
      delay={index * 90}
      className="pub-card card card--interactive corner-ticks"
      onPointerMove={cardPointerMove}
      onPointerLeave={cardPointerLeave}
    >
      <div className="pub-card__top">
        <span className={`pub-card__kind pub-card__kind--${pub.kind.toLowerCase()}`}>{pub.kind}</span>
        <span className="mono pub-card__year">{pub.year}</span>
      </div>

      <h2 className="pub-card__title">{pub.title}</h2>

      <div className="pub-card__meta">
        <div>
          <span>{pub.kind === 'Journal' ? 'Journal' : 'Conference'}</span>
          <p>{pub.venue}</p>
        </div>
        {pub.doi && (
          <div>
            <span>DOI</span>
            <p>{pub.doi}</p>
          </div>
        )}
        {pub.status && (
          <div>
            <span>Status</span>
            <p>{pub.status}</p>
          </div>
        )}
        <div>
          <span>Authors</span>
          <p>{pub.authors}</p>
        </div>
      </div>

      <div className="pub-card__abstract">
        <span>Abstract</span>
        <p>{pub.abstract}</p>
      </div>

      <div className="pub-card__actions">
        {pub.action ? (
          <a className="btn btn--primary btn--sm" href={pub.action.href} target="_blank" rel="noopener noreferrer">
            {pub.action.label} <ExternalIcon />
          </a>
        ) : (
          <button className="btn btn--sm btn--disabled" type="button" disabled>
            Coming Soon <ClockIcon />
          </button>
        )}
        {pub.secondaryAction && (
          <a className="btn btn--sm" href={pub.secondaryAction.href} target="_blank" rel="noopener noreferrer">
            {pub.secondaryAction.label} <DownloadIcon />
          </a>
        )}
      </div>
    </Reveal>
  )
}

export function Publications() {
  useDocumentTitle('Publications — Joseph Harounian')

  return (
    <div className="page">
      <Reveal as="div" className="page-header page-shell">
        <p className="page-header__eyebrow">Research</p>
        <h1>Publications</h1>
        <p>Research contributions in satellite communications and aerospace engineering.</p>
      </Reveal>

      <div className="page-shell"><SectionDivider /></div>

      <section className="page-shell pub-list">
        {publications.map((pub, index) => (
          <PublicationCard pub={pub} index={index} key={pub.title} />
        ))}
      </section>
    </div>
  )
}
