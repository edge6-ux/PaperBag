import Link from 'next/link'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import LocationCard from '@/components/LocationCard'

export default function HomePage() {
  return (
    <div className="bg-honeycomb">
      <Hero />

      <Section title="Visit Us" subtitle="We have two convenient locations across Gainesville." className="!pt-8 sm:!pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/locations"
            className="inline-block text-sm text-[#6B9B6B] font-medium hover:underline"
          >
            View All Locations →
          </Link>
        </div>
      </Section>

      <Section className="bg-pattern-dots">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#2C2C2C] mb-4">Feeding a Crowd?</h2>
          <p className="text-gray-500 text-base leading-relaxed mb-6">
            We offer catering for offices, events, and gatherings of all sizes. Boxed lunches, sandwich trays, and full-service options available.
          </p>
          <Link
            href="/catering"
            className="inline-block bg-[#6B9B6B] text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors"
          >
            Explore Catering
          </Link>
        </div>
      </Section>
    </div>
  )
}
