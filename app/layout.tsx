import React from "react"
import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'Penerimaan Magang Polda Jawa Tengah',
  description: 'Platform resmi penerimaan magang mahasiswa Kepolisian Daerah Jawa Tengah. Daftar magang secara online dan dapatkan pengalaman berharga di institusi kepolisian.',
  generator: 'Polda Jawa Tengah',
  keywords: ['magang', 'polda', 'jawa tengah', 'kepolisian', 'pendaftaran'],
  authors: [{ name: 'Polda Jawa Tengah' }],
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0B2C4D',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
