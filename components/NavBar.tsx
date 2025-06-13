import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="bg-[rgb(249,240,234)] px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight hover:opacity-80 transition"
        >
          Heart Fusion Camp )'(
        </Link>
        <div className="space-x-6 text-lg font-bold hidden md:flex">
          <Link href="/" className="hover:underline transition">
            Home
          </Link>
          <Link href="/apply" className="hover:underline transition">
            Apply to Join
          </Link>
          <Link href="/about" className="hover:underline transition">
            About
          </Link>
          <a
            href="https://3.basecamp.com/5937114/projects/41594440"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline transition"
          >
            [ B ]
          </a>
        </div>
      </div>
    </nav>
  )
}
