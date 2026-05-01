'use client'

import { useState, useEffect, useCallback } from 'react'

interface Props {
  photos: string[]
  name: string
}

export default function ObjectGallery({ photos, name }: Props) {
  const [current, setCurrent] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const goTo = useCallback(
    (idx: number) => {
      setCurrent((idx + photos.length) % photos.length)
    },
    [photos.length]
  )

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setLightboxOpen(false)
      if (lightboxOpen) {
        if (e.key === 'ArrowLeft') goTo(current - 1)
        if (e.key === 'ArrowRight') goTo(current + 1)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [lightboxOpen, current, goTo])

  return (
    <>
      <div className="gallery-wrap">
        <div
          className="gallery-main"
          onClick={() => setLightboxOpen(true)}
        >
          <img src={photos[current]} alt={`${name} — фото ${current + 1}`} />
          <div className="gallery-nav">
            <button
              className="gallery-btn"
              onClick={(e) => { e.stopPropagation(); goTo(current - 1) }}
              aria-label="Предыдущее фото"
            >
              ←
            </button>
            <button
              className="gallery-btn"
              onClick={(e) => { e.stopPropagation(); goTo(current + 1) }}
              aria-label="Следующее фото"
            >
              →
            </button>
          </div>
          <div className="gallery-counter">
            {current + 1} / {photos.length}
          </div>
        </div>
        <div className="gallery-thumbs">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`gallery-thumb${i === current ? ' active' : ''}`}
              onClick={() => goTo(i)}
            >
              <img src={photo} alt={`${name} — миниатюра ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div
          className="lightbox open"
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightboxOpen(false)
          }}
        >
          <button
            className="lightbox-close"
            onClick={() => setLightboxOpen(false)}
          >
            ESC — Закрыть
          </button>
          <div className="lightbox-nav">
            <button onClick={() => goTo(current - 1)}>←</button>
            <button onClick={() => goTo(current + 1)}>→</button>
          </div>
          <img src={photos[current]} alt={`${name} — фото ${current + 1}`} />
        </div>
      )}
    </>
  )
}
