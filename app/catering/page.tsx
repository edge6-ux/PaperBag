import Image from 'next/image'
import { Dancing_Script } from 'next/font/google'
import Section from '@/components/Section'
import MenuSection from '@/components/MenuSection'

const cursive = Dancing_Script({ subsets: ['latin'], weight: '600' })

const boardRoomBoxLunches = [
  {
    name: 'Oven Roasted Turkey & Pesto',
    description: 'Oven roasted turkey breast layered with Swiss, basil pesto ranch, tomato, and mixed field greens on ciabatta.',
    price: '$13.95',
  },
  {
    name: 'Honey Maple Ham & Aged Cheddar',
    description: 'Honey maple ham with sharp cheddar, stone ground mustard, chipotle mayo, and mixed greens on a pretzel bun.',
    price: '$13.95',
  },
  {
    name: 'The Italian Soprano',
    description: 'Salami, pepperoni, mortadella, capicola, provolone, pepperoncini, tomato, Italian seasoning, and red wine vinaigrette on an Italian hoagie.',
    price: '$13.95',
  },
  {
    name: 'Tuna Salad on Croissant',
    description: 'Fresh albacore tuna with homemade mayo, tomato, lettuce, and Havarti on a French croissant.',
    price: '$13.95',
  },
  {
    name: 'Harvest Chicken Salad on Ciabatta',
    description: 'Chicken breast with cranberries, dill mayo, honey mustard, tomato, lettuce, and Baby Swiss on ciabatta.',
    price: '$13.95',
  },
  {
    name: 'Brooklyn Bombers Reuben',
    description: 'Pastrami, signature slaw, Russian island dressing, mustard, and aged Swiss on marble rye.',
    price: '$13.95',
  },
  {
    name: 'Island of Caprese',
    description: 'Thick tomato slices, fresh mozzarella, basil pesto, lettuce, and balsamic drizzle on ciabatta.',
    price: '$13.95',
  },
]

const platters = [
  {
    name: 'Antipasto Selection Platter',
    description: 'Prosciutto, sweet coppa, spicy pepperoni, smoked salami, mozzarella, gorgonzola, marinated vegetables, olives, hummus, roasted peppers, and artisan crackers.',
    price: 'Serves 15–20 / $79.99 • Serves 20–25 / $99.99',
  },
  {
    name: 'Seasonal Fruit Delight',
    description: 'Fresh seasonal fruit with berry crème fraîche.',
    price: 'Serves 10–15 / $59.99 • Serves 20–30 / $79.99',
  },
  {
    name: 'Fresh Vegetable Crudités',
    description: 'Peppers, cucumber, broccoli, carrots, celery, zucchini, and tomatoes served with your choice of dip.',
    price: 'Serves 10–15 / $49.99 • Serves 15–20 / $69.99',
  },
  {
    name: 'Kickass Cookie Tray',
    description: 'A curated selection of artisan cookies.',
    price: 'Serves 10–15 / $49.99 • Serves 15–20 / $69.99',
  },
  {
    name: 'Assorted Bagged Kettle Chips',
    description: 'An assortment of kettle chip flavors, individually bagged.',
    price: 'Serves 10–15 / $35.99 • Serves 15–20 / $49.99',
  },
]

const buildYourOwn = [
  {
    name: 'Build Your Own Sandwich Platter',
    description: 'Rare roast beef, smoked ham, hard salami, oven roasted turkey, pepperoni, and pastrami turkey served with assorted cheeses, breads, fresh veggies, and signature sauces.',
    price: 'Serves 10–15 / $119.99 • Serves 15–20 / $149.99',
  },
]

const classicDeli = [
  {
    name: 'Classic Deli Sandwich Platter',
    description: 'Large deli sandwiches with roast beef, ham, turkey, or pastrami turkey on assorted breads with cheeses, fresh veggies, and sauces.',
    price: 'Serves up to 10 / $89.99 • Serves up to 15 / $129.99',
  },
]

const chefSalad = [
  {
    name: 'Chef Sized Salad Platter',
    description: 'Romaine, chef-selected vegetables, shaved cheese, tomatoes, croutons, and choice of dressings.',
    price: '30 each / $60.99 • 45 each / $90.99 • 60 each / $120.99',
  },
]

const gourmetMini = [
  {
    name: 'Gourmet Mini Selection',
    description: 'Bite-sized sandwiches featuring roast beef, ham, turkey, pastrami turkey, salami, and pepperoni with assorted cheeses and lettuce on brioche minis.',
    price: '24 minis / $95.99 • 48 minis / $185.99',
  },
]

const partySandwiches = [
  {
    name: 'Party Sandwiches',
    description: 'Roast beef, turkey, pastrami turkey, salami, and ham with cheddar, American, provolone, or Swiss on Cuban bread. Dressed with lettuce, tomato, bourbon onion, pickles, banana peppers, mayo, and mustard.',
    price: 'Serves 8–10 / $75.99 • 12–15 / $115.99 • 16–20 / $160.99',
  },
]

