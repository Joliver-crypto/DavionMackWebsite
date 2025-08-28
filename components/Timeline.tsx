'use client'

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

  // Sort works by year (newest first) and then by index
  const sortedWorks = [...works].sort((a, b) => {
    if (a.year !== b.year) return b.year - a.year
    return works.indexOf(a) - works.indexOf(b)
  })

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const currentScrollLeft = container.scrollLeft
      const itemWidth = 480 // Width of each artwork item
      
      // Find the current position and jump to the previous item
      const currentItemIndex = Math.round(currentScrollLeft / itemWidth)
      const targetScrollLeft = (currentItemIndex - 1) * itemWidth
      
      container.scrollTo({ left: targetScrollLeft, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const currentScrollLeft = container.scrollLeft
      const itemWidth = 480 // Width of each artwork item
      
      // Find the current position and jump to the next item
      const currentItemIndex = Math.round(currentScrollLeft / itemWidth)
      const targetScrollLeft = (currentItemIndex + 1) * itemWidth
      
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
    // Account for the right padding (50vw) and center the first item
    const totalWidth = (sortedWorks.length + 1) * 480 + 120 // +1 for placeholder + 120px extra spacing
    const containerWidth = container.clientWidth
    const rightPadding = containerWidth / 2 // 50vw = half the container width
    const firstItemCenter = totalWidth - rightPadding - 240 // 240 = half of item width (480/2)
    container.scrollLeft = firstItemCenter

    return () => container.removeEventListener('scroll', handleScroll)
  }, [sortedWorks.length])



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
            <div id="comingSoonCard" className="absolute cursor-default" style={{ left: `${(sortedWorks.length * 480) + 120}px` }}>
              <div className="relative mb-6">
                {/* Placeholder container */}
                <div className="w-80 h-80 relative border-2 border-dashed border-gray-300 rounded-sm bg-gray-50 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-2xl font-serif font-medium mb-2">In The Works</div>
                    <div className="text-lg">Coming Soon</div>
                    <div className="text-sm mt-2">2025</div>
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
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Controls */}
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

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
