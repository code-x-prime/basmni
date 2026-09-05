import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/motion/ScrollProgress'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' })

export const metadata: Metadata = {
  title: 'Basmni Technologies Pvt. Ltd. | Hydropower & Water Infrastructure Solutions',
  description:
    'Basmni Technologies Pvt. Ltd. provides advanced deep dam dredging, pressurized air cable systems, trash rack cleaning machines and specialized engineering solutions for hydropower and water infrastructure projects across India.',
  openGraph: {
    title: 'Basmni Technologies Pvt. Ltd.',
    description: 'Engineering the future of water infrastructure.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Basmni Technologies Pvt. Ltd.',
    description: 'Advanced engineering for hydropower and water infrastructure.',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#102c3d',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${manrope.variable} bg-background`}>
      <body className="bg-background font-sans text-foreground antialiased">
        <ScrollProgress />
        <Header />
        <main className="[overflow-x:clip]">{children}</main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
