'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const images = [
  { src: '/sammo4.webp', alt: 'Sandwich' },
  { src: '/sammo.jpg', alt: 'Sandwich board' },
  { src: '/bacon.jpg', alt: 'Breakfast sandwich' },
  { src: '/drizzle.jpg', alt: 'Drizzled sandwich' },
  { src: '/sammo5.jpg', alt: 'Sandwich' },
]

export default function MobileCarousel() {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef<number | null>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length)
  const next = () => setCurrent((c) => (c + 1) % images.length)

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev()
    touchStartX.current = null
  }

  return (
    <div className="block sm:hidden">
      {/* Polaroid-style wrapper */}
      <div className="polaroid polaroid-center mx-2">
        <div
          className="relative aspect-[4/3] overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {images.map((img, i) => (
            <div
              key={img.src}
              className="absolute inset-0 transition-opacity duration-700"
              style={{ opacity: i === current ? 1 : 0 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-center"
                priority={i === 0}
              />
            </div>
          ))}

          {/* Dot indicators */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="w-2 h-2 rounded-full transition-all"
                style={{ background: i === current ? '#C41E3A' : 'rgba(247,242,228,0.55)' }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <p style={{ fontFamily: 'var(--font-oswald)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#444', textAlign: 'center', paddingTop: '10px' }}>
          {images[current].alt}
        </p>
      </div>
    </div>
  )
}
