import NavBar from '../components/NavBar'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="bg-[rgb(249,240,234)] min-h-screen">
      <NavBar />
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="relative w-full h-64 mb-10 rounded overflow-hidden shadow-md">
                  <Image
                    src="/images/creativity.jpg"
                    alt="About Heart Fusion"
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                    priority
                  />
                </div>
        <h1 className="text-4xl font-bold mb-6">About Heart Fusion Camp</h1>
        <p className="mb-4 text-lg">
        Heart Fusion is a new camp inspired by the beauty of human connection, 
        radical self-expression, and collective resilience. We're a small, 
        independent crew building something magical from the ground up — 
        without the overhead of large infrastructure, 
        just the raw essentials and a spirit of collaboration.
        </p>
        <p className="mb-4 text-lg">
        Our vision is simple: create an oasis where creativity, 
        laughter, art, and soul meet — with music, food, 
        and deep conversation under the desert sky.
        </p>
      </div>
    </div>
  )
}
