/** Change: Completely redesigned timeline for mobile-first responsive design */

'use client'

import Image from 'next/image'
import { useRef, useEffect, useState, useCallback } from 'react'
import TimelineItem from './TimelineItem'
import { Work } from '@/types/work'

interface TimelineProps {
  works: Work[]
}

export default function Timeline({ works }: TimelineProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const timelineContainerRef = useRef<HTMLDivElement>(null)
  const [showScrollControls, setShowScrollControls] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Sort works by year (newest first) and then by index
  const sortedWorks = [...works].sort((a, b) => {
    if (a.year !== b.year) return b.year - a.year
    return works.indexOf(a) - works.indexOf(b)
  })

  // Check if mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const currentScrollLeft = container.scrollLeft
      const itemWidth = isMobile ? 280 : 480 // Responsive item width
      
      // Find the current position and jump to the previous item
      const currentItemIndex = Math.round(currentScrollLeft / itemWidth)
      const targetScrollLeft = Math.max(0, (currentItemIndex - 1) * itemWidth)
      
      container.scrollTo({ left: targetScrollLeft, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const currentScrollLeft = container.scrollLeft
      const itemWidth = isMobile ? 280 : 480 // Responsive item width
      const maxScroll = container.scrollWidth - container.clientWidth
      
      // Find the current position and jump to the next item
      const currentItemIndex = Math.round(currentScrollLeft / itemWidth)
      const targetScrollLeft = Math.min(maxScroll, (currentItemIndex + 1) * itemWidth)
      
      container.scrollTo({ left: targetScrollLeft, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      setShowScrollControls(container.scrollLeft > 0)
    }

    container.addEventListener('scroll', handleScroll)
    
    // Set initial scroll position to center the first (newest) artwork
    const itemWidth = isMobile ? 280 : 480
    const totalWidth = (sortedWorks.length + 1) * itemWidth + (isMobile ? 40 : 120)
    const containerWidth = container.clientWidth
    const rightPadding = containerWidth / 2
    const firstItemCenter = totalWidth - rightPadding - (itemWidth / 2)
    container.scrollLeft = Math.max(0, firstItemCenter)

    return () => container.removeEventListener('scroll', handleScroll)
  }, [sortedWorks.length, isMobile])

  return (
    <div className="relative w-full h-screen-mobile overflow-hidden">
      {/* Scroll Container */}
      <div 
        ref={scrollContainerRef}
        className="h-full overflow-x-auto overflow-y-hidden scrollbar-hide touch-pan-x"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="relative h-full min-w-max">
          {/* Timeline Items */}
          <div ref={timelineContainerRef} className="relative h-full flex items-center pr-[50vw]">

            {/* Placeholder for future artwork */}
            <div 
              id="comingSoonCard" 
              className="absolute cursor-default" 
              style={{ 
                left: `${(sortedWorks.length * (isMobile ? 280 : 480)) + (isMobile ? 40 : 120)}px` 
              }}
            >
              <div className="relative mb-6">
                {/* Placeholder container */}
                <div className={`${isMobile ? 'w-64 h-64' : 'w-80 h-80'} relative rounded-sm overflow-hidden shadow-sm`}>
                  <Image
                    src="/placeholders/explore.jpg"
                    alt="Explore placeholder"
                    fill
                    className="object-cover"
                    sizes={isMobile ? '256px' : '320px'}
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-black/35" aria-hidden="true" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-2">
                    <svg
                      className={`${isMobile ? 'w-9 h-9' : 'w-12 h-12'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                    </svg>
                    <div className={`${isMobile ? 'text-xl' : 'text-3xl'} font-serif font-semibold`}>Explore</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actual artwork items */}
            {sortedWorks.map((work, index) => (
              <TimelineItem
                key={work.slug}
                work={work}
                index={index}
                total={sortedWorks.length}
                isLast={index === sortedWorks.length - 1}
                isMobile={isMobile}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Controls - Hidden on mobile for touch scrolling */}
      {!isMobile && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
          <button
            onClick={scrollLeft}
            className="bg-white/80 hover:bg-white border border-gray-200 rounded-full p-3 shadow-sm transition-all focus-ring"
            aria-label="Scroll left to older works"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={scrollRight}
            className="bg-white/80 hover:bg-white border border-gray-200 rounded-full p-3 shadow-sm transition-all focus-ring"
            aria-label="Scroll right to newer works"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
