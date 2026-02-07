import './globals.css'
import Header from './components/layout/header'
import Footer from './components/layout/footer/Footer'
import Providers from '../providers/Provider'
import { Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="/icon-dark.ico" sizes="any" />
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
