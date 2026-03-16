import Section from '@/components/Section'
import LocationCard from '@/components/LocationCard'

export default function LocationsPage() {
  return (
    <Section title="Our Locations" subtitle="Find a Paper Bag Deli near you.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <LocationCard
          name="Downtown"
          address="11 SE 1st Ave"
          city="Gainesville, FL 32601"
          phone="(352) 554-6109"
          image="/downtown.jpg"
          hours={[
            { days: 'Mon – Thu', time: '10am – 3pm' },
            { days: 'Friday', time: '10am – 8pm' },
            { days: 'Saturday', time: '10am – 3pm' },
            { days: 'Sunday', time: '10am – 2pm' },
          ]}
        />
        <LocationCard
          name="Tower Rd"
          address="209 NW 75th St"
          city="Gainesville, FL 32607"
          phone="(352) 451-4972"
          image="/tower.jpg"
          hours={[
            { days: 'Mon – Fri', time: '6am – 3pm' },
            { days: 'Saturday', time: '10am – 3pm' },
            { days: 'Sunday', time: 'Closed' },
          ]}
        />
        <LocationCard
          name="Magnolia Park"
          address="4780 NW 39th Ave"
          city="Gainesville, FL 32606"
          phone="(352) 554-4662"
          hours={[
            { days: 'Mon – Fri', time: '6am – 3pm' },
            { days: 'Saturday', time: '10am – 3pm' },
            { days: 'Sunday', time: 'Closed' },
          ]}
        />
      </div>
    </Section>
  )
}
