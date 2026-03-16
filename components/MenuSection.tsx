import MenuItemCard from './MenuItemCard'

interface MenuItem {
  name: string
  description: string
  price: string
}

interface MenuSectionProps {
  category: string
  items: MenuItem[]
}

export default function MenuSection({ category, items }: MenuSectionProps) {
  return (
    <div className="mb-14">
      <h3 className="text-xl font-bold text-[#2C2C2C] mb-6 pb-3 border-b border-[#c9b97a]/40">
        {category}
      </h3>
      <div className="flex flex-col">
        {items.map((item) => (
          <MenuItemCard key={item.name} {...item} />
        ))}
      </div>
    </div>
  )
}
