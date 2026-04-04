import type { Metadata } from 'next'
import { Playfair_Display, Oswald } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['700', '800', '900'],
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'The Paper Bag Deli',
  description: 'Fresh sandwiches, hearty soups, and homemade sides — made from scratch every morning.',
}

function WeaveBorder() {
  const h = 80
  const n = 60
  const mid = 12
  const amp = 9
  const gap = 5
  const totalH = h * n

  const segmentsA: string[] = []
  const segmentsB: string[] = []

  for (let i = 0; i < n; i++) {
    const y0 = i * h
    const y1 = y0 + h
    const cp = y0 + h / 2
    const xA = i % 2 === 0 ? mid + amp : mid - amp
    const xB = i % 2 === 0 ? mid - amp : mid + amp
    const aIsOver = i % 2 === 0

    if (aIsOver) {
      const tGap = gap / h
      const bGapX = (1 - tGap) * (1 - tGap) * mid + 2 * tGap * (1 - tGap) * xB + tGap * tGap * mid
      const bGapY = y0 + gap
      const bNewCpX = (1 - tGap) * xB + tGap * mid
      const bNewCpY = (1 - tGap) * cp + tGap * y1
      segmentsA.push(`M ${mid} ${y0} Q ${xA} ${cp} ${mid} ${y1}`)
      segmentsB.push(`M ${bGapX.toFixed(2)} ${bGapY} Q ${bNewCpX.toFixed(2)} ${bNewCpY.toFixed(2)} ${mid} ${y1}`)
    } else {
      const tGap = gap / h
      const aGapX = (1 - tGap) * (1 - tGap) * mid + 2 * tGap * (1 - tGap) * xA + tGap * tGap * mid
      const aGapY = y0 + gap
      const aNewCpX = (1 - tGap) * xA + tGap * mid
      const aNewCpY = (1 - tGap) * cp + tGap * y1
      segmentsB.push(`M ${mid} ${y0} Q ${xB} ${cp} ${mid} ${y1}`)
      segmentsA.push(`M ${aGapX.toFixed(2)} ${aGapY} Q ${aNewCpX.toFixed(2)} ${aNewCpY.toFixed(2)} ${mid} ${y1}`)
    }
  }

  return (
    <svg width="24" height={totalH} viewBox={`0 0 24 ${totalH}`} fill="none" xmlns="http://www.w3.org/2000/svg" className="weave-animated">
      <path d={segmentsB.join(' ')} stroke="#C41E3A" strokeWidth="1.5" strokeOpacity="0.3" strokeLinecap="round" />
      <path d={segmentsA.join(' ')} stroke="#C41E3A" strokeWidth="1.5" strokeOpacity="0.3" strokeLinecap="round" />
    </svg>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${oswald.variable}`}>
      <body className="bg-[#F7F2E4] text-[#111111]">
        {/* Left weave border */}
        <div className="fixed top-0 left-2 z-40 pointer-events-none overflow-hidden h-screen">
          <WeaveBorder />
        </div>
        {/* Right weave border */}
        <div className="fixed top-0 right-2 z-40 pointer-events-none overflow-hidden h-screen">
          <WeaveBorder />
        </div>
        {/* Vignette */}
        <div
          className="fixed inset-0 z-30 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 40%, transparent 50%, rgba(0,0,0,0.04) 100%)' }}
        />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
