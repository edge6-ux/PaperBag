'use client'

import { useState } from 'react'
import Section from '@/components/Section'

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
      <div className="max-w-xl">
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
    </Section>
  )
}
