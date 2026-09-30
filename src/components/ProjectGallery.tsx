import { useEffect, useRef, useState } from 'react'
import type { FocusEvent } from 'react'
import type { Project } from '../types/content'

const AUTOPLAY_INTERVAL = 5000

export function ProjectGallery({ project }: { project: Project }) {
  const galleryRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [category, setCategory] = useState('all')
  const [isHovered, setIsHovered] = useState(false)
  const [hasFocus, setHasFocus] = useState(false)
  const [isVisible, setIsVisible] = useState(() => typeof IntersectionObserver === 'undefined')
  const [isDocumentVisible, setIsDocumentVisible] = useState(true)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [manualReset, setManualReset] = useState(0)

  const sorted = [...project.images].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
  const images = sorted.filter((item) => category === 'all' || item.category === category)
  const safeActive = active < images.length ? active : 0
  const image = images[safeActive]
  const categories = [
    { value: 'application', label: 'Aplicação' },
    { value: 'commercial', label: 'Site comercial' },
  ].filter((item) => sorted.some((projectImage) => projectImage.category === item.value))

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches)
    updatePreference()
    mediaQuery.addEventListener('change', updatePreference)
    return () => mediaQuery.removeEventListener('change', updatePreference)
  }, [])

  useEffect(() => {
    const updateVisibility = () => setIsDocumentVisible(!document.hidden)
    updateVisibility()
    document.addEventListener('visibilitychange', updateVisibility)
    return () => document.removeEventListener('visibilitychange', updateVisibility)
  }, [])

  useEffect(() => {
    const element = galleryRef.current
    if (!element) return
    if (!('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting)
    })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (
      images.length < 2 ||
      !isVisible ||
      !isDocumentVisible ||
      isHovered ||
      hasFocus ||
      prefersReducedMotion
    ) return

    const timeout = window.setTimeout(() => {
      setActive((current) => (current + 1) % images.length)
    }, AUTOPLAY_INTERVAL)
    return () => window.clearTimeout(timeout)
  }, [
    active,
    category,
    hasFocus,
    images.length,
    isDocumentVisible,
    isHovered,
    isVisible,
    manualReset,
    prefersReducedMotion,
  ])

  const selectImage = (index: number) => {
    setActive(index)
    setManualReset((current) => current + 1)
  }

  const selectCategory = (value: string) => {
    setCategory(value)
    setActive(0)
    setManualReset((current) => current + 1)
  }

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setHasFocus(false)
  }

  if (!image) return null

  return (
    <div
      ref={galleryRef}
      className="project-gallery"
      aria-label={`Imagens de ${project.name}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setHasFocus(true)}
      onBlurCapture={handleBlur}
    >
      {categories.length > 0 && <div className="gallery-controls gallery-categories" role="group" aria-label={`Categorias de imagens de ${project.name}`}>
        {[{ value: 'all', label: 'Todas' }, ...categories].map((item) => <button
          type="button" key={item.value} aria-pressed={category === item.value}
          onClick={() => selectCategory(item.value)}
        >{item.label}</button>)}
      </div>}
      <figure>
        <img
          key={image.src}
          className="gallery-image"
          src={image.src}
          alt={image.alt}
          loading="lazy"
          width={image.width ?? 1200}
          height={image.height ?? 800}
          decoding="async"
        />
        <figcaption aria-live={hasFocus || prefersReducedMotion ? 'polite' : 'off'} aria-atomic="true">
          {image.category && <span className="gallery-category">{image.category === 'application' ? 'Aplicação' : 'Site comercial'} · </span>}
          {image.caption}
          <span className="gallery-count">Imagem {safeActive + 1} de {images.length}</span>
        </figcaption>
      </figure>
      {images.length > 1 && (
        <div className="gallery-controls" role="group" aria-label={`Selecionar imagem de ${project.name}`}>
          {images.map((item, index) => (
            <button
              type="button"
              key={item.src}
              aria-pressed={index === safeActive}
              onClick={() => selectImage(index)}
              aria-label={`Imagem ${index + 1}: ${item.caption}`}
            >
              {String(index + 1).padStart(2, '0')}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