const individualSalads = [
  {
    name: 'Fruit Harvest Salad',
    description: 'Spring mix, strawberries, blueberries, cranberries, feta, and apple cider vinaigrette.',
    price: '$13.95',
  },
  {
    name: 'Chicken Caesar Salad',
    description: 'Chicken breast, romaine, Caesar dressing, tomatoes, shaved onion, parmesan, and croutons.',
    price: '$13.95',
  },
  {
    name: 'Avocado Chicken Cobb',
    description: 'Chicken breast, bacon, egg, avocado, cheddar, tomatoes, honey balsamic, and red wine vinaigrette.',
    price: '$13.95',
  },
  {
    name: 'Chef Salad',
    description: 'Lettuce, turkey, ham, Swiss, tomatoes, croutons, egg, and buttermilk ranch.',
    price: '$13.95',
  },
]

const boardroomBoxedLunches = [
  {
    name: 'Turkey Reuben',
    description: 'Pastrami-seasoned turkey, Swiss, slaw, and 1000 island dressing on rye.',
    price: '$13.95',
  },
  {
    name: 'Chicken Bacon Avocado Wrap',
    description: 'Chicken breast, bacon, avocado spread, ranch, and Havarti in a tortilla wrap.',
    price: '$13.95',
  },
  {
    name: 'Smoked Chipotle Chicken Feta Wrap',
    description: 'Chicken breast, chipotle aioli, feta, roasted peppers, and spring mix in a tortilla wrap.',
    price: '$13.95',
  },
  {
    name: 'Sourdough Club BLT',
    description: 'Turkey, ham, bacon, tomato, lettuce, cheddar, and garlic mayo on sourdough.',
    price: '$13.95',
  },
  {
    name: 'Prime Steak & Havarti',
    description: 'Shaved prime beef, caramelized onions, peppers, banana peppers, Havarti, chipotle, and greens on ciabatta.',
    price: '$13.95',
  },
]

const cookiesAndChips = [
  {
    name: 'Kickass Cookie Tray',
    description: 'A curated selection of artisan cookies.',
    price: 'Serves 10–15 / $49.99 • Serves 15–20 / $69.99',
  },
  {
    name: 'Assorted Bagged Kettle Chips',
    description: 'An assortment of kettle chip flavors, individually bagged.',
    price: 'Serves 10–15 / $35.99 • Serves 15–20 / $49.99',
  },
]

export default function CateringPage() {
  return (
    <>
      {/* Cursive tagline */}
      <div className="max-w-6xl mx-auto px-6 pt-14 pb-4 text-center">
        <p className={`${cursive.className} text-4xl text-[#1a1a1a]`}>
          Catering for Every Occasion
        </p>
      </div>

      {/* Three-image grid — stacks on mobile, 3 columns on desktop */}
      <div className="hidden sm:grid max-w-6xl mx-auto px-6 pt-4 pb-10 grid-cols-3 gap-4">
        <div className="relative w-full rounded-md overflow-hidden ring-1 ring-neutral-200" style={{ height: '380px' }}>
          <Image src="/platter1.jpg" alt="Catering platter" fill className="object-cover object-center" priority />
        </div>
        <div className="relative w-full rounded-md overflow-hidden ring-1 ring-neutral-200" style={{ height: '380px' }}>
          <Image src="/platter2.jpg" alt="Catering spread" fill className="object-cover object-center" />
        </div>
        <div className="relative w-full rounded-md overflow-hidden ring-1 ring-neutral-200" style={{ height: '380px' }}>
          <Image src="/platter3.jpg" alt="Catering selection" fill className="object-cover object-center" />
        </div>
      </div>

      {/* Divider — hidden on mobile */}
      <div className="hidden sm:block max-w-6xl mx-auto px-6">
        <div className="border-t border-neutral-200" />
      </div>

      <Section title="Catering Menu" subtitle="Fresh, handcrafted, and ready to impress — made with Boar's Head meats and Gainesville flavor.">
        <MenuSection category="Board Room Box Lunches" items={boardRoomBoxLunches} />
        <MenuSection category="Platters" items={platters} />
        <MenuSection category="Build Your Own Sandwich Platter" items={buildYourOwn} />
        <MenuSection category="Classic Deli Sandwich Platter" items={classicDeli} />
        <MenuSection category="Chef Sized Salad Platter" items={chefSalad} />
        <MenuSection category="Gourmet Mini Selection" items={gourmetMini} />
        <MenuSection category="Party Sandwiches" items={partySandwiches} />
        <MenuSection category="Individual Salad Boxed Lunches" items={individualSalads} />
        <MenuSection category="Boardroom Boxed Lunches" items={boardroomBoxedLunches} />
        <MenuSection category="Cookies & Chips" items={cookiesAndChips} />
      </Section>
    </>
  )
}
