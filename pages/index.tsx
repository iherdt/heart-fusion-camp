
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <header className="w-full relative">
        <div className="relative w-full h-[60vh] overflow-hidden">
          <Image
            src="/images/group.jpg"
            alt="Heart Fusion Camp group"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
            priority
          />
        </div>
        <div className="absolute top-0 left-0 h-[60vh] w-full bg-black bg-opacity-40 z-10 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">Welcome to Heart Fusion Camp )'(</h1>
          <p className="mt-4 max-w-2xl text-white text-lg md:text-xl drop-shadow-md">
            A splash of art, a heartful moment of dancing, and a warm family vibe;
            Heart Fusion is where creativity and connection pulse through every glowing thread.
          </p>
          <button className="mt-6 bg-primary text-white px-6 py-2 rounded-full hover:bg-pink-600">LEARN MORE</button>
        </div>
      </header>

      <section className="grid md:grid-cols-2 gap-8 p-12 bg-secondary">
        <div>
          <Image src="/images/airplane.jpg" alt="Airplane on playa" width={800} height={600} className="rounded-lg shadow-lg" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-4 text-pink-700">Welcome to Heart Fusion!</h2>
          <p className="text-lg leading-relaxed">
            Heart Fusion invites you to step through its pulsating hearts into an LED-lit Heart Glow Labyrinth of reflection, mindfulness, and wonder.
            Share a relaxing beverage and unwind in the heart chill cubes. Then continue into an immersive experience of throbbing lights, where everyone adds a light to the cuddle puddle dome.
            Lay down, take in the light installation, and enjoy the cuddles. The Labyrinth stays lit and the dome open for chill vibes and late-night heart talks all week. Come find your glow!
          </p>
          <button className="mt-6 bg-primary text-white px-6 py-2 rounded-full hover:bg-pink-600">LEARN MORE</button>
        </div>
      </section>

      <section className="bg-primary py-12 px-6">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">Connect with Us</h2>
        <p className="text-center text-white mb-8">
          Want to know more? Have any questions? Get in touch using the form below,
          or if you're ready to jump straight in, just <a href="#" className="underline">apply here</a>!
        </p>
        <form className="max-w-xl mx-auto space-y-4" onSubmit={(e) => { e.preventDefault(); console.log('Submitted:', form); }}>
          <div className="flex gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-1/2 p-3 rounded border border-gray-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-1/2 p-3 rounded border border-gray-300"
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-3 h-32 rounded border border-gray-300"
          ></textarea>
          <button
            type="submit"
            className="bg-white border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white px-6 py-2 rounded-full"
          >
            SEND
          </button>
        </form>
      </section>
    </main>
  );
}
