import Link from 'next/link'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import LocationCard from '@/components/LocationCard'

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section title="Visit Us" subtitle="We have three convenient locations across Portland.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <LocationCard
            name="Downtown Portland"
            address="124 Market Street"
            city="Portland, OR 97201"
            phone="(503) 555-0101"
            hours={[
              { days: 'Mon – Fri', time: '7am – 4pm' },
              { days: 'Saturday', time: '8am – 3pm' },
              { days: 'Sunday', time: 'Closed' },
            ]}
          />
          <LocationCard
            name="Eastside"
            address="87 Burnside Ave"
            city="Portland, OR 97214"
            phone="(503) 555-0188"
            hours={[
              { days: 'Mon – Fri', time: '7am – 4pm' },
              { days: 'Saturday', time: '8am – 3pm' },
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

      <Section className="bg-gray-50">
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
    </>
  )
}
