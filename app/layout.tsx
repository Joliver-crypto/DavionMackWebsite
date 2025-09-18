import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Analytics from '@/components/Analytics'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Davion Mack - Artist',
  description: 'Contemporary sculptor and artist, MFA at Davis, California',
  keywords: ['Davion Mack', 'artist', 'sculpture', 'contemporary art', 'Davis', 'MFA'],
  authors: [{ name: 'Davion Mack' }],
  openGraph: {
    title: 'Davion Mack - Artist',
    description: 'Contemporary sculptor and artist, MFA at Davis, California',
    url: 'https://davionmack.com',
    siteName: 'Davion Mack',
    images: [
      {
        url: '/placeholders/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Davion Mack - Artist',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Davion Mack - Artist',
    description: 'Contemporary sculptor and artist, MFA at Davis, California',
    images: ['/placeholders/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'GA_MEASUREMENT_ID'}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'GA_MEASUREMENT_ID'}');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  )
}
