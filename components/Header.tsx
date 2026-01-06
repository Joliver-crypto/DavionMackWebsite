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
      className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: 'url(/placeholders/header.png)' }}
    >
      <div className="absolute inset-0 bg-black/35 pointer-events-none" aria-hidden="true" />
      <div className="container-responsive relative">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Davion Mack */}
          <Link 
            href="/" 
            className="text-2xl sm:text-3xl font-serif font-bold text-white drop-shadow-md focus-ring py-2 px-1"
          >
            Davion Mack
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-12">
            {/* About */}
            <Link
              href="/about"
              className="text-xl lg:text-2xl font-serif font-bold text-white hover:opacity-80 transition-colors focus-ring py-2 px-2 drop-shadow-md"
            >
              About
            </Link>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/davionjmack/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-80 transition-colors focus-ring p-3"
              aria-label="Follow Davion Mack on Instagram"
            >
              <Instagram size={28} strokeWidth={2.5} />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-white focus-ring"
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
              {/* About */}
              <Link
                href="/about"
                className="block text-xl font-serif font-bold text-charcoal hover:text-gray-600 transition-colors focus-ring px-1 py-2"
                onClick={closeMobileMenu}
              >
                About
              </Link>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/davionjmack/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xl font-serif font-bold text-charcoal hover:text-gray-600 transition-colors focus-ring px-1 py-2"
                aria-label="Follow Davion Mack on Instagram"
                onClick={closeMobileMenu}
              >
                Instagram
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
