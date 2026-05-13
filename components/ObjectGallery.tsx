'use client'

import { useState, useEffect, useCallback } from 'react'
import type { GalleryItem } from '@/data/objects'

interface Props {
  items: GalleryItem[]
  name: string
}

function isVideo(item: GalleryItem) {
  return item.mime.startsWith('video/')
}

export default function ObjectGallery({ items, name }: Props) {
  const [current, setCurrent] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const goTo = useCallback(
    (idx: number) => setCurrent((idx + items.length) % items.length),
    [items.length]
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

  if (items.length === 0) return null

  const activeItem = items[current]
  const activeIsVideo = isVideo(activeItem)

  return (
    <>
      <div className="gallery-wrap">
        <div
          className="gallery-main"
          onClick={() => { if (!activeIsVideo) setLightboxOpen(true) }}
          style={{ cursor: activeIsVideo ? 'default' : 'zoom-in' }}
        >
          {activeIsVideo ? (
            <video
              key={activeItem.url}
              src={activeItem.url}
              controls
              playsInline
              className="gallery-main-video"
              aria-label={activeItem.alt ?? `${name} — видео ${current + 1}`}
            />
          ) : (
            <img
              src={activeItem.url}
              alt={activeItem.alt ?? `${name} — фото ${current + 1}`}
            />
          )}

          {items.length > 1 && (
            <div className="gallery-nav">
              <button
                className="gallery-btn"
                onClick={(e) => { e.stopPropagation(); goTo(current - 1) }}
                aria-label="Предыдущий элемент"
              >
                ←
              </button>
              <button
                className="gallery-btn"
                onClick={(e) => { e.stopPropagation(); goTo(current + 1) }}
                aria-label="Следующий элемент"
              >
                →
              </button>
            </div>
          )}

          <div className="gallery-counter">
            {current + 1} / {items.length}
          </div>
        </div>

        {items.length > 1 && (
          <div className="gallery-thumbs">
            {items.map((item, i) => (
              <div
                key={i}
                className={`gallery-thumb${i === current ? ' active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={isVideo(item) ? `Видео ${i + 1}` : `Фото ${i + 1}`}
              >
                {isVideo(item) ? (
                  <div className="gallery-thumb-video">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <polygon points="5,3 19,12 5,21" />
                    </svg>
                    <span className="gallery-thumb-badge">Видео</span>
                  </div>
                ) : (
                  <img src={item.url} alt={item.alt ?? `${name} — миниатюра ${i + 1}`} loading="lazy" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {lightboxOpen && !activeIsVideo && (
        <div
          className="lightbox open"
          onClick={(e) => { if (e.target === e.currentTarget) setLightboxOpen(false) }}
        >
          <button className="lightbox-close" onClick={() => setLightboxOpen(false)}>
            ESC — Закрыть
          </button>
          <div className="lightbox-nav">
            <button onClick={() => goTo(current - 1)}>←</button>
            <button onClick={() => goTo(current + 1)}>→</button>
          </div>
          <img
            src={activeItem.url}
            alt={activeItem.alt ?? `${name} — фото ${current + 1}`}
          />
        </div>
      )}
    </>
  )
}
