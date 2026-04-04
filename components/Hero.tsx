import Image from "next/image";
import MobileCarousel from "./MobileCarousel";

function TornEdge() {
  return (
    <div className="relative overflow-hidden" style={{ height: '52px', background: '#0e0e0e', marginBottom: '-1px' }}>
      <svg
        viewBox="0 0 1440 52"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}
      >
        <path
          d="M0,52 L0,26 L18,34 L32,18 L48,30 L62,12 L78,24 L94,8 L110,22 L126,36 L140,16 L156,28 L172,10 L188,24 L204,38 L220,18 L236,30 L252,14 L268,26 L284,8 L300,22 L316,36 L330,16 L346,28 L362,12 L378,24 L394,36 L410,18 L426,30 L442,14 L458,26 L474,10 L490,24 L506,38 L522,20 L538,32 L554,14 L570,26 L586,10 L602,22 L618,36 L634,16 L650,28 L666,12 L682,24 L698,38 L714,20 L730,32 L746,14 L762,26 L778,8 L794,22 L810,36 L826,18 L842,30 L858,12 L874,24 L890,38 L906,20 L922,32 L938,14 L954,28 L970,10 L986,24 L1002,36 L1018,18 L1034,30 L1050,12 L1066,26 L1082,8 L1098,22 L1114,36 L1130,16 L1146,28 L1162,12 L1178,24 L1194,38 L1210,20 L1226,32 L1242,14 L1258,26 L1274,10 L1290,24 L1306,36 L1322,18 L1338,30 L1354,14 L1370,26 L1386,10 L1402,22 L1418,34 L1440,18 L1440,52 Z"
          fill="#F7F2E4"
        />
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <>
      {/* ── CSS Hero ─────────────────────────────────────── */}
      <section
        className="relative w-full overflow-hidden flex flex-col items-center justify-center"
        style={{ minHeight: '88vh', background: '#0e0e0e' }}
      >
        {/* Layer 1 — halftone dot texture */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
          backgroundSize: '8px 8px',
        }} />

        {/* Layer 2 — subtle newspaper column lines */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(to right, transparent 0px, transparent 119px, rgba(255,255,255,0.018) 119px, rgba(255,255,255,0.018) 120px)',
        }} />

        {/* Layer 3 — radial vignette */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(0,0,0,0.55) 100%)',
        }} />

        {/* Red corner brackets */}
        <div className="absolute top-6 left-6 w-8 h-8 border-l-2 border-t-2 border-[#C41E3A] opacity-70" />
        <div className="absolute top-6 right-6 w-8 h-8 border-r-2 border-t-2 border-[#C41E3A] opacity-70" />
        <div className="absolute bottom-16 left-6 w-8 h-8 border-l-2 border-b-2 border-[#C41E3A] opacity-70" />
        <div className="absolute bottom-16 right-6 w-8 h-8 border-r-2 border-b-2 border-[#C41E3A] opacity-70" />

        {/* Masthead content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-6 text-center py-16">

          {/* Top double rule */}
          <div className="flex flex-col gap-[3px] mb-3">
            <div className="h-[3px] bg-[#F7F2E4]" />
            <div className="h-px bg-[#F7F2E4] opacity-40" />
          </div>

          {/* Vol / Date line — middle item hidden on mobile */}
          <div className="flex items-center justify-between mb-2 px-1">
            <span style={{ fontFamily: 'var(--font-oswald)', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(247,242,228,0.45)' }}>
              Vol. XV — Est. 2022
            </span>
            <span className="hidden sm:inline" style={{ fontFamily: 'var(--font-oswald)', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(247,242,228,0.45)' }}>
              Gainesville, Florida
            </span>
            <span style={{ fontFamily: 'var(--font-oswald)', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(247,242,228,0.45)' }}>
              Three Locations
            </span>
          </div>

          <div className="h-px mb-6 sm:mb-8" style={{ background: 'rgba(247,242,228,0.2)' }} />

          {/* Main Headline */}
          <h1
            style={{ fontFamily: 'var(--font-playfair)', fontWeight: 900, lineHeight: 1.08, color: '#F7F2E4' }}
            className="text-4xl sm:text-5xl lg:text-7xl mb-3 tracking-tight"
          >
            Fresh. Handcrafted.
            <span className="text-[#C41E3A]"> Legendary.</span>
          </h1>

          {/* Sub-deck */}
          <p
            className="mb-6 px-2 sm:px-0"
            style={{ fontFamily: 'var(--font-oswald)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(247,242,228,0.5)' }}
          >
            Changing Lives - One Sandwich at a Time
          </p>

          {/* Bottom double rule */}
          <div className="flex flex-col gap-[3px] mb-7 sm:mb-8">
            <div className="h-px" style={{ background: 'rgba(247,242,228,0.2)' }} />
            <div className="h-[3px] bg-[#F7F2E4]" />
          </div>

          {/* CTA Buttons — wrap on very small screens */}
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/menu"
              className="px-6 sm:px-8 py-3 bg-[#C41E3A] text-[#F7F2E4] font-bold uppercase hover:bg-[#A01830] transition-colors"
              style={{ fontFamily: 'var(--font-oswald)', fontSize: '12px', letterSpacing: '0.18em' }}
            >
              View Menu
            </a>
            <a
              href="/gallery"
              className="px-6 sm:px-8 py-3 border-2 border-[#F7F2E4] text-[#F7F2E4] font-bold uppercase hover:bg-[#F7F2E4] hover:text-[#111] transition-colors"
              style={{ fontFamily: 'var(--font-oswald)', fontSize: '12px', letterSpacing: '0.18em' }}
            >
              Gallery
            </a>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center z-10 pointer-events-none">
          <div className="flex flex-col items-center gap-1 opacity-30">
            <div className="w-px h-8 bg-[#F7F2E4]" />
            <div className="w-1.5 h-1.5 bg-[#F7F2E4] rounded-full" />
          </div>
        </div>

      </section>

      {/* ── Torn Paper Edge ──────────────────────────────── */}
      <TornEdge />

      {/* ── Polaroid Strip ───────────────────────────────── */}
      <div className="bg-[#F7F2E4] pt-6 pb-16 px-4">
        <div className="max-w-6xl mx-auto relative">

          <MobileCarousel />

          <div className="hidden sm:flex items-end justify-center gap-6 lg:gap-8 px-4">
            <div className="polaroid polaroid-tilt-l w-[31%] flex-shrink-0">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="/sammo4.webp" alt="Sandwich" fill className="object-cover object-center" />
              </div>
              <p style={{ fontFamily: 'var(--font-oswald)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#444', textAlign: 'center', paddingTop: '10px' }}>
                Made Fresh Daily
              </p>
            </div>

            <div
              className="polaroid w-[34%] flex-shrink-0 -mb-4"
              style={{ zIndex: 10, transform: 'rotate(-0.5deg) scale(1.04)', boxShadow: '4px 6px 20px rgba(0,0,0,0.35)' }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="/sammo.jpg" alt="The Paper Bag Deli" fill className="object-cover object-center" />
              </div>
              <p style={{ fontFamily: 'var(--font-oswald)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#444', textAlign: 'center', paddingTop: '10px' }}>
                Paper Bag Deli
              </p>
            </div>

            <div className="polaroid polaroid-tilt-r w-[31%] flex-shrink-0">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="/drizzle.jpg" alt="Drizzled sandwich" fill className="object-cover object-center scale-x-[-1]" />
              </div>
              <p style={{ fontFamily: 'var(--font-oswald)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#444', textAlign: 'center', paddingTop: '10px' }}>
                Handcrafted
              </p>
            </div>
          </div>

          {/* EST. 2022 sticker */}
          <div
            className="hidden sm:flex absolute sticker items-center justify-center text-center"
            style={{
              width: '84px', height: '84px',
              fontSize: '9px', letterSpacing: '0.08em',
              fontFamily: 'var(--font-oswald)', fontWeight: 700,
              transform: 'rotate(-12deg)',
              top: '-24px', right: '48px', zIndex: 20,
            }}
          >
            <span>Est.<br />2022<br />★</span>
          </div>

        </div>
      </div>
    </>
  );
}
