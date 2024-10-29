import { CSSProperties } from 'react'
import type { Metadata } from 'next'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import { Oswald, Montserrat, Roboto_Mono } from 'next/font/google'
import './global.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})
const oswald = Oswald({ subsets: ['latin'] })
const robotoMono = Roboto_Mono({ subsets: ['latin'] })

interface CustomCSSProperties extends CSSProperties {
  '--montserrat-font'?: string
  '--oswald-font'?: string
  '--roboto-mono'?: string
}

export const metadata: Metadata = {
  title: 'Videoshops',
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
            '--roboto-mono': robotoMono.style.fontFamily,
          } as CustomCSSProperties
        }
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
