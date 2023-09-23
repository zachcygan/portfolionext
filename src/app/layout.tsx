import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://zachcygan.com'),
  title: 'Zach Cygan',
  description: 'Zach Cygan\'s personal portfolio website',
  openGraph: {
    title: 'Zach Cygan',
    images: './opengraph-image.png',
    url: 'https://zachcygan.com',
    type: 'website',
    description: 'Zach Cygan\'s personal portfolio website Logo'
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='dark:bg-darkBg'>
        <header className='mx-auto pt-2 pb-2'>
          <Navbar />
        </header>
        <div className='min-h-[73vh]'>
          {children}
          <Analytics />
        </div>
        <Footer />
      </body>
    </html>
  )
}
