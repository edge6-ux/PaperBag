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

const orderLocations = [
  {
    name: 'Downtown',
    address: '11 SE 1st Ave',
    href: 'https://order.tbdine.com/pickup/48021/menu',
  },
  {
    name: 'Tower Road',
    address: '209 NW 75th St',
    href: 'https://order.tbdine.com/pickup/54888/menu',
  },
  {
    name: 'Magnolia Parke',
    address: '4780 NW 39th Ave',
    href: 'https://online.skytab.com/80c53ac65b4dd040393d5e9a4410400b/order-settings',
  },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [orderOpen, setOrderOpen] = useState(false)

  return (
    <>
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
            <button
              onClick={() => setOrderOpen(true)}
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-neutral-800 transition text-[12px]"
            >
              Order Online
            </button>
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
            <button
              onClick={() => { setOpen(false); setOrderOpen(true) }}
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-neutral-800 transition text-[13px] font-medium tracking-wide uppercase text-center"
            >
              Order Online
            </button>
          </div>
        )}
      </nav>

      {/* Order Online Modal */}
      {orderOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4"
          onClick={() => setOrderOpen(false)}
        >
          <div
            className="bg-[#f5eed8] rounded-xl p-8 w-full max-w-md shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold text-[#1a1a1a]">Choose Your Location</h2>
              <button
                onClick={() => setOrderOpen(false)}
                className="text-[#6b5a3e] hover:text-black transition text-lg leading-none"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <p className="text-sm text-[#6b5a3e] mb-6">Select a location to start your order.</p>

            {/* Location Cards */}
            <div className="flex flex-col gap-3">
              {orderLocations.map((loc) => (
                <a
                  key={loc.name}
                  href={loc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#c9b97a] rounded-xl px-5 py-4 hover:shadow-md transition cursor-pointer bg-white flex justify-between items-center"
                >
                  <div>
                    <p className="font-semibold text-[#1a1a1a]">{loc.name}</p>
                    <p className="text-sm text-[#6b5a3e]">{loc.address}</p>
                  </div>
                  <span className="text-[#6b5a3e] text-lg">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
