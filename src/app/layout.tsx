import React, { CSSProperties } from 'react'
import type { Metadata } from 'next'
import { Oswald, Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})
const oswald = Oswald({ subsets: ['latin'] })

interface CustomCSSProperties extends CSSProperties {
  '--montserrat-font'?: string
  '--oswald-font'?: string
}

export const metadata: Metadata = {
  title: 'videoshops',
  description: 'Search by Brand, Product, or Category',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
        style={
          {
            '--montserrat-font': montserrat.style.fontFamily,
            '--oswald-font': oswald.style.fontFamily,
          } as CustomCSSProperties
        }
      >
        {children}
      </body>
    </html>
  )
}
