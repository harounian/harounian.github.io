import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { SectionDivider } from '../components/SectionDivider'
import { Lightbox } from '../components/Lightbox'
import { ArrowIcon } from '../components/Icons'
import { getProjectBySlug, projects } from '../data/projects'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import '../styles/project-detail.css'

function collectProjectImages(project) {
  const images = []
  project.hero.forEach((src) => images.push({ src, alt: project.title }))
  project.sections.forEach((section) => {
    if (section.type === 'narrative') {
      section.blocks.forEach((block) => {
        if (block.image) images.push({ src: block.image, alt: section.heading })
      })
    }
    if (section.type === 'gallery') {
      section.images.forEach((src) => images.push({ src, alt: section.heading }))
    }
  })
  return images
}

function zoomProps(onImageClick, src) {
  if (!onImageClick) return {}
  return {
    role: 'button',
    tabIndex: 0,
    onClick: () => onImageClick(src),
    onKeyDown: (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        onImageClick(src)
      }
    },
  }
}

function TextSection({ section }) {
  return (
    <Reveal as="div" className="card pd-card">
      <h2 className="pd-card__title">{section.heading}</h2>
      {section.paragraphs.map((paragraph) => (
        <p className="pd-card__text" key={paragraph.slice(0, 32)}>{paragraph}</p>
      ))}
    </Reveal>
  )
}

function SpecsSection({ section }) {
  return (
    <Reveal as="div" className="card pd-card">
      <h2 className="pd-card__title">{section.heading}</h2>
      <div className="spec-grid">
        {section.items.map((item) => (
          <div className="spec-item" key={item.label}>
            <h3>{item.label}</h3>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    </Reveal>
  )
}

function FeaturesSection({ section }) {
  return (
    <Reveal as="div" className="card pd-card">
      <h2 className="pd-card__title">{section.heading}</h2>
      <ul className="feature-list">
        {section.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Reveal>
  )
}

function NarrativeSection({ section, onImageClick }) {
  return (
    <Reveal as="div" className="card pd-card">
      <h2 className="pd-card__title">{section.heading}</h2>
      <div className="pd-narrative">
        {section.blocks.map((block, index) =>
          block.image ? (
            <img
              key={block.image}
              src={block.image}
              alt={`${section.heading} detail ${index + 1}`}
              className="pd-narrative__image zoomable"
              loading="lazy"
              {...zoomProps(onImageClick, block.image)}
            />
          ) : (
            <p className="pd-card__text" key={block.text.slice(0, 32)}>{block.text}</p>
          ),
        )}
      </div>
    </Reveal>
  )
}

function GallerySection({ section, onImageClick }) {
  return (
    <Reveal as="div" className="card pd-card">
      <h2 className="pd-card__title">{section.heading}</h2>
      <div className="pd-gallery">
        {section.images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`${section.heading} ${index + 1}`}
            loading="lazy"
            className="zoomable"
            {...zoomProps(onImageClick, image)}
          />
        ))}
      </div>
    </Reveal>
  )
}

function ModelSection({ section }) {
  return (
    <Reveal as="div" className="card pd-card">
      <h2 className="pd-card__title">{section.heading}</h2>
      <div className="pd-model">
        <iframe
          src={section.src}
          title={section.heading}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </Reveal>
  )
}

const sectionRenderers = {
  text: TextSection,
  specs: SpecsSection,
  features: FeaturesSection,
  narrative: NarrativeSection,
  gallery: GallerySection,
  model: ModelSection,
}

function ProjectDetailView({ project }) {
  useDocumentTitle(`${project.title} — Joseph Harounian`)

  const [lightboxIndex, setLightboxIndex] = useState(null)
  const allImages = useMemo(() => collectProjectImages(project), [project])

  const openLightbox = (src) => {
    const found = allImages.findIndex((image) => image.src === src)
    if (found !== -1) setLightboxIndex(found)
  }

  const projectIndex = projects.findIndex((item) => item.slug === project.slug)
  const next = projects[(projectIndex + 1) % projects.length]

  const hasStandardTop = project.sections[0]?.type === 'text' && project.sections[1]?.type === 'specs'
  const aboutSection = hasStandardTop ? project.sections[0] : null
  const specsSection = hasStandardTop ? project.sections[1] : null
  const remainingSections = hasStandardTop ? project.sections.slice(2) : project.sections
  const statItems = specsSection ? specsSection.items.slice(0, 3) : []
  const [bannerImage, ...restHero] = project.hero

  return (
    <div className="page pd">
      <div className="page-shell pd-meta-row">
        <Reveal as={Link} to="/projects" className="back-link">
          <ArrowIcon flip /> Back to Projects
        </Reveal>
        <Reveal as="span" delay={60} className="pd-meta-year mono">{project.year}</Reveal>
      </div>

      {bannerImage && (
        <div className="page-shell">
          <Reveal delay={100} className="pd-banner">
            <img
              src={bannerImage}
              alt={project.title}
              className="pd-banner__image zoomable"
              fetchpriority="high"
              {...zoomProps(openLightbox, bannerImage)}
            />
            <div className="pd-banner__scrim" aria-hidden="true" />
            <div className="pd-banner__content">
              <h1>{project.title}</h1>
              <p>{project.subtitle}</p>
              <div className="pd-banner__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      )}

      {statItems.length > 0 && (
        <div className="page-shell">
          <Reveal delay={180} className="pd-stats">
            {statItems.map((item) => (
              <div className="pd-stat" key={item.label}>
                <span className="pd-stat__value">{item.value}</span>
                <span className="pd-stat__label mono">{item.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      )}

      {restHero.length > 0 && (
        <div className="page-shell pd-hero-images">
          {restHero.map((image, i) => (
            <Reveal
              as="img"
              key={image}
              src={image}
              alt={project.title}
              delay={i * 70}
              className="zoomable"
              loading="lazy"
              {...zoomProps(openLightbox, image)}
            />
          ))}
        </div>
      )}

      {(aboutSection || specsSection) && (
        <div className="page-shell pd-top-grid">
          {aboutSection && <TextSection section={aboutSection} />}
          {specsSection && <SpecsSection section={specsSection} />}
        </div>
      )}

      {remainingSections.length > 0 && (
        <>
          <div className="page-shell"><SectionDivider /></div>
          <div className="page-shell pd-sections">
            {remainingSections.map((section) => {
              const Renderer = sectionRenderers[section.type]
              return Renderer ? (
                <Renderer section={section} key={section.heading} onImageClick={openLightbox} />
              ) : null
            })}
          </div>
        </>
      )}

      <div className="page-shell pd-next">
        <span className="mono">Next project</span>
        <Link to={`/projects/${next.slug}`} className="pd-next__link">
          {next.title}
          <ArrowIcon diagonal />
        </Link>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={allImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
        />
      )}
    </div>
  )
}

export function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) return <Navigate to="/projects" replace />

  return <ProjectDetailView key={slug} project={project} />
}
