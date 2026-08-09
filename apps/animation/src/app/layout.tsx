import * as Sentry from '@sentry/nextjs'
import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import GsapPlugin from '@/components/gsap-plugin'
// GoogleTagManager
import { GoogleAnalytics } from '@next/third-parties/google'
import { ANIMATION_BASE_PATH } from './const'
import LabHeader from '@/components/lab-header'

// FRONTEND_SITE_URL 表示统一前端站点的生产地址。
const FRONTEND_SITE_URL = 'https://imber-frontend.netlify.app'

export function generateMetadata(): Metadata {
  return {
    title: {
      default: 'home | imber-animation',
      template: '%s | imber-animation'
    },
    description: 'web 动画作品展示',
    metadataBase: new URL(`${FRONTEND_SITE_URL}${ANIMATION_BASE_PATH}`),
    twitter: {
      card: 'summary_large_image',
      site: process.env.REAL_WEBSITE_URL,
      creator: '@imberZsk',
      images: {
        url: `${ANIMATION_BASE_PATH}/avatar.jpeg`,
        width: 1280,
        height: 640,
        alt: 'imber-animation',
        type: 'image/jpeg'
      }
    },
    openGraph: {
      type: 'website',
      images: `${ANIMATION_BASE_PATH}/opengraph-image.jpeg`
    },
    other: {
      ...Sentry.getTraceData()
    }
  }
}

export default function RootLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <link rel="canonical" href={`${FRONTEND_SITE_URL}${ANIMATION_BASE_PATH}`}></link>
      {/* <GoogleTagManager gtmId="GTM-NJ7PWQ3B" /> */}
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <LabHeader />
          {modal}
          {children}
        </ThemeProvider>
        <GoogleAnalytics gaId="G-EZLJ1D6L6Y" />
      </body>
      <GsapPlugin></GsapPlugin>
    </html>
  )
}
