import Image from 'next/image'
import { Dancing_Script } from 'next/font/google'
import Section from '@/components/Section'
import MenuSection from '@/components/MenuSection'

const cursive = Dancing_Script({ subsets: ['latin'], weight: '600' })

const breakfast = [
  {
    name: '#1 French Toastwich',
    description: 'Savory eggs, sausage patty, and cheddar pressed between sweet brown sugar French toast. Served with syrup.',
    price: '$7.95',
  },
  {
    name: '#2 Momma Mia',
    description: 'Scrambled eggs, turkey, pesto aioli, roasted veggies, and feta in a tortilla wrap.',
    price: '$7.95',
  },
  {
    name: '#3 J Rock Delight',
    description: 'Eggs, bacon, smoked turkey, cheddar, and chipotle sauce pressed on sourdough.',
    price: '$7.95',
  },
  {
    name: '#4 Love it From My Head To-ma-Toes',
    description: 'Roasted tomatoes, peppers, onions, Swiss, and scrambled eggs on a buttery croissant.',
    price: '$7.95',
  },
  {
    name: '#5 E Money Greek Yogurt Bowl',
    description: 'Vanilla yogurt topped with fresh fruit and chunked granola bar.',
    price: '$7.95',
  },
  {
    name: '#6 S.P.K.',
    description: 'Salt, pepper, ketchup, eggs, Taylor ham, and American cheese on toasted bread.',
    price: '$7.95',
  },
]

const lunch = [
  {
    name: '#7 T.M.N.T. Heroes in a Half Shell',
    description: 'Pastrami turkey, pepperoni, green ooze sauce, provolone, tomatoes, and bourbon pickles on a pretzel bun.',
    price: 'Reg $11.95 / Godfather $13.95',
  },
  {
    name: '#8 Jean-Claude Vane Damnnnnnn',
    description: 'Spicy chicken breast, bacon, avocado spread, chipotle, and Havarti in a tortilla wrap.',
    price: 'Reg $11.95 / Godfather $13.95',
  },
  {
    name: '#9 Tony Montana Cubano',
    description: 'Roasted pork, ham, salami, Swiss, pickles, mayo, and mustard on toasted Cuban bread.',
    price: 'Reg $11.95 / Godfather $13.95',
  },
  {
    name: '#10 EvDaBev Crossover',
    description: 'Roast beef, peppers, onions, American and provolone on an Italian hoagie with au jus.',
    price: 'Reg $12.95 / Godfather $14.95',
  },
  {
    name: '#11 Tre Way Jay',
    description: 'Burnt pork ends, maple honey ham, bacon, bourbon glaze, American cheese, and pickled onions on an Italian hoagie.',
    price: 'Reg $11.95 / Godfather $13.95',
  },
  {
    name: '#12 Uncle Drew Monte Cristo',
    description: 'Ham, turkey, cheddar, mustard, and mayo pressed between French toast.',
    price: 'Reg $11.95 / Godfather $13.95',
  },
  {
    name: '#13 The Soprano',
    description: 'Salami, pepperoni, sopressata, capicola, provolone, banana peppers, tomatoes, and red wine vinaigrette on ciabatta.',
    price: 'Reg $11.95 / Godfather $13.95',
  },
  {
    name: "#14 Hey Antonio!!! It's Meatball!!!",
    description: 'Meatballs, pepperoni, provolone, and marinara on a toasted hoagie.',
    price: 'Reg $11.95 / Godfather $13.95',
  },
  {
    name: '#15 The Man in the Black Hat',
    description: 'Half turkey, Swiss, peppers & onions — half brisket, banana peppers & Havarti — frosted with provolone and served with au jus.',
    price: 'Reg $12.95 / Godfather $14.95',
  },
  {
    name: '#16 The Vegas',
    description: "Chef's choice mystery sandwich. You never know what you're gonna get.",
    price: 'Reg $12.95 / Godfather $14.25',
  },
  {
    name: '#27 Brooklyn Bombers',
    description: 'Pastrami, coleslaw, Russian island dressing, mustard, and Swiss on marble rye.',
    price: 'Reg $12.95 / Godfather $14.95',
  },
]

