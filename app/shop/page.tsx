/** Change: Enhanced responsive design with improved typography and layout */

import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import ShopGrid from '@/components/ShopGrid'
import worksData from '@/data/works.json'

export const metadata: Metadata = {
  title: 'Shop - Davion Mack',
  description: 'Browse and purchase available artwork by Davion Mack',
}

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container-responsive py-16">
        {/* Home Navigation */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-charcoal hover:text-gray-600 transition-colors focus-ring p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft size={24} />
          </Link>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4 text-balance">
            Available Works
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-balance">
            Browse the current collection of available sculptures and mixed media works.
          </p>
        </div>
        
        <ShopGrid works={worksData} />
      </div>
    </div>
  )
}
