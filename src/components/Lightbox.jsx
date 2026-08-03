import { useCallback, useEffect } from 'react'
import { ArrowIcon } from './Icons'

export function Lightbox({ images, index, onClose, onIndexChange }) {
  const total = images.length
  const goPrev = useCallback(() => onIndexChange((index - 1 + total) % total), [index, total, onIndexChange])
  const goNext = useCallback(() => onIndexChange((index + 1) % total), [index, total, onIndexChange])

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') goPrev()
      if (event.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [onClose, goPrev, goNext])

  const current = images[index]
  if (!current) return null

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer" onClick={onClose}>
      <button className="lightbox__close" type="button" onClick={onClose} aria-label="Close image viewer">
        <span aria-hidden="true">&times;</span>
      </button>

      {total > 1 && (
        <button
          className="lightbox__nav lightbox__nav--prev"
          type="button"
          onClick={(event) => { event.stopPropagation(); goPrev() }}
          aria-label="Previous image"
        >
          <ArrowIcon flip />
        </button>
      )}

      <img
        src={current.src}
        alt={current.alt || ''}
        className="lightbox__image"
        onClick={(event) => event.stopPropagation()}
      />

      {total > 1 && (
        <button
          className="lightbox__nav lightbox__nav--next"
          type="button"
          onClick={(event) => { event.stopPropagation(); goNext() }}
          aria-label="Next image"
        >
          <ArrowIcon />
        </button>
      )}

      {total > 1 && (
        <span className="lightbox__count mono">{index + 1} / {total}</span>
      )}
    </div>
  )
}
