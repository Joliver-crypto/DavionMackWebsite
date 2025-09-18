/** Change: Enhanced responsive design with improved typography and layout */

import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Download, ArrowLeft } from 'lucide-react'
import aboutData from '@/data/about.json'

export const metadata: Metadata = {
  title: 'About - Davion Mack',
  description: 'Learn more about Davion Mack, MFA at Davis, California',
}

export default function AboutPage() {
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

          {/* Bio */}
          <div className="max-w-2xl mx-auto mb-12 text-left">
            <p className="text-lg text-gray-700 leading-relaxed text-balance">
              {aboutData.bio}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* CV Download */}
            <a
              href={aboutData.cv}
              className="btn-primary inline-flex items-center"
            >
              <Download size={20} className="mr-2" />
              Download CV
            </a>

            {/* Instagram */}
            <a
              href={aboutData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center"
            >
              <Instagram size={20} className="mr-2" />
              Follow on Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
