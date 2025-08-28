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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
          <div className="relative w-64 h-64 mx-auto mb-8">
            <Image
              src={aboutData.photo}
              alt={aboutData.name}
              fill
              className="object-cover rounded-lg shadow-lg"
              sizes="(max-width: 768px) 100vw, 256px"
            />
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
            {aboutData.name}
          </h1>

          {/* Degree Line */}
          <p className="text-xl text-gray-600 mb-8">
            {aboutData.degreeLine}
          </p>

          {/* Bio */}
          <div className="max-w-2xl mx-auto mb-12 text-left">
            <p className="text-lg text-gray-700 leading-relaxed">
              {aboutData.bio}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* CV Download */}
            <a
              href={aboutData.cv}
              className="inline-flex items-center px-6 py-3 bg-charcoal text-white rounded-lg font-medium hover:bg-gray-800 transition-colors focus-ring"
            >
              <Download size={20} className="mr-2" />
              Download CV
            </a>

            {/* Instagram */}
            <a
              href={aboutData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-charcoal text-charcoal rounded-lg font-medium hover:bg-charcoal hover:text-white transition-colors focus-ring"
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
