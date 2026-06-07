import { useEffect, useState } from 'react'

const images = [
  '/hero/hero-1.png',
  '/hero/hero-2.png',
  '/hero/hero-3.webp',
  '/hero/hero-4.avif',
]

const ROTATE_MS = 4000

export default function HeroCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, ROTATE_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="hero-carousel">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt="SMEquity — supporting Dutch SMEs"
          className={`hero-carousel-img ${i === index ? 'active' : ''}`}
        />
      ))}
      <div className="hero-carousel-dots">
        {images.map((_, i) => (
          <span key={i} className={`hero-carousel-dot ${i === index ? 'active' : ''}`} />
        ))}
      </div>
    </div>
  )
}
