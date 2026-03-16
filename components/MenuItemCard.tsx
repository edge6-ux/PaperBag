interface MenuItemCardProps {
  name: string
  description: string
  price: string
}

export default function MenuItemCard({ name, description, price }: MenuItemCardProps) {
  return (
    <div className="py-4 border-b border-[#e8dfc4] last:border-0">
      <div className="flex items-start justify-between mb-1">
        <h3 className="font-semibold text-[#1a1a1a] text-sm">{name}</h3>
        <span className="text-[#6B9B6B] font-medium text-sm ml-4 whitespace-nowrap">{price}</span>
      </div>
      <p className="text-[#6b5a3e] text-sm leading-relaxed">{description}</p>
    </div>
  )
}
