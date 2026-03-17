import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-white text-[#1a1a1a] mt-8 border-t border-[#e8dfc4]">
      <div className="max-w-6xl mx-auto px-6 py-7">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

          {/* Brand */}
          <div>
            <p className="text-sm text-[#3a3128] tracking-widest uppercase mb-1">The Paper Bag Deli</p>
            <p className="text-sm text-[#6b5a3e] mb-4">Fresh, handcrafted, legendary.</p>
            <div className="flex justify-start pl-4">
              <Image src="/logo2.webp" alt="The Paper Bag Deli" width={220} height={220} className="opacity-90" />
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#5a4a35] font-bold mb-4">Explore</p>
            <ul className="flex flex-col gap-2">
              {[
                { href: '/menu', label: 'Menu' },
                { href: '/catering', label: 'Catering' },
                { href: '/locations', label: 'Locations' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#6b5a3e] hover:text-[#1a1a1a] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#5a4a35] font-bold mb-4">Locations</p>
            <div className="flex flex-col gap-4 text-sm text-[#6b5a3e]">
              <div>
                <p className="text-[#1a1a1a] font-medium">Downtown</p>
                <p>11 SE 1st Ave, Gainesville, FL</p>
                <a href="tel:3525546109" className="hover:text-[#3a3128] transition-colors">(352) 554-6109</a>
              </div>
              <div>
                <p className="text-[#1a1a1a] font-medium">Tower Road</p>
                <p>209 NW 75th St, Gainesville, FL</p>
                <a href="tel:3524514972" className="hover:text-[#3a3128] transition-colors">(352) 451-4972</a>
              </div>
              <div>
                <p className="text-[#1a1a1a] font-medium">Magnolia Parke</p>
                <p>4780 NW 39th Ave, Gainesville, FL</p>
                <a href="tel:3525544662" className="hover:text-[#3a3128] transition-colors">(352) 554-4662</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-6 pt-4 border-t border-[#e8dfc4] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#6b5a3e]/60">
            &copy; {new Date().getFullYear()} The Paper Bag Deli. All rights reserved.
          </p>
          <p className="text-xs text-[#6b5a3e]/60">Gainesville, FL — Est. 2009</p>
        </div>
      </div>
    </footer>
  )
}
