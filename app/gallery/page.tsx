import Image from 'next/image'
import { Dancing_Script } from 'next/font/google'

import Sammo from '@/public/sammo.jpg'
import Sammo6 from '@/public/sammo6.jpg'
import Sammo2 from '@/public/sammo2.jpg'
import Sammo3 from '@/public/sammo3.jpg'
import Sammo4 from '@/public/sammo4.webp'
import Sammo5 from '@/public/sammo5.jpg'
import Bacon from '@/public/bacon.jpg'
import Drizzle from '@/public/drizzle.jpg'
import Main from '@/public/main.jpg'
import Kim from '@/public/kim.jpg'
import Mag from '@/public/mag.jpg'
import Downtown from '@/public/downtown.jpg'
import Tower from '@/public/tower.jpg'
import Platter1 from '@/public/platter1.jpg'
import Platter2 from '@/public/platter2.jpg'
import Platter3 from '@/public/platter3.jpg'
import Gallery1 from '@/public/gallery1.jpg'
import Gallery2 from '@/public/gallery2.jpg'
import Gallery3 from '@/public/gallery3.jpg'
import Gallery4 from '@/public/gallery4.jpg'
import Gallery5 from '@/public/gallery5.jpg'

const cursive = Dancing_Script({ subsets: ['latin'], weight: '600' })

const images = [
  { src: Sammo5, alt: 'Sandwich' },
  { src: Sammo, alt: 'Sandwich board' },
  { src: Platter1, alt: 'Catering platter' },
  { src: Bacon, alt: 'Breakfast sandwich' },
  { src: Sammo2, alt: 'Sandwich' },
  { src: Sammo6, alt: 'Sandwich' },
  { src: Platter2, alt: 'Catering spread' },
  { src: Drizzle, alt: 'Drizzled sandwich' },
  { src: Sammo3, alt: 'Sandwich' },
  { src: Platter3, alt: 'Catering selection' },
  { src: Main, alt: 'The Paper Bag Deli' },
  { src: Sammo4, alt: 'Sandwich' },
  { src: Kim, alt: 'Deli' },
  { src: Downtown, alt: 'Downtown location' },
  { src: Tower, alt: 'Tower Road location' },
  { src: Mag, alt: 'Magnolia Parke location' },
  { src: Gallery1, alt: 'Gallery' },
  { src: Gallery2, alt: 'Gallery' },
  { src: Gallery3, alt: 'Gallery' },
  { src: Gallery4, alt: 'Gallery' },
  { src: Gallery5, alt: 'Gallery' },
]

export default function GalleryPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-14 pb-20">
      {/* Header */}
      <div className="text-center mb-10">
        <p className={`${cursive.className} text-4xl text-[#1a1a1a] mb-3`}>
          Gallery
        </p>
        <div className="flex items-center gap-3 justify-center">
          <div className="h-px bg-[#c9b97a] w-16" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#6b5a3e]">
            Food, atmosphere & events
          </span>
          <div className="h-px bg-[#c9b97a] w-16" />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative w-full overflow-hidden rounded-xl shadow-md"
            style={{ height: '280px' }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
