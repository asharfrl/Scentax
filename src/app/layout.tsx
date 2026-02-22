import './globals.css'
import Header from './components/layout/header'
import Footer from './components/layout/footer/Footer'
import Providers from '../providers/Provider'
import { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'SCENTAX',
    template: '%s | SCENTAX'
  },
  description: 'Fokus pada karakter, bukan sekadar janji aroma. Temukan aroma yang paling sinkron dengan kepribadian Anda.',
  icons: {
    icon: [
      { url: '/icon.ico' },
      { url: '/icon-dark.ico', media: '(prefers-color-scheme: dark)' }
    ],
    apple: '/images/logo/logo.png',
  },
  openGraph: {
    title: 'SCENTAX',
    description: 'Fokus pada karakter, bukan sekadar janji aroma. Temukan aroma yang paling sinkron dengan kepribadian Anda.',
    url: 'https://scentax.vercel.app',
    siteName: 'SCENTAX',
    images: [
      {
        url: '/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'SCENTAX Logo',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SCENTAX',
    description: 'Fokus pada karakter, bukan sekadar janji aroma. Temukan aroma yang paling sinkron dengan kepribadian Anda.',
    images: ['/images/logo/logo.png'],
  },
}

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
