import Link from 'next/link'

interface CateringBlockProps {
  title: string
  description: string
  linkLabel?: string
  linkHref?: string
}

export default function CateringBlock({
  title,
  description,
  linkLabel = 'Learn More',
  linkHref = '/contact',
}: CateringBlockProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm">
      {/* Placeholder image */}
      <div className="w-full h-52 bg-gray-100 flex items-center justify-center">
        <span className="text-gray-300 text-sm">Photo Coming Soon</span>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-[#2C2C2C] mb-2">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-5">{description}</p>
        <Link
          href={linkHref}
          className="inline-block bg-[#6B9B6B] text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors"
        >
          {linkLabel}
        </Link>
      </div>
    </div>
  )
}
