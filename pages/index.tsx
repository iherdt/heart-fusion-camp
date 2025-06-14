'use client'

import { useState } from 'react'
import NavBar from '../components/NavBar'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://formspree.io/f/manjorrj', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: new FormData(e.target as HTMLFormElement)
      })

      if (res.ok) {
        setFormData({ name: '', email: '', message: '' })
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="bg-[rgb(249,240,234)] min-h-screen scroll-smooth">
      <NavBar />

      {/* Hero Section */}
      <div className="relative w-full h-[30vh]">
        <Image
          src="/images/hero.jpg"
          alt="Heart Fusion Polaroids"
          layout="fill"
          objectFit="cover"
          objectPosition="center 23%"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Welcome to Heart Fusion Camp )'(
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-xl mb-6 drop-shadow-md">
            A splash of art, a heartful moment of dancing, and a warm family vibe;
            <br className="hidden sm:block" />
            Heart Fusion is where creativity and connection pulse through every glowing thread.
          </p>
          <Link
            href="/about"
            className="bg-[#f9cfc7] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#fbbdb2] transition"
          >
            LEARN MORE
          </Link>
        </div>
      </div>

      {/* About Section Preview */}
      <section className="max-w-6xl mx-auto py-16 px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-64 md:h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/trio.jpg"
              alt="Burner plane selfie"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-pink-700 mb-4">
            Welcome to Heart Fusion!
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Heart Fusion invites you to step through its pulsating hearts into an LED-lit Heart Glow Labyrinth
            of reflection, mindfulness, and wonder. Share a relaxing beverage and unwind in the heart chill cubes.
            Then continue into an immersive experience of throbbing lights, where everyone adds a light to the
            cuddle puddle dome. Lay down, take in the light installation, and enjoy the cuddles. The Labyrinth
            stays lit and the dome open for chill vibes and late-night heart talks all week. Come find your glow!
          </p>
          <div className="mt-6">
            <Link
              href="/apply"
              className="inline-block bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-[rgb(249,240,234)] pb-40">
        <div className="bg-white max-w-xl mx-auto mt-16 p-8 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-center">Connect with Us</h2>
          <p className="text-center text-gray-700 mb-6">
            Want to know more? Have any questions? Get in touch using the form below, or if you're ready to jump straight in, just{' '}
            <Link href="/apply" className="text-pink-600 underline">apply here</Link>!
          </p>

          {status === 'success' && (
            <p className="text-[#ff4d4d] font-semibold text-center mb-4">
              Thanks for reaching out! We'll be in touch soon.
            </p>
          )}
          {status === 'error' && (
            <p className="text-[#ff4d4d] font-semibold text-center mb-4">
              Oops, something went wrong. Please try again.
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-black"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-black"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-black text-white py-2 rounded-md text-lg hover:bg-gray-800 transition disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : 'SEND'}
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
