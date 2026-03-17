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
    <div className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm">
      {/* Image or placeholder */}
      <div className="relative w-full h-72 bg-gray-100">
        {image ? (
          <Image src={image} alt={name} fill className="object-cover object-center" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-gray-400 text-sm font-medium tracking-wide uppercase">Coming Soon</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-[#2C2C2C] mb-1">{name}</h3>
        <p className="text-gray-500 text-sm">{address}</p>
        <p className="text-gray-500 text-sm mb-3">{city}</p>
        <a
          href={`tel:${phone.replace(/\D/g, '')}`}
          className="text-[#6B9B6B] text-sm font-medium hover:underline block mb-4"
        >
          {phone}
        </a>
        <div className="border-t border-gray-100 pt-4">
          <p className="text-xs font-semibold text-[#2C2C2C] uppercase tracking-wide mb-2">Hours</p>
          {hours.map((h) => (
            <div key={h.days} className="flex justify-between text-sm text-gray-500 mb-1">
              <span>{h.days}</span>
              <span>{h.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
