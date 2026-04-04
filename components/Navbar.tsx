'use client'

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/menu", label: "Menu" },
  { href: "/catering", label: "Catering" },
  { href: "/locations", label: "Locations" },
  { href: "/gallery", label: "Gallery" },
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
      {/* Top ticker tape */}
      <div className="bg-[#C41E3A] overflow-hidden h-7 flex items-center">
        <div className="flex ticker-track">
          {[...Array(2)].map((_, rep) => (
            <span key={rep} className="flex items-center gap-8 px-4" style={{ fontFamily: 'var(--font-oswald)', fontSize: '11px', letterSpacing: '0.15em', color: '#F7F2E4', textTransform: 'uppercase', fontWeight: 600 }}>
              {['Fresh Cuts Daily', 'Gainesville FL', 'Est. 2022', 'Three Locations', 'Made From Scratch', 'Order Online Now', 'Fresh Cuts Daily', 'Gainesville FL', 'Est. 2022', 'Three Locations', 'Made From Scratch', 'Order Online Now'].map((item, i) => (
                <span key={i} className="flex items-center gap-8">
                  <span>{item}</span>
                  <span style={{ color: '#fff', opacity: 0.4 }}>✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <nav className="w-full border-b-2 border-[#111111] bg-[#111111] sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">

          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 text-[#F7F2E4] hover:text-[#C41E3A] transition-colors" style={{ fontFamily: 'var(--font-oswald)', fontSize: '15px', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600 }}>
            <svg width="15" height="19" viewBox="0 0 15 19" fill="currentColor" fillRule="evenodd" aria-hidden="true">
              <path d="M1 2 Q1 1 2 1 L13 1 Q14 1 14 2 L14 17 Q14 18 13 18 L2 18 Q1 18 1 17 Z M7 5.5 A2 2 0 1 0 3 5.5 A2 2 0 1 0 7 5.5 Z M12.5 9 A1.8 1.8 0 1 0 8.9 9 A1.8 1.8 0 1 0 12.5 9 Z M6 13.5 A1.4 1.4 0 1 0 3.2 13.5 A1.4 1.4 0 1 0 6 13.5 Z"/>
            </svg>
            The Paper Bag Deli
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-7" style={{ fontFamily: 'var(--font-oswald)', fontSize: '13px', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 500 }}>
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-[#D4CCBC] hover:text-[#F7F2E4] transition-colors hover:underline underline-offset-4 decoration-[#C41E3A] decoration-2">
                {link.label}
              </a>
            ))}
            <button
              onClick={() => setOrderOpen(true)}
              className="bg-[#C41E3A] text-[#F7F2E4] px-5 py-2 hover:bg-[#A01830] transition-all duration-200 text-[12px] tracking-widest uppercase font-bold"
              style={{ fontFamily: 'var(--font-oswald)' }}
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
            <div className="w-6 h-[2px] bg-[#F7F2E4]"></div>
            <div className="w-6 h-[2px] bg-[#F7F2E4]"></div>
            <div className="w-6 h-[2px] bg-[#F7F2E4]"></div>
          </button>

        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="md:hidden border-t border-[#333] bg-[#1a1a1a] px-6 py-5 flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#D4CCBC] hover:text-[#F7F2E4] transition-colors"
                style={{ fontFamily: 'var(--font-oswald)', fontSize: '14px', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 500 }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => { setOpen(false); setOrderOpen(true) }}
              className="bg-[#C41E3A] text-[#F7F2E4] px-4 py-3 hover:bg-[#A01830] transition text-center font-bold tracking-widest uppercase"
              style={{ fontFamily: 'var(--font-oswald)', fontSize: '13px' }}
            >
              Order Online
            </button>
          </div>
        )}
      </nav>

      {/* Order Online Modal */}
      {orderOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4"
          onClick={() => setOrderOpen(false)}
        >
          <div
            className="bg-[#F7F2E4] p-8 w-full max-w-md shadow-2xl border-4 border-[#111]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="border-b-2 border-[#111] pb-3 mb-5 flex items-center justify-between">
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '22px', fontWeight: 800, color: '#111' }}>
                Choose Your Location
              </h2>
              <button
                onClick={() => setOrderOpen(false)}
                className="text-[#111] hover:text-[#C41E3A] transition text-xl leading-none font-bold"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <p className="text-sm text-[#444] mb-5" style={{ fontFamily: 'var(--font-oswald)', letterSpacing: '0.05em' }}>
              Select a location to start your order.
            </p>

            {/* Location Cards */}
            <div className="flex flex-col gap-3">
              {orderLocations.map((loc) => (
                <a
                  key={loc.name}
                  href={loc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-[#111] px-5 py-4 hover:bg-[#111] hover:text-[#F7F2E4] transition-all cursor-pointer flex justify-between items-center group"
                >
                  <div>
                    <p className="font-bold text-[#111] group-hover:text-[#F7F2E4]" style={{ fontFamily: 'var(--font-oswald)', fontSize: '15px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{loc.name}</p>
                    <p className="text-sm text-[#555] group-hover:text-[#aaa]">{loc.address}</p>
                  </div>
                  <span className="text-[#C41E3A] group-hover:text-[#C41E3A] text-lg font-bold">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
