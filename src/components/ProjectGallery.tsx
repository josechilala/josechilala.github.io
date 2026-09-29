import { useState } from 'react'
import type { Project } from '../types/content'

export function ProjectGallery({ project }: { project: Project }) {
  const [active, setActive] = useState(0)
  const [category, setCategory] = useState('all')
  const sorted = [...project.images].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
  const images = sorted.filter((item) => category === 'all' || item.category === category)
  const image = images[active] ?? images[0]
  const categories = [
    { value: 'application', label: 'Aplicação' },
    { value: 'commercial', label: 'Site comercial' },
  ].filter((item) => sorted.some((image) => image.category === item.value))
  if (!image)
    return (
      <div className={`project-placeholder placeholder-${project.id}`}>
        <div className="placeholder-top">
          <span>PROJETO / {project.number}</span>
          <span aria-hidden="true">↗</span>
        </div>
        <div className="project-wordmark" aria-hidden="true">
          {project.id === 'queueflow'
            ? 'Qf'
            : project.id === 'webapp-compras'
              ? 'Wc'
              : 'A.api'}
          <span>_</span>
        </div>
        <div className="placeholder-bottom">
          <span>{project.subtitle}</span>
          <span className="placeholder-label">Screenshots em breve</span>
        </div>
      </div>
    )
  return (
    <div className="project-gallery" aria-label={`Imagens de ${project.name}`}>
      {categories.length > 0 && <div className="gallery-controls gallery-categories" role="group" aria-label={`Categorias de imagens de ${project.name}`}>
        {[{ value: 'all', label: 'Todas' }, ...categories].map((item) => <button
          type="button" key={item.value} aria-pressed={category === item.value}
          onClick={() => { setCategory(item.value); setActive(0) }}
        >{item.label}</button>)}
      </div>}
      <figure>
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          width={image.width ?? 1200}
          height={image.height ?? 800}
          decoding="async"
        />
        <figcaption aria-live="polite" aria-atomic="true">
          {image.category && <span className="gallery-category">{image.category === 'application' ? 'Aplicação' : 'Site comercial'} · </span>}
          {image.caption}
          <span className="gallery-count">Imagem {images.indexOf(image) + 1} de {images.length}</span>
        </figcaption>
      </figure>
      {images.length > 1 && (
        <div className="gallery-controls" role="group" aria-label={`Selecionar imagem de ${project.name}`}>
          {images.map((item, index) => (
            <button
              type="button"
              key={item.src}
              aria-pressed={index === active}
              onClick={() => setActive(index)}
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
