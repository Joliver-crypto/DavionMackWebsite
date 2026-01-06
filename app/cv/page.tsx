import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Download } from 'lucide-react'
import aboutData from '@/data/about.json'

export const metadata: Metadata = {
  title: 'CV - Davion Mack',
  description: 'Curriculum Vitae for artist Davion Mack',
}

export default function CvPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container-responsive py-16">
        {/* Top bar with back + download */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/about"
            className="inline-flex items-center text-charcoal hover:text-gray-600 transition-colors focus-ring p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft size={24} />
          </Link>

          <a
            href={aboutData.cv}
            download
            className="btn-secondary inline-flex items-center"
            aria-label="Download CV"
          >
            <Download size={18} />
          </a>
        </div>

        {/* Embedded PDF viewer */}
        <div className="w-full border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <object
            data={aboutData.cv}
            type="application/pdf"
            className="w-full h-[70vh]"
          >
            <p className="p-4 text-sm text-gray-600">
              Your browser can&apos;t display the PDF.{' '}
              <a
                href={aboutData.cv}
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open the CV in a new tab
              </a>
              .
            </p>
          </object>
        </div>
      </div>
    </div>
  )
}