const salads = [
  {
    name: '#17 Only 1 Way Up From Guac-Bottom',
    description: 'Romaine, guacamole, tomatoes, corn salsa, banana peppers, crispy onions, mango salsa, and chipotle ranch.',
    price: 'Reg $11.25 / Add Chicken $13.25',
  },
  {
    name: '#18 Field of Fruit Dreams',
    description: 'Lettuce, blueberries, strawberries, dried cranberries, feta, and apple cider vinaigrette.',
    price: 'Reg $11.25 / Add Chicken $13.25',
  },
  {
    name: '#19 Hollywood Brown Derby',
    description: 'Romaine, bacon, egg, avocado, cheddar, tomatoes, croutons, balsamic and red wine vinaigrette.',
    price: 'Reg $11.25 / Add Chicken $13.25',
  },
  {
    name: '#20 The Ritz Carlton',
    description: 'Lettuce, turkey, ham, cheddar, tomatoes, croutons, egg, and ranch.',
    price: 'Reg $11.25 / Add Chicken $13.25',
  },
]

const healthyHits = [
  {
    name: "#21 J'amaican Me Crazy Michelle",
    description: 'Jerk chicken, mango, corn & black bean salsa, avocado, cheddar, and banana peppers pressed on ciabatta.',
    price: '$11.95',
  },
  {
    name: '#22 Richard Slim-mons',
    description: 'Turkey, honey mustard, roasted peppers, onions, tomatoes, mozzarella, and balsamic in a tortilla wrap.',
    price: '$11.95',
  },
  {
    name: '#23 Puff the Magic Dragon Toast',
    description: 'Tomato, avocado, scrambled eggs, and pesto on toasted sourdough.',
    price: '$11.95',
  },
  {
    name: '#24 The Blue Lagoon Melt',
    description: 'Tuna salad, mayo, and Havarti on a croissant.',
    price: '$11.95',
  },
  {
    name: '#25 Island of Capri',
    description: 'Fresh mozzarella, tomato, pesto, and balsamic drizzle on ciabatta.',
    price: '$11.95',
  },
]

export default function MenuPage() {
  return (
    <>
      {/* Cursive tagline */}
      <div className="max-w-6xl mx-auto px-6 pt-14 pb-4 text-center">
        <p className={`${cursive.className} text-4xl text-[#1a1a1a]`}>
          Serving quality sandwiches, wine, and beer
        </p>
      </div>

      {/* Three-image grid */}
      <div className="max-w-6xl mx-auto px-6 pt-4 pb-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="relative w-full rounded-md overflow-hidden ring-1 ring-neutral-200" style={{ height: '380px' }}>
          <Image src="/main.jpg" alt="The Paper Bag Deli" fill className="object-cover object-center" priority />
        </div>
        <div className="relative w-full rounded-md overflow-hidden ring-1 ring-neutral-200" style={{ height: '380px' }}>
          <Image src="/sammo2.jpg" alt="Menu highlight" fill className="object-cover object-center" />
        </div>
        <div className="relative w-full rounded-md overflow-hidden ring-1 ring-neutral-200" style={{ height: '380px' }}>
          <Image src="/sammo3.jpg" alt="Menu highlight" fill className="object-cover object-center" />
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-neutral-200" />
      </div>

      <Section title="Take Out Menu" subtitle="Made fresh daily with Boar's Head meats and Gainesville flavor.">
        <MenuSection category="Breakfast" items={breakfast} />
        <MenuSection category="Lunch" items={lunch} />
        <MenuSection category="Salads" items={salads} />
        <MenuSection category="Healthy Hits" items={healthyHits} />
      </Section>
    </>
  )
}
