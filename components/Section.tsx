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
            {/* Newspaper-style section header */}
            <div className="flex flex-col gap-[2px] mb-3">
              <div className="h-[3px] bg-[#111]" />
              <div className="h-px bg-[#111]" />
            </div>
            {title && (
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '32px', fontWeight: 900, color: '#111', lineHeight: 1 }} className="mb-2">
                {title}
              </h2>
            )}
            {subtitle && (
              <p style={{ fontFamily: 'var(--font-oswald)', fontSize: '13px', color: '#555', letterSpacing: '0.06em' }}>
                {subtitle}
              </p>
            )}
            <div className="h-px bg-[#111] mt-3" />
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
