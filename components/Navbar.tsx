import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-[#c9b97a] bg-[#f5eed8]/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Brand name as home link */}
        <Link href="/" className="text-[13px] font-medium tracking-widest uppercase text-[#3a3128] hover:text-black transition-colors">
          The Paper Bag Deli
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-10 text-[13px] font-medium tracking-wide uppercase text-[#3a3128]">
          <a href="/menu" className="hover:text-black transition-colors">Menu</a>
          <a href="/catering" className="hover:text-black transition-colors">Catering</a>
          <a href="/locations" className="hover:text-black transition-colors">Locations</a>
          <a href="/about" className="hover:text-black transition-colors">About</a>
          <a href="/contact" className="hover:text-black transition-colors">Contact</a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex flex-col gap-[5px] cursor-pointer">
          <div className="w-6 h-px bg-[#3a3128]"></div>
          <div className="w-6 h-px bg-[#3a3128]"></div>
          <div className="w-6 h-px bg-[#3a3128]"></div>
        </div>

      </div>
    </nav>
  );
}
