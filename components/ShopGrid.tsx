'use client'

import Image from 'next/image'
import { Work } from '@/types/work'

interface ShopGridProps {
  works: Work[]
}

export default function ShopGrid({ works }: ShopGridProps) {
  // Filter works that are for sale
  const availableWorks = works.filter(work => work.forSale)

  if (availableWorks.length === 0) {
    return (
      <div className="text-center py-8 md:py-16">
        <h3 className="text-lg md:text-xl text-gray-600">No works currently available for purchase.</h3>
        <p className="text-sm md:text-base text-gray-500 mt-2">Check back soon for new pieces.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 ">
      {availableWorks.map((work) => (
        <div
          key={work.slug}
          className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          {/* Image - Square aspect ratio, responsive sizing */}
          <div className="relative aspect-square w-full overflow-hidden bg-gray-50">
            <Image
              src={work.cover}
              alt={work.title}
              fill
              className="object-cover"
                              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 60vw, 800px"
              priority
            />
          </div>

          {/* Content - Responsive padding and typography */}
          <div className="p-4 md:p-6">
            <div className="mb-3 md:mb-4">
              <h3 className="text-base md:text-lg lg:text-xl font-serif font-semibold text-charcoal mb-1 md:mb-2 leading-tight">
                {work.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 mb-1">{work.year}</p>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed">{work.materials}</p>
            </div>

            {/* Price and Status */}
            <div className="flex justify-between items-center mb-3 md:mb-4">
              <div className="text-lg md:text-xl lg:text-2xl font-semibold text-charcoal">
                ${work.price.toLocaleString()}
              </div>
              <span className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium ${
                work.status === 'Available' 
                  ? 'bg-green-100 text-green-800' 
                  : work.status === 'Reserved'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {work.status}
              </span>
            </div>

            {/* CTA Button */}
            <button
              className="w-full bg-charcoal text-white py-2.5 md:py-3 px-3 md:px-4 rounded-lg text-sm md:text-base font-medium hover:bg-gray-800 transition-colors focus-ring"
              onClick={() => {
                const subject = encodeURIComponent(`Artwork Enquiry: ${work.title}`)
                const body = encodeURIComponent(`Hi Davion,\n\nI'm interested in purchasing "${work.title}" (${work.year}).\n\nCould you please provide more details about this piece?\n\nBest regards,`)
                window.location.href = `mailto:davionmack@outlook.com?subject=${subject}&body=${body}`
              }}
            >
              {work.status === 'Available' ? 'Buy / Enquire' : 'Enquire'}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
