/** Change: Added responsive mobile navigation with hamburger menu */

'use client'

import Link from 'next/link'
import { Instagram, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/placeholders/pastelbackground.png)' }}
    >
      <div className="container-responsive">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Davion Mack */}
          <Link 
            href="/" 
            className="text-xl sm:text-2xl font-serif font-semibold text-charcoal hover:text-gray-600 transition-colors focus-ring py-2 px-3 sm:px-4 bg-white/90 backdrop-blur-sm rounded-lg border-2 border-black shadow-sm hover:bg-white/95"
          >
            Davion Mack
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
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

            {/* About */}
            <Link
              href="/about"
              className="text-base lg:text-lg font-medium text-charcoal hover:text-gray-600 transition-colors focus-ring py-2 px-3 lg:px-4 bg-white/90 backdrop-blur-sm rounded-lg border-2 border-black shadow-sm hover:bg-white/95"
            >
              About
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 bg-white/90 backdrop-blur-sm rounded-lg border-2 border-black shadow-sm hover:bg-white/95 focus-ring"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-lg">
            <nav className="container-responsive py-4 space-y-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/davionjmack/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-charcoal hover:text-gray-600 transition-colors focus-ring p-3 bg-white/90 rounded-lg border-2 border-black shadow-sm hover:bg-white/95"
                aria-label="Follow Davion Mack on Instagram"
                onClick={closeMobileMenu}
              >
                <Instagram size={20} className="mr-3" />
                <span className="font-medium">Follow on Instagram</span>
              </a>

              {/* About */}
              <Link
                href="/about"
                className="block text-charcoal hover:text-gray-600 transition-colors focus-ring p-3 bg-white/90 rounded-lg border-2 border-black shadow-sm hover:bg-white/95 font-medium"
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
