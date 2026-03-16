'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const images = [
  { src: '/kim.jpg', alt: 'Kimchi sandwich' },
  { src: '/sammo.jpg', alt: 'Sandwich board' },
  { src: '/bacon.jpg', alt: 'Breakfast sandwich' },
  { src: '/drizzle.jpg', alt: 'Drizzled sandwich' },
]

export default function MobileCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="block sm:hidden">
      <div className="relative aspect-[4/3] rounded-sm overflow-hidden ring-1 ring-[#c9b97a]">
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
              className="w-1.5 h-1.5 rounded-full transition-all"
              style={{ background: i === current ? '#f5eed8' : 'rgba(245,238,216,0.45)' }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
