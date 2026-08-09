import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import LabHeader from '@/components/lab-header'

export const metadata: Metadata = {
  title: '3D Lab | Imber Frontend',
  description: 'Three.js 场景、全景贴图与 3D 模型实验'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>
        <link rel="canonical" href="https://imber.top"></link>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LabHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
