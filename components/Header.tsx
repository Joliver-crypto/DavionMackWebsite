'use client'

import Link from 'next/link'
import { Instagram } from 'lucide-react'

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/placeholders/pastelbackground.png)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Davion Mack */}
          <Link 
            href="/" 
            className="text-2xl font-serif font-semibold text-charcoal hover:text-gray-600 transition-colors focus-ring py-2 px-4 bg-white/90 backdrop-blur-sm rounded-lg border-2 border-black shadow-sm hover:bg-white/95"
          >
            Davion Mack
          </Link>

          {/* Right side - Navigation */}
          <nav className="flex items-center space-x-8">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/davionjmack/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal hover:text-gray-600 transition-colors focus-ring p-2 bg-white/90 backdrop-blur-sm rounded-lg border-2 border-black shadow-sm hover:bg-white/95"
              aria-label="Follow Davion Mack on Instagram"
            >
              <Instagram size={24} />
            </a>

            {/* Shop */}
            <Link
              href="/shop"
              className="text-lg font-medium text-charcoal hover:text-gray-600 transition-colors focus-ring py-2 px-4 bg-white/90 backdrop-blur-sm rounded-lg border-2 border-black shadow-sm hover:bg-white/95"
            >
              Shop
            </Link>

            {/* About */}
            <Link
              href="/about"
              className="text-lg font-medium text-charcoal hover:text-gray-600 transition-colors focus-ring py-2 px-4 bg-white/90 backdrop-blur-sm rounded-lg border-2 border-black shadow-sm hover:bg-white/95"
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
