/** Change: Made timeline items responsive with mobile-optimized sizing */

'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Work } from '@/types/work'
import LightboxModal from './LightboxModal'

interface TimelineItemProps {
  work: Work
  index: number
  total: number
  isLast: boolean
  isMobile?: boolean
}

export default function TimelineItem({ work, index, total, isLast, isMobile = false }: TimelineItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  // Calculate positioning - newest works on right, oldest on left
  // Reverse the index so newest (index 0) appears on the right
  const reversedIndex = total - 1 - index
  const isAbove = reversedIndex % 2 === 0
  const itemWidth = isMobile ? 280 : 480
  const horizontalOffset = reversedIndex * itemWidth
  const verticalOffset = isAbove ? (isMobile ? -80 : -120) : (isMobile ? 80 : 120)
  
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <div
        id={isLast ? 'finalArtworkCard' : undefined}
        className="absolute cursor-pointer group"
        style={{
          left: `${horizontalOffset}px`,
          transform: `translateY(${verticalOffset}px)`,
        }}
      >
        {/* Artwork card */}
        <div 
          className={`relative ${isAbove ? 'mb-6' : 'mt-6'}`}
          onClick={openModal}
        >
          {/* Image container */}
          <div className={`${isMobile ? 'w-64 h-64' : 'w-80 h-80'} relative border border-black/90 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow`}>
            <Image
              src={work.cover}
              alt={work.title}
              fill
              className="object-cover"
              sizes={isMobile ? "280px" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
            />
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </div>
          
          {/* Title */}
          <div className="mt-3 text-center">
            <h3 className={`${isMobile ? 'text-base' : 'text-lg'} font-medium text-charcoal text-balance`}>{work.title}</h3>
            <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-gray-600`}>{work.year}</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <LightboxModal
          work={work}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </>
  )
}
