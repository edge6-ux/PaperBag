import Link from 'next/link'
import Hero from '@/components/Hero'
import LocationCard from '@/components/LocationCard'

/* ─── Shared micro-components ────────────────────────── */

function TickerDivider() {
  const items = ['Fresh Cuts Daily', "Boar's Head Meats", 'Gainesville FL', 'Made From Scratch', 'Est. 2022', 'Order Online', 'Three Locations', 'Changing Lives One Sandwich at a Time']
  return (
    <div className="bg-[#C41E3A] overflow-hidden h-8 flex items-center">
      <div className="flex ticker-track select-none">
        {[...Array(2)].map((_, rep) => (
          <span key={rep} className="flex items-center">
            {items.map((item, i) => (
              <span key={i} className="flex items-center gap-5 px-4" style={{ fontFamily: 'var(--font-oswald)', fontSize: '11px', letterSpacing: '0.18em', color: '#F7F2E4', textTransform: 'uppercase', fontWeight: 600, whiteSpace: 'nowrap' }}>
                <span>{item}</span>
                <span style={{ opacity: 0.45 }}>✦</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  )
}

function NewspaperSectionHeader({ label, title, subtitle }: { label: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-8 sm:mb-10">
      <div className="flex flex-col gap-[2px] mb-3">
        <div className="h-[3px] bg-[#111]" />
        <div className="h-px bg-[#111]" />
      </div>
      <div className="flex items-baseline justify-between mb-1 gap-2">
        <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: 900, color: '#111', lineHeight: 1 }}>
          {title}
        </h2>
        <span className="hidden sm:inline flex-shrink-0" style={{ fontFamily: 'var(--font-oswald)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888' }}>
          {label}
        </span>
      </div>
      {subtitle && (
        <p style={{ fontFamily: 'var(--font-oswald)', fontSize: '13px', color: '#555', letterSpacing: '0.06em' }}>
          {subtitle}
        </p>
      )}
      <div className="h-px bg-[#111] mt-3" />
    </div>
  )
}

/* ─── Home page ───────────────────────────────────────── */

export default function HomePage() {
  return (
    <div>
      <Hero />

      {/* ── Ticker divider ───────────────────────────────── */}
      <TickerDivider />

      {/* ── Stats Bar ────────────────────────────────────── */}
      <div className="bg-[#111111]">
        <div className="max-w-6xl mx-auto px-6 py-8 sm:py-10">
          <div className="grid grid-cols-3 divide-x divide-[#2a2a2a] text-center">
            {[
              { num: '2022', label: 'Founded' },
              { num: '3', label: 'Locations' },
              { num: '100%', label: 'Scratch Made' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1 px-2">
                <span style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px, 6vw, 44px)', fontWeight: 900, color: '#F7F2E4', lineHeight: 1 }}>
                  {stat.num}
                </span>
                <span style={{ fontFamily: 'var(--font-oswald)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C41E3A' }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Today's Special ──────────────────────────────── */}
      <div className="bg-[#F7F2E4] py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <NewspaperSectionHeader label="From the Kitchen" title="Today's Special" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-[#111]">
            {/* Left — feature sandwich */}
            <div className="p-5 sm:p-8 border-b-2 md:border-b-0 md:border-r-2 border-[#111]">
              <div className="inline-block bg-[#C41E3A] px-3 py-1 mb-4" style={{ fontFamily: 'var(--font-oswald)', fontSize: '10px', letterSpacing: '0.25em', color: '#F7F2E4', textTransform: 'uppercase', fontWeight: 700 }}>
                ★ Chef&apos;s Pick
              </div>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(20px, 4vw, 28px)', fontWeight: 900, color: '#111', lineHeight: 1.1 }} className="mb-3">
                #9 Tony Montana Cubano
              </h3>
              <p style={{ fontFamily: 'var(--font-oswald)', fontSize: '13px', color: '#555', letterSpacing: '0.04em', lineHeight: 1.7 }} className="mb-5">
                Roasted pork, ham, salami, Swiss, pickles, mayo, and mustard — all pressed together on toasted Cuban bread. Say hello to your new favorite.
              </p>
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#ddd] pt-4">
                <span style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(16px, 3vw, 22px)', fontWeight: 900, color: '#111' }}>
                  $11.95 <span style={{ fontSize: '14px', color: '#888', fontWeight: 400 }}>/ Godfather $13.95</span>
                </span>
                <Link
                  href="/menu"
                  className="bg-[#111] text-[#F7F2E4] px-4 sm:px-5 py-2 hover:bg-[#C41E3A] transition-colors font-bold tracking-widest uppercase whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-oswald)', fontSize: '11px', letterSpacing: '0.18em' }}
                >
                  Full Menu →
                </Link>
              </div>
            </div>

            {/* Right — secondary picks */}
            <div className="p-5 sm:p-8 flex flex-col gap-4 sm:gap-5">
              <div style={{ fontFamily: 'var(--font-oswald)', fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#888', fontWeight: 600 }}>
                Also Worth Ordering
              </div>
              {[
                { name: '#12 Uncle Drew Monte Cristo', desc: 'Ham, turkey, cheddar, mustard, and mayo pressed between French toast.' },
                { name: '#3 J Rock Delight', desc: 'Eggs, bacon, smoked turkey, cheddar, and chipotle sauce pressed on sourdough.' },
                { name: '#11 Tre Way Jay', desc: 'Burnt pork ends, maple honey ham, bacon, bourbon glaze, and pickled onions.' },
              ].map((item, i) => (
                <div key={i} className={i < 2 ? 'border-b border-[#ddd] pb-4 sm:pb-5' : ''}>
                  <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '15px', fontWeight: 700, color: '#111', marginBottom: '4px' }}>{item.name}</p>
                  <p style={{ fontFamily: 'var(--font-oswald)', fontSize: '12px', color: '#666', letterSpacing: '0.03em', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Ticker divider ───────────────────────────────── */}
      <TickerDivider />

      {/* ── Visit Us ─────────────────────────────────────── */}
      <section className="py-12 sm:py-16 px-4 bg-[#F7F2E4]">
        <div className="max-w-6xl mx-auto">
          <NewspaperSectionHeader label="Gainesville, FL" title="Visit Us" subtitle="Two convenient locations across Gainesville." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <LocationCard
              name="Downtown"
              address="11 SE 1st Ave"
              city="Gainesville, FL 32601"
              phone="(352) 554-6109"
              image="/downtown.jpg"
              hours={[
                { days: 'Mon – Thu', time: '10am – 3pm' },
                { days: 'Friday', time: '10am – 8pm' },
                { days: 'Saturday', time: '10am – 3pm' },
                { days: 'Sunday', time: '10am – 2pm' },
              ]}
            />
            <LocationCard
              name="Tower Rd"
              address="209 NW 75th St"
              city="Gainesville, FL 32607"
              phone="(352) 451-4972"
              image="/tower.jpg"
              hours={[
                { days: 'Mon – Fri', time: '6am – 3pm' },
                { days: 'Saturday', time: '10am – 3pm' },
                { days: 'Sunday', time: 'Closed' },
              ]}
            />
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/locations"
              className="inline-block border-2 border-[#111] px-6 py-2 text-[#111] hover:bg-[#111] hover:text-[#F7F2E4] transition-colors font-bold uppercase"
              style={{ fontFamily: 'var(--font-oswald)', fontSize: '12px', letterSpacing: '0.2em' }}
            >
              View All Locations →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Pull Quote ───────────────────────────────────── */}
      <div className="bg-[#111111] py-14 sm:py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div style={{ fontFamily: 'var(--font-playfair)', fontSize: '56px', color: '#C41E3A', lineHeight: 0.8, marginBottom: '12px', fontWeight: 900 }}>
            &ldquo;
          </div>
          <p style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', fontWeight: 700, color: '#F7F2E4', lineHeight: 1.35, fontSize: 'clamp(18px, 4vw, 28px)' }}>
            Changing lives one sandwich at a time.
          </p>
          <div className="flex flex-col gap-[2px] max-w-[120px] mx-auto my-5">
            <div className="h-[2px] bg-[#C41E3A]" />
            <div className="h-px bg-[#333]" />
          </div>
          <p style={{ fontFamily: 'var(--font-oswald)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#555' }}>
            The Paper Bag Deli — Gainesville, FL
          </p>
        </div>
      </div>

      {/* ── Catering CTA ─────────────────────────────────── */}
      <div className="bg-[#C41E3A] py-14 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-center md:text-left">
            <div>
              <div style={{ fontFamily: 'var(--font-oswald)', fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(247,242,228,0.65)', marginBottom: '6px' }}>
                Events · Offices · Gatherings
              </div>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(26px, 5vw, 36px)', fontWeight: 900, color: '#F7F2E4', lineHeight: 1.05 }}>
                Feeding a Crowd?
              </h2>
              <p style={{ fontFamily: 'var(--font-oswald)', fontSize: '13px', color: 'rgba(247,242,228,0.75)', letterSpacing: '0.04em', marginTop: '8px' }}>
                Boxed lunches, sandwich trays, and full-service catering — all made fresh.
              </p>
            </div>
            <div className="flex-shrink-0 flex items-center gap-4">
              <Link
                href="/catering"
                className="inline-block bg-[#111] text-[#F7F2E4] px-7 sm:px-8 py-3 font-bold uppercase hover:bg-black transition-colors whitespace-nowrap"
                style={{ fontFamily: 'var(--font-oswald)', fontSize: '13px', letterSpacing: '0.2em' }}
              >
                Explore Catering
              </Link>
              <div
                className="sticker-black hidden md:flex items-center justify-center text-center flex-shrink-0"
                style={{ width: '76px', height: '76px', fontSize: '9px', letterSpacing: '0.06em', fontFamily: 'var(--font-oswald)', fontWeight: 700, transform: 'rotate(8deg)' }}
              >
                <span>Feed<br />the<br />Crowd</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Feature Strip ────────────────────────────────── */}
      <div className="bg-halftone py-12 sm:py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: '✦', title: 'Scratch Kitchen', body: 'Every sandwich, soup, and side made fresh every morning. No shortcuts, no compromises.' },
              { icon: '✦', title: "Boar's Head Meats", body: 'Premium deli meats you can taste the difference in — because quality is non-negotiable.' },
              { icon: '✦', title: 'Gainesville Since 2022', body: 'A neighborhood staple with three locations and a reputation built sandwich by sandwich.' },
            ].map((feat) => (
              <div key={feat.title} className="border-2 border-[#111] bg-[#F7F2E4] p-6 sm:p-7">
                <div className="text-[#C41E3A] text-xl mb-3">{feat.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '19px', fontWeight: 800, color: '#111', marginBottom: '8px' }}>
                  {feat.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-oswald)', fontSize: '13px', color: '#555', letterSpacing: '0.04em', lineHeight: 1.7 }}>
                  {feat.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
