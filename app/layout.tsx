import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Paper Bag Deli',
  description: 'Fresh sandwiches, hearty soups, and homemade sides — made from scratch every morning.',
}

function WeaveBorder() {
  const h = 80       // height per cycle
  const n = 60       // number of cycles
  const mid = 12     // center x
  const amp = 9      // amplitude (how far each wave swings)
  const gap = 5      // gap in px around each crossing for under/over effect
  const totalH = h * n

  // Build segment data for both waves
  // Wave A: starts swinging right (even i → right, odd i → left)
  // Wave B: starts swinging left  (even i → left,  odd i → right)
  // They cross at every y = i * h (the endpoints of each segment)
  // Alternate which is "over": wave A over at even crossings, wave B over at odd

  const segmentsA: string[] = []
  const segmentsB: string[] = []

  for (let i = 0; i < n; i++) {
    const y0 = i * h
    const y1 = y0 + h
    const cp = y0 + h / 2
    const xA = i % 2 === 0 ? mid + amp : mid - amp  // wave A control x
    const xB = i % 2 === 0 ? mid - amp : mid + amp  // wave B control x

    // At the start crossing (y0), wave A is over at even i, wave B is over at odd i
    // The "under" wave gets a small gap at the start of its segment
    const aIsOver = i % 2 === 0

    if (aIsOver) {
      // Wave A draws full segment, wave B skips start gap
      const tGap = gap / h
      const bGapX = (1 - tGap) * (1 - tGap) * mid + 2 * tGap * (1 - tGap) * xB + tGap * tGap * mid
      const bGapY = y0 + gap
      const bNewCpX = (1 - tGap) * xB + tGap * mid
      const bNewCpY = (1 - tGap) * cp + tGap * y1
      segmentsA.push(`M ${mid} ${y0} Q ${xA} ${cp} ${mid} ${y1}`)
      segmentsB.push(`M ${bGapX.toFixed(2)} ${bGapY} Q ${bNewCpX.toFixed(2)} ${bNewCpY.toFixed(2)} ${mid} ${y1}`)
    } else {
      // Wave B draws full segment, wave A skips start gap
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
    <svg width="24" height={totalH} viewBox={`0 0 24 ${totalH}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Wave B drawn first (goes under at even crossings) */}
      <path d={segmentsB.join(' ')} stroke="black" strokeWidth="1.5" strokeOpacity="0.25" strokeLinecap="round" />
      {/* Wave A drawn on top */}
      <path d={segmentsA.join(' ')} stroke="black" strokeWidth="1.5" strokeOpacity="0.25" strokeLinecap="round" />
    </svg>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-[#2C2C2C]`}>
        {/* Left weave border */}
        <div className="fixed top-0 left-2 z-40 pointer-events-none overflow-hidden h-screen">
          <WeaveBorder />
        </div>
        {/* Right weave border */}
        <div className="fixed top-0 right-2 z-40 pointer-events-none overflow-hidden h-screen">
          <WeaveBorder />
        </div>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
