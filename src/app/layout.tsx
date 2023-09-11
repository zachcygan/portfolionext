import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const inter = Inter({ subsets: ['latin'] })

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
