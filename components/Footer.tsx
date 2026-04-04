import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-[#F7F2E4] mt-0">

      {/* Red rule top */}
      <div className="h-[5px] bg-[#C41E3A]" />

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

          {/* Brand */}
          <div>
            <p style={{ fontFamily: 'var(--font-oswald)', fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C41E3A', fontWeight: 600 }} className="mb-1">
              The Paper Bag Deli
            </p>
            <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '14px', color: '#888', fontStyle: 'italic' }} className="mb-5">
              Fresh, handcrafted, legendary.
            </p>
            <div className="flex justify-start pl-2">
              <Image src="/logo2.webp" alt="The Paper Bag Deli" width={180} height={180} className="opacity-60" />
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p style={{ fontFamily: 'var(--font-oswald)', fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C41E3A', fontWeight: 600 }} className="mb-5">
              Explore
            </p>
            {/* Double rule under section header */}
            <div className="flex flex-col gap-[2px] mb-4">
              <div className="h-[2px] bg-[#333]" />
              <div className="h-px bg-[#333]" />
            </div>
            <ul className="flex flex-col gap-3">
              {[
                { href: '/menu', label: 'Menu' },
                { href: '/catering', label: 'Catering' },
                { href: '/locations', label: 'Locations' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#999] hover:text-[#F7F2E4] transition-colors"
                    style={{ fontFamily: 'var(--font-oswald)', fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <p style={{ fontFamily: 'var(--font-oswald)', fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C41E3A', fontWeight: 600 }} className="mb-5">
              Locations
            </p>
            <div className="flex flex-col gap-[2px] mb-4">
              <div className="h-[2px] bg-[#333]" />
              <div className="h-px bg-[#333]" />
            </div>
            <div className="flex flex-col gap-5">
              {[
                { name: 'Downtown', address: '11 SE 1st Ave, Gainesville, FL', phone: '(352) 554-6109', tel: '3525546109' },
                { name: 'Tower Road', address: '209 NW 75th St, Gainesville, FL', phone: '(352) 451-4972', tel: '3524514972' },
                { name: 'Magnolia Parke', address: '4780 NW 39th Ave, Gainesville, FL', phone: '(352) 554-4662', tel: '3525544662' },
              ].map((loc) => (
                <div key={loc.name}>
                  <p style={{ fontFamily: 'var(--font-oswald)', fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#F7F2E4', fontWeight: 600 }}>{loc.name}</p>
                  <p style={{ fontSize: '12px', color: '#777' }}>{loc.address}</p>
                  <a href={`tel:${loc.tel}`} className="text-[#C41E3A] hover:text-[#E03050] transition-colors" style={{ fontSize: '12px' }}>{loc.phone}</a>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-5 border-t border-[#2a2a2a] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p style={{ fontSize: '11px', color: '#555', fontFamily: 'var(--font-oswald)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            &copy; {new Date().getFullYear()} The Paper Bag Deli. All rights reserved.
          </p>
          <p style={{ fontSize: '11px', color: '#555', fontFamily: 'var(--font-oswald)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Gainesville, FL — Est. 2022
          </p>
        </div>
      </div>
    </footer>
  )
}
