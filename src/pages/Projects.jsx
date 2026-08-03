import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { SectionDivider } from '../components/SectionDivider'
import { ArrowIcon } from '../components/Icons'
import { projects, allTags } from '../data/projects'
import { cardPointerMove, cardPointerLeave } from '../utils/interactions'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import '../styles/projects.css'

function ProjectCard({ project, index }) {
  return (
    <Reveal
      as="article"
      delay={Math.min(index % 8, 8) * 55}
      className="proj-card card card--interactive corner-ticks"
      onPointerMove={cardPointerMove}
      onPointerLeave={cardPointerLeave}
    >
      <Link to={`/projects/${project.slug}`} className="proj-card__link" aria-label={project.title}>
        <div className="proj-card__image">
          <img src={project.thumbnail} alt="" loading="lazy" />
          <span className="proj-card__year mono">{project.year}</span>
        </div>
        <div className="proj-card__body">
          <span className="proj-card__index mono">{String(index + 1).padStart(2, '0')}</span>
          <h3>{project.title}</h3>
          <p>{project.blurb}</p>
          <div className="proj-card__tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
        <span className="proj-card__arrow" aria-hidden="true"><ArrowIcon diagonal /></span>
      </Link>
    </Reveal>
  )
}

export function Projects() {
  useDocumentTitle('Projects — Joseph Harounian')
  const [activeTag, setActiveTag] = useState(null)

  const visible = useMemo(
    () => (activeTag ? projects.filter((project) => project.tags.includes(activeTag)) : projects),
    [activeTag],
  )

  const toggleTag = (tag) => setActiveTag((current) => (current === tag ? null : tag))

  return (
    <div className="page">
      <Reveal as="div" className="page-header page-shell">
        <p className="page-header__eyebrow">Archive</p>
        <h1>Projects</h1>
        <p>A collection of engineering projects spanning hardware design, RF, PCB layout, and embedded systems.</p>
      </Reveal>

      <div className="page-shell"><SectionDivider /></div>

      <Reveal
        as="div"
        delay={80}
        className="page-shell filter-bar"
        role="group"
        aria-label="Filter projects by technology"
      >
        <button
          type="button"
          className={`filter-chip ${!activeTag ? 'is-active' : ''}`}
          onClick={() => setActiveTag(null)}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            type="button"
            className={`filter-chip ${activeTag === tag ? 'is-active' : ''}`}
            onClick={() => toggleTag(tag)}
          >
            {tag}
          </button>
        ))}
      </Reveal>

      <section className="page-shell proj-grid-section">
        {visible.length > 0 ? (
          <div className="proj-grid">
            {visible.map((project, index) => (
              <ProjectCard project={project} index={index} key={project.slug} />
            ))}
          </div>
        ) : (
          <p className="proj-empty">No projects match that filter.</p>
        )}
      </section>
    </div>
  )
}
