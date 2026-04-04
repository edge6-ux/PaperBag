import Image from 'next/image'

interface HourRow {
  days: string
  time: string
}

interface LocationCardProps {
  name: string
  address: string
  city: string
  phone: string
  hours: HourRow[]
  image?: string
}

export default function LocationCard({ name, address, city, phone, hours, image }: LocationCardProps) {
  return (
    <div className="bg-[#F7F2E4] border-2 border-[#111] overflow-hidden">
      {/* Image */}
      <div className="relative w-full h-64 bg-[#222]">
        {image ? (
          <Image src={image} alt={name} fill className="object-cover object-center" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span style={{ fontFamily: 'var(--font-oswald)', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#555' }}>
              Coming Soon
            </span>
          </div>
        )}
        {/* Red label overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#C41E3A] px-4 py-2">
          <span style={{ fontFamily: 'var(--font-oswald)', fontSize: '14px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F7F2E4', fontWeight: 600 }}>
            {name}
          </span>
        </div>
      </div>

      <div className="p-6">
        <p style={{ fontFamily: 'var(--font-oswald)', fontSize: '13px', color: '#444', letterSpacing: '0.04em' }}>{address}</p>
        <p style={{ fontFamily: 'var(--font-oswald)', fontSize: '13px', color: '#444', letterSpacing: '0.04em' }} className="mb-3">{city}</p>
        <a
          href={`tel:${phone.replace(/\D/g, '')}`}
          className="text-[#C41E3A] hover:text-[#A01830] transition-colors font-bold block mb-4"
          style={{ fontFamily: 'var(--font-oswald)', fontSize: '14px', letterSpacing: '0.08em' }}
        >
          {phone}
        </a>

        {/* Hours */}
        <div className="border-t-2 border-[#111] pt-4">
          <p style={{ fontFamily: 'var(--font-oswald)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#111', fontWeight: 600 }} className="mb-3">
            Hours
          </p>
          {hours.map((h) => (
            <div key={h.days} className="flex justify-between mb-1" style={{ fontFamily: 'var(--font-oswald)', fontSize: '13px', color: '#555', letterSpacing: '0.04em' }}>
              <span>{h.days}</span>
              <span>{h.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
