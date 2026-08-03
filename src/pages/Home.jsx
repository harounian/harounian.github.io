import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { SectionDivider } from '../components/SectionDivider'
import { socialIcons, ArrowIcon } from '../components/Icons'
import { about, experience, social } from '../data/site'
import { projects } from '../data/projects'
import { cardPointerMove, cardPointerLeave } from '../utils/interactions'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import '../styles/home.css'

function Hero() {
  const portraitRef = useRef(null)

  const handlePointerMove = (event) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5
    portraitRef.current?.style.setProperty('--tilt-x', `${x * 8}deg`)
    portraitRef.current?.style.setProperty('--tilt-y', `${y * -8}deg`)
  }

  const resetPortrait = () => {
    portraitRef.current?.style.setProperty('--tilt-x', '0deg')
    portraitRef.current?.style.setProperty('--tilt-y', '0deg')
  }

  return (
    <section className="hero" id="top">
      <div className="hero__aurora" aria-hidden="true">
        <span className="hero__aurora-blob hero__aurora-blob--a" />
        <span className="hero__aurora-blob hero__aurora-blob--b" />
      </div>
      <div className="grid-field" />
      <div className="hero__inner page-shell">
        <div className="hero__copy">
          <p className="eyebrow hero__in hero__in--1">
            <span className="eyebrow__dash" />
            Electrical Engineering &middot; Wentworth Institute of Technology
          </p>
          <h1 className="hero__title hero__in hero__in--2">
            Joseph<br />Harounian.
          </h1>
          <p className="hero__statement hero__in hero__in--3">{about.subtitle}</p>
          <div className="hero__actions hero__in hero__in--4">
            <Link to="/projects" className="btn btn--primary">
              View Projects <ArrowIcon diagonal />
            </Link>
            <a href="#about" className="btn">
              About Me
            </a>
          </div>
        </div>

        <div
          className="hero__portrait hero__in hero__in--5"
          ref={portraitRef}
          onPointerMove={handlePointerMove}
          onPointerLeave={resetPortrait}
        >
          <div className="hero__portrait-frame">
            <img src={about.headshot} alt="Joseph Harounian" fetchpriority="high" />
          </div>
          <span className="hero__portrait-tick hero__portrait-tick--tl" aria-hidden="true" />
          <span className="hero__portrait-tick hero__portrait-tick--br" aria-hidden="true" />
        </div>
      </div>

      <a className="hero__scroll" href="#about" aria-label="Scroll to about">
        <span>Scroll</span>
        <span className="hero__scroll-track"><span /></span>
      </a>
    </section>
  )
}

function SectionHeading({ index, eyebrow, title, description }) {
  return (
    <Reveal className="section-heading">
      <div className="section-heading__label">
        <span>{index}</span>
        {eyebrow}
      </div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </Reveal>
  )
}

function About() {
  return (
    <section className="section section--about" id="about">
      <div className="page-shell">
        <SectionHeading index="01" eyebrow="Profile" title="About" />
        <div className="about-grid">
          {about.paragraphs.map((paragraph, index) => (
            <Reveal as="p" key={paragraph.slice(0, 24)} delay={index * 90} className="about-grid__p">
              {paragraph}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ item, index }) {
  return (
    <Reveal
      as="article"
      className={`exp-card card card--interactive corner-ticks ${index % 2 ? 'reveal--right' : 'reveal--left'}`}
      delay={index * 70}
      onPointerMove={cardPointerMove}
      onPointerLeave={cardPointerLeave}
    >
      <div className="exp-card__top">
        <div className="exp-card__logo">
          <img src={item.logo} alt="" />
        </div>
        <div className="exp-card__heading">
          <h3>{item.company}</h3>
          <p>{item.position}</p>
        </div>
        <span className="exp-card__date mono">{item.date}</span>
      </div>

      <div className="exp-card__meta">
        <div>
          <span className="mono">Location</span>
          <p>{item.location}</p>
        </div>
        <div>
          <span className="mono">Focus</span>
          <p>{item.focus}</p>
        </div>
      </div>

      <p className="exp-card__desc">{item.description}</p>

      <div className="exp-card__skills">
        {item.skills.map((skill) => (
          <span key={skill} className="tag">{skill}</span>
        ))}
      </div>
    </Reveal>
  )
}

function Experience() {
  return (
    <section className="section section--experience" id="experience">
      <div className="grid-field" />
      <div className="page-shell">
        <SectionHeading index="02" eyebrow="Work" title="Experience" />
        <div className="exp-list">
          {experience.map((item, index) => (
            <ExperienceCard key={item.company} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedProjects() {
  const featured = projects.slice(0, 3)

  return (
    <section className="section section--featured" id="work">
      <div className="page-shell">
        <SectionHeading
          index="03"
          eyebrow="Selected work"
          title="Recent builds"
          description="A few of the most recent projects. The full archive spans RF, silicon, PCB design, and embedded systems."
        />
        <div className="featured-grid">
          {featured.map((project, index) => (
            <Reveal
              as={Link}
              to={`/projects/${project.slug}`}
              key={project.slug}
              delay={index * 80}
              className={`featured-card card card--interactive corner-ticks ${index === 0 ? 'featured-card--large' : ''}`}
              onPointerMove={cardPointerMove}
              onPointerLeave={cardPointerLeave}
            >
              <span className="featured-card__index mono">0{index + 1}</span>
              <div className="featured-card__image">
                <img src={project.thumbnail} alt="" loading="lazy" />
                <span className="featured-card__year mono">{project.year}</span>
              </div>
              <div className="featured-card__body">
                <h3>{project.title}</h3>
                <p>{project.blurb}</p>
                <span className="featured-card__link">
                  View project <ArrowIcon diagonal />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200} className="featured-cta">
          <Link to="/projects" className="btn">
            View all projects <ArrowIcon diagonal />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

function Social() {
  return (
    <section className="section section--social" id="connect">
      <div className="page-shell">
        <SectionHeading index="04" eyebrow="Elsewhere" title="Connect" />
        <div className="social-grid">
          {social.map((item, index) => {
            const Icon = socialIcons[item.icon]
            return (
              <Reveal
                as="a"
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                delay={index * 70}
                className="social-card card card--interactive corner-ticks"
                onPointerMove={cardPointerMove}
                onPointerLeave={cardPointerLeave}
              >
                <Icon />
                <span>{item.name}</span>
                <ArrowIcon diagonal />
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function Home() {
  useDocumentTitle('Joseph Harounian — Electrical Engineer')

  return (
    <div className="page">
      <Hero />
      <div className="page-shell"><SectionDivider /></div>
      <About />
      <div className="page-shell"><SectionDivider /></div>
      <Experience />
      <div className="page-shell"><SectionDivider /></div>
      <FeaturedProjects />
      <div className="page-shell"><SectionDivider /></div>
      <Social />
    </div>
  )
}
