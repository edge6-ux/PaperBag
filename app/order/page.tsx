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
    <div className="min-h-screen bg-[#f5eed8] flex flex-col items-center px-6 py-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-3 text-center">
        Choose Your Location
      </h1>
      <p className="text-[#6b5a3e] text-sm mb-12 text-center">
        Select a location to start your order.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl">
        {locations.map((loc) => (
          <a
            key={loc.name}
            href={loc.href}
            className="border border-[#c9b97a] rounded-xl p-6 hover:shadow-md transition cursor-pointer bg-white block"
          >
            <h2 className="text-lg font-bold text-[#1a1a1a] mb-1">{loc.name}</h2>
            <p className="text-sm text-[#6b5a3e]">{loc.address}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
