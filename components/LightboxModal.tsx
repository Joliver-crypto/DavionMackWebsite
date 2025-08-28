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
      {/* Backdrop - keeps spine faintly visible */}
      <div 
        className="modal-backdrop"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal Content */}
      <div className="fixed inset-0 z-10 flex items-center justify-center p-2 md:p-4">
        <div
          ref={modalRef}
          className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[95dvh] md:max-h-[90vh] overflow-y-auto focus-ring"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          tabIndex={-1}
        >
          {/* Header */}
          <div className="flex justify-between items-start p-6 border-b border-gray-200">
            <div>
              <h2 id="modal-title" className="text-2xl font-serif font-semibold text-charcoal">
                {work.title}
              </h2>
              <p className="text-lg text-gray-600 mt-1">{work.year}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors focus-ring"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="px-6 pb-6 pt-0">
            {/* Image */}
            <div
              className="w-full mb-6 flex items-start justify-center"
            >
              <img
                src={work.cover}
                alt={work.title}
                className="max-h-[85dvh] max-w-[90vw] w-auto h-auto border border-black"
              />
            </div>

            {/* Materials */}
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-medium text-charcoal">
                Materials
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {work.materials}
              </p>
            </div>

            {/* Additional details could go here */}
            {work.forSale && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
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
  )
}
