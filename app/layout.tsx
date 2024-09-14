import './styles/global.scss'
import './styles/transitions.scss'
import './styles/dark.scss'

import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import { ThemeProvider } from './context/theme-provider'
import { Header } from './components/header'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'kimuradev | portfolio',
    template: '%s | kimuradev.com',
  },
  description: 'Leandro Kimura portfolio.',
  openGraph: {
    title: 'kimuradev | portfolio',
    description: 'take a look at my portfolio',
    url: baseUrl,
    siteName: 'kimuradev - portfolio',
    locale: 'en_US',
    type: 'website',
    images: `${baseUrl}/api/og`
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className="flex flex-col antialiased h-screen w-screen p-8 lg:max-w-6xl lg:mx-auto">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-0 lg:px-8">
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
