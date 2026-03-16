interface MenuItemCardProps {
  name: string
  description: string
  price: string
}

export default function MenuItemCard({ name, description, price }: MenuItemCardProps) {
  return (
    <div className="py-4 border-b border-gray-100 last:border-0">
      <div className="flex items-start justify-between mb-1">
        <h3 className="font-semibold text-[#2C2C2C] text-sm">{name}</h3>
        <span className="text-[#6B9B6B] font-medium text-sm ml-4 whitespace-nowrap">{price}</span>
      </div>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
