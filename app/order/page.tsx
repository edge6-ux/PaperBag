const locations = [
  {
    name: 'Downtown',
    address: '11 SE 1st Ave, Gainesville, FL 32601',
    href: 'https://order.tbdine.com/pickup/48021/menu',
  },
  {
    name: 'Tower Road',
    address: '209 NW 75th St, Gainesville, FL 32607',
    href: 'https://order.tbdine.com/pickup/54888/menu',
  },
  {
    name: 'Magnolia Parke',
    address: '4780 NW 39th Ave, Gainesville, FL 32606',
    href: 'https://online.skytab.com/80c53ac65b4dd040393d5e9a4410400b/order-settings',
  },
]

export default function OrderPage() {
  return (
    <div className="min-h-screen bg-[#F7F2E4] flex flex-col items-center px-6 py-20">

      {/* Double rule header */}
      <div className="w-full max-w-xl mb-8">
        <div className="flex flex-col gap-[3px] mb-4">
          <div className="h-[3px] bg-[#111]" />
          <div className="h-px bg-[#111]" />
        </div>
        <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: '40px', fontWeight: 900, color: '#111', lineHeight: 1, textAlign: 'center' }} className="mb-3">
          Choose Your Location
        </h1>
        <div className="flex flex-col gap-[3px] mt-4">
          <div className="h-px bg-[#111]" />
          <div className="h-[3px] bg-[#111]" />
        </div>
      </div>

      <p style={{ fontFamily: 'var(--font-oswald)', fontSize: '13px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#666' }} className="mb-12 text-center">
        Select a location to start your order.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl">
        {locations.map((loc) => (
          <a
            key={loc.name}
            href={loc.href}
            className="border-2 border-[#111] p-6 hover:bg-[#111] hover:text-[#F7F2E4] transition-all cursor-pointer bg-[#F7F2E4] group block"
          >
            <h2 style={{ fontFamily: 'var(--font-oswald)', fontSize: '16px', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, color: '#111', marginBottom: '6px' }}
              className="group-hover:text-[#F7F2E4]">
              {loc.name}
            </h2>
            <p style={{ fontSize: '13px', color: '#666' }} className="group-hover:text-[#999]">{loc.address}</p>
            <p style={{ fontFamily: 'var(--font-oswald)', fontSize: '12px', color: '#C41E3A', marginTop: '12px' }}>
              Order Now →
            </p>
          </a>
        ))}
      </div>
    </div>
  )
}
