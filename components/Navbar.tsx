'use client'

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/menu", label: "Menu" },
  { href: "/catering", label: "Catering" },
  { href: "/locations", label: "Locations" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full border-b border-[#c9b97a] bg-[#f5eed8]/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Brand name as home link */}
        <Link href="/" className="text-[13px] font-medium tracking-widest uppercase text-[#3a3128] hover:text-black transition-colors">
          The Paper Bag Deli
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-10 text-[13px] font-medium tracking-wide uppercase text-[#3a3128]">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-black transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-px bg-[#3a3128]"></div>
          <div className="w-6 h-px bg-[#3a3128]"></div>
          <div className="w-6 h-px bg-[#3a3128]"></div>
        </button>

      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden border-t border-[#c9b97a] bg-[#f5eed8] px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium tracking-wide uppercase text-[#3a3128] hover:text-black transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
