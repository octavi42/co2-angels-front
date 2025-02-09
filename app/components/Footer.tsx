import Link from 'next/link'

export function Footer() {
  return (
    <footer className="py-8 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <p className="text-gray-500 text-xs">© 2025 CO2 Angels. Shaping a sustainable future.</p>
          <nav className="space-x-4 mt-4 sm:mt-0">
            <Link href="/" className="text-xs font-medium text-gray-400 hover:text-orange-500 transition-colors">Home</Link>
            <Link href="/how-it-works" className="text-xs font-medium text-gray-400 hover:text-orange-500 transition-colors">How It Works</Link>
            <Link href="/about" className="text-xs font-medium text-gray-400 hover:text-orange-500 transition-colors">About Us</Link>
            <Link href="/faq" className="text-xs font-medium text-gray-400 hover:text-orange-500 transition-colors">FAQ</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

