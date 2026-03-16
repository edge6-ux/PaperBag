export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16">

      {/* Summary */}
      <div className="max-w-2xl mb-16">
        <h1 className="text-3xl font-semibold tracking-tight text-[#2C2C2C] mb-6">About Us</h1>
        <p className="text-neutral-600 text-base leading-relaxed">
          {/* Paragraph coming soon */}
        </p>
      </div>

      {/* Gallery */}
      <div id="gallery" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Gallery images coming soon */}
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="w-full h-64 rounded-lg bg-neutral-100" />
        ))}
      </div>

    </main>
  )
}
