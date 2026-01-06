/** Change: Enhanced responsive design with improved typography and layout */

import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Instagram, ArrowLeft } from 'lucide-react'
import aboutData from '@/data/about.json'

export const metadata: Metadata = {
  title: 'About - Davion Mack',
  description: 'Learn more about Davion Mack, MFA at Davis, California',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <div className="container-responsive pt-4 pb-16">
        {/* Home Navigation */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-charcoal hover:text-gray-600 transition-colors focus-ring p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft size={24} />
          </Link>
        </div>

        <div className="text-center mb-16">
          {/* Artist Photo */}
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto mb-8">
            <Image
              src={aboutData.photo}
              alt={aboutData.name}
              fill
              className="object-cover rounded-lg shadow-lg"
              sizes="(max-width: 640px) 192px, 256px"
            />
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4 text-balance">
            {aboutData.name}
          </h1>

          {/* Degree Line */}
          <p className="text-xl text-gray-600 mb-8 text-balance">
            {aboutData.degreeLine}
          </p>

          {/* Bio with left accent line */}
          <div className="max-w-2xl mx-auto mb-12 text-left">
            <div className="border-l border-black pl-6">
              <p className="text-lg text-gray-700 leading-relaxed text-balance">
                {aboutData.bio}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-row flex-wrap gap-4 justify-center items-center">
            {/* CV */}
            <a
              href={aboutData.cv}
              className="inline-flex items-center justify-center text-xl md:text-2xl font-serif font-bold text-charcoal hover:text-gray-600 transition-colors focus-ring px-2"
            >
              CV
            </a>

            {/* Instagram */}
            <a
              href={aboutData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-xl md:text-2xl font-serif font-bold text-charcoal hover:text-gray-600 transition-colors focus-ring px-2"
            >
            Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
