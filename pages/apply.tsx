import NavBar from '../components/NavBar'
import Image from 'next/image'

export default function ApplyPage() {
  return (
    <div className="bg-[rgb(249,240,234)] min-h-screen">
      <NavBar />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="relative w-full h-64 mb-10 rounded overflow-hidden shadow-md">
          <Image
            src="/images/join.jpg"
            alt="Join Heart Fusion"
            layout="fill"
            objectFit="cover"
            className="rounded"
            priority
          />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-center">
          So, you're interested in joining Heart Fusion Camp?
        </h1>
        <p className="text-lg mb-6 text-center">
          We'd love to know a little more about you and tell you a little bit more about us!
        </p>
        <div className="flex justify-center">
          <a
            href="https://forms.gle/cpKTQiBve45ZuXi9A" 
            className="px-6 py-3 bg-black text-white rounded-lg text-lg transition duration-300 hover:bg-gray-800"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  )
}
