/** Change: Enhanced responsive modal with better mobile experience */

'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { Work } from '@/types/work'

interface LightboxModalProps {
  work: Work
  isOpen: boolean
  onClose: () => void
}

export default function LightboxModal({ work, isOpen, onClose }: LightboxModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus()
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div 
        className="modal-backdrop"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal Content */}
      <div className="fixed inset-0 z-10 flex items-center justify-center p-2 sm:p-4">
        <div
          ref={modalRef}
          className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[95dvh] md:max-h-[90vh] overflow-hidden focus-ring"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          tabIndex={-1}
        >
          {/* Header */}
          <div className="flex justify-between items-start p-4 md:p-6 border-b border-gray-200">
            <div className="flex-1 min-w-0">
              <h2 id="modal-title" className="text-lg md:text-xl lg:text-2xl font-serif font-semibold text-charcoal leading-tight text-balance">
                {work.title}
              </h2>
              <p className="text-base md:text-lg text-gray-600 mt-1">{work.year}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors focus-ring ml-2 flex-shrink-0"
              aria-label="Close modal"
            >
              <X size={20} className="md:w-6 md:h-6" />
            </button>
          </div>

          {/* Content - Scrollable area */}
          <div className="overflow-y-auto max-h-[calc(95dvh-120px)] md:max-h-[calc(90vh-120px)]">
            <div className="p-4 md:p-6">
              {/* Image - Responsive container with proper scaling */}
              <div className="w-full mb-4 md:mb-6 flex items-start justify-center">
                <div className="relative w-full max-w-full">
                  <Image
                    src={work.cover}
                    alt={work.title}
                    width={800}
                    height={800}
                    className="w-auto h-auto safe-viewport-height max-w-full border border-black rounded"
                    style={{ objectFit: 'contain' }}
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 60vw, 800px"
                    priority
                  />
                </div>
              </div>

              {/* Materials */}
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-lg md:text-xl font-serif font-medium text-charcoal">
                  Materials
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed text-balance">
                  {work.materials}
                </p>
              </div>

              {/* Additional details */}
              {work.forSale && (
                <div className="mt-4 md:mt-6 p-3 md:p-4 bg-gray-50 rounded-lg">
                  <p className="text-xs md:text-sm text-gray-600 text-balance">
                    This piece is available for purchase. 
                    <a 
                      href={`mailto:davionmack@outlook.com?subject=Artwork%20Enquiry:%20${encodeURIComponent(work.title)}`}
                      className="text-charcoal hover:underline ml-1"
                    >
                      Contact for details.
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
