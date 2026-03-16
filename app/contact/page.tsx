'use client'

import { useState } from 'react'
import Section from '@/components/Section'

const locations = [
  {
    name: 'Downtown',
    address: '11 SE 1st Ave, Gainesville, FL 32601',
    phone: '(352) 554-6109',
    tel: '3525546109',
    hours: [
      { days: 'Mon – Thu', time: '10am – 3pm' },
      { days: 'Friday', time: '10am – 8pm' },
      { days: 'Saturday', time: '10am – 3pm' },
      { days: 'Sunday', time: '10am – 2pm' },
    ],
  },
  {
    name: 'Tower Road',
    address: '209 NW 75th St, Gainesville, FL 32607',
    phone: '(352) 451-4972',
    tel: '3524514972',
    hours: [
      { days: 'Mon – Fri', time: '6am – 3pm' },
      { days: 'Saturday', time: '10am – 3pm' },
      { days: 'Sunday', time: 'Closed' },
    ],
  },
  {
    name: 'Magnolia Parke',
    address: '4780 NW 39th Ave, Gainesville, FL 32606',
    phone: '(352) 554-4662',
    tel: '3525544662',
    hours: [
      { days: 'Mon – Fri', time: '6am – 3pm' },
      { days: 'Saturday', time: '10am – 3pm' },
      { days: 'Sunday', time: 'Closed' },
    ],
  },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Section
      title="Contact Us"
      subtitle="Questions, catering inquiries, or just want to say hello — we'd love to hear from you."
    >
      <div className="flex flex-col lg:flex-row gap-12 max-w-4xl">

        {/* Form */}
        <div className="flex-1">
          {submitted ? (
            <div className="bg-green-50 border border-green-100 rounded-lg p-6">
              <h3 className="font-semibold text-[#2C2C2C] mb-2">Message Received</h3>
              <p className="text-gray-500 text-sm">
                Thanks for reaching out. We&apos;ll get back to you within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#2C2C2C] mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm text-[#2C2C2C] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B9B6B] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#2C2C2C] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm text-[#2C2C2C] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B9B6B] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#2C2C2C] mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm text-[#2C2C2C] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B9B6B] focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                className="self-start bg-[#6B9B6B] text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Locations */}
        <div className="lg:w-72 flex flex-col gap-5 lg:pl-16">
          {locations.map((loc, i) => (
            <div
              key={loc.name}
              className={`${i > 0 ? 'border-t border-[#e8dfc4] pt-5' : ''}`}
            >
              <h3 className="text-[13px] font-semibold uppercase tracking-widest text-[#3a3128] mb-1">
                {loc.name}
              </h3>
              <p className="text-sm text-[#6b5a3e] mb-1">{loc.address}</p>
              <a
                href={`tel:${loc.tel}`}
                className="text-sm text-[#6B9B6B] hover:underline block mb-3"
              >
                {loc.phone}
              </a>
              <div className="flex flex-col gap-0.5">
                {loc.hours.map((h) => (
                  <div key={h.days} className="flex justify-between text-xs text-[#6b5a3e]">
                    <span>{h.days}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </Section>
  )
}
