import Section from '@/components/Section'
import LocationCard from '@/components/LocationCard'

const locations = [
  {
    name: 'Downtown Portland',
    address: '124 Market Street',
    city: 'Portland, OR 97201',
    phone: '(503) 555-0101',
    hours: [
      { days: 'Mon – Fri', time: '7am – 4pm' },
      { days: 'Saturday', time: '8am – 3pm' },
      { days: 'Sunday', time: 'Closed' },
    ],
  },
  {
    name: 'Eastside',
    address: '87 Burnside Ave',
    city: 'Portland, OR 97214',
    phone: '(503) 555-0188',
    hours: [
      { days: 'Mon – Fri', time: '7am – 4pm' },
      { days: 'Saturday', time: '8am – 3pm' },
      { days: 'Sunday', time: 'Closed' },
    ],
  },
  {
    name: 'Pearl District',
    address: '310 NW 11th Ave',
    city: 'Portland, OR 97209',
    phone: '(503) 555-0222',
    hours: [
      { days: 'Mon – Fri', time: '7am – 5pm' },
      { days: 'Saturday', time: '8am – 4pm' },
      { days: 'Sunday', time: '9am – 2pm' },
    ],
  },
]

export default function LocationsPage() {
  return (
    <Section title="Our Locations" subtitle="Find a Paper Bag Deli near you.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((loc) => (
          <LocationCard key={loc.name} {...loc} />
        ))}
      </div>
    </Section>
  )
}
