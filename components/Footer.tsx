import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-[#2C2C2C] mb-3">The Paper Bag Deli</h3>
            <p className="text-sm text-gray-500">Fresh, simple, and made with care.</p>
          </div>

          <div>
            <h4 className="font-semibold text-[#2C2C2C] mb-3">Explore</h4>
            <ul className="flex flex-col gap-2">
              {[
                { href: '/menu', label: 'Menu' },
                { href: '/catering', label: 'Catering' },
                { href: '/locations', label: 'Locations' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-[#6B9B6B] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#2C2C2C] mb-3">Hours</h4>
            <p className="text-sm text-gray-500">Mon – Fri: 7am – 4pm</p>
            <p className="text-sm text-gray-500">Saturday: 8am – 3pm</p>
            <p className="text-sm text-gray-500">Sunday: Closed</p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} The Paper Bag Deli. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
