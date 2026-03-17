import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import MobileCarousel from "./MobileCarousel";

const headline = Cormorant_Garamond({ subsets: ["latin"], weight: "600" });

export default function Hero() {
  return (
    <section className="w-full pt-6 pb-24">
      <div className="max-w-6xl mx-auto px-4">

        {/* Logo */}
        <div className="flex justify-center mb-0">
          <Link href="/">
            <Image
              src="/logo2.webp"
              alt="The Paper Bag Deli logo"
              width={240}
              height={240}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Text Block */}
        <div className="text-center max-w-2xl mx-auto mb-10">

          {/* Newspaper masthead line */}
          <div className="flex items-center gap-3 justify-center mb-5">
            <div className="h-px bg-[#3a3128] w-16" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#6b5a3e] whitespace-nowrap">Gainesville, FL — Est. 2009</span>
            <div className="h-px bg-[#3a3128] w-16" />
          </div>

          <h1 className={`${headline.className} tracking-tight mb-5`}>
            {/* Mobile: stacked, Desktop: single line */}
            <span className="block sm:hidden text-4xl text-[#1a1a1a]">Fresh, Handcrafted,<br />Legendary</span>
            <span className="hidden sm:block text-5xl whitespace-nowrap text-[#1a1a1a]">Fresh, Handcrafted, Legendary</span>
            <span className="block text-5xl sm:text-6xl text-[#1a1a1a]">Sandwiches.</span>
          </h1>

          {/* Rule under headline */}
          <div className="flex items-center gap-2 justify-center mb-7">
            <div className="h-px bg-[#3a3128] flex-1 max-w-[120px]" />
            <div className="w-1 h-1 rounded-full bg-[#3a3128]" />
            <div className="h-px bg-[#3a3128] flex-1 max-w-[120px]" />
          </div>

          <div className="flex justify-center gap-3">
            <a
              className="px-7 py-2.5 bg-[#1a1a1a] text-[#fdf9f3] text-sm font-medium tracking-wide rounded hover:bg-black transition-colors"
              href="/menu"
            >
              View Menu
            </a>
            <a
              className="px-7 py-2.5 border border-[#1a1a1a] text-[#1a1a1a] text-sm font-medium tracking-wide rounded hover:bg-[#e8dfc4] transition-colors"
              href="/gallery"
            >
              Gallery
            </a>
          </div>
        </div>

        {/* Mobile: auto-sliding carousel */}
        <MobileCarousel />

        {/* Desktop: 1x3 grid */}
        <div className="hidden sm:grid grid-cols-3 gap-6">
          <div className="relative aspect-[4/3] rounded-sm overflow-hidden ring-1 ring-[#c9b97a]">
            <Image src="/sammo4.webp" alt="Sandwich" fill className="object-cover object-center" />
          </div>
          <div className="relative aspect-[4/3] rounded-sm overflow-hidden ring-1 ring-[#c9b97a]">
            <Image src="/sammo.jpg" alt="Sandwich board" fill className="object-cover object-center" />
          </div>
          <div className="relative aspect-[4/3] rounded-sm overflow-hidden ring-1 ring-[#c9b97a]">
            <Image src="/drizzle.jpg" alt="Drizzled sandwich" fill className="object-cover object-center" />
          </div>
        </div>

      </div>
    </section>
  );
}
