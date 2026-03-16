import Link from 'next/link'
import Section from '@/components/Section'
import CateringBlock from '@/components/CateringBlock'

export default function CateringPage() {
  return (
    <>
      <Section
        title="Catering"
        subtitle="We bring The Paper Bag Deli experience to your office, event, or gathering."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CateringBlock
            title="Office Lunch Packages"
            description="Boxed lunches for teams of all sizes. Each box includes a sandwich, a side, and a drink. Minimum order of 10. Pre-order by 9am for same-day delivery."
            linkLabel="Request a Quote"
            linkHref="/contact"
          />
          <CateringBlock
            title="Event Platters"
            description="Perfect for meetings, parties, and celebrations. Choose from sandwich trays, soup bars, and side spreads. Fully customizable for dietary restrictions."
            linkLabel="View Options"
            linkHref="/contact"
          />
          <CateringBlock
            title="Full-Service Catering"
            description="Let our team set up and serve at your event. We handle setup, service, and cleanup. Ideal for corporate events, weddings, and large gatherings of any kind."
            linkLabel="Get Started"
            linkHref="/contact"
          />
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-[#2C2C2C] mb-6">How It Works</h2>
          <ol className="flex flex-col gap-5">
            {[
              {
                step: '1',
                title: 'Reach Out',
                detail: 'Contact us via the form below with your event date, headcount, and any dietary needs.',
              },
              {
                step: '2',
                title: 'Get a Quote',
                detail: "We'll follow up within one business day with a custom quote and menu options.",
              },
              {
                step: '3',
                title: 'Confirm & Relax',
                detail: "Lock in your order at least 48 hours in advance and we'll handle the rest.",
              },
            ].map((item) => (
              <li key={item.step} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-[#6B9B6B] text-white text-sm font-bold rounded-full flex items-center justify-center">
                  {item.step}
                </span>
                <div>
                  <p className="font-semibold text-[#2C2C2C] mb-1">{item.title}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block bg-[#6B9B6B] text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors"
            >
              Contact Us to Order
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
