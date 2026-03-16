interface SectionProps {
  children: React.ReactNode
  title?: string
  subtitle?: string
  className?: string
}

export default function Section({ children, title, subtitle, className = '' }: SectionProps) {
  return (
    <section className={`py-16 px-4 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <div className="mb-10">
            {title && (
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2C2C2C] mb-2">{title}</h2>
            )}
            {subtitle && (
              <p className="text-gray-500 text-base">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
