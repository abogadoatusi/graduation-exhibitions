import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const notoSansJP = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-noto'
})

export const metadata: Metadata = {
  title: 'Graduation Exhibitions 2026',
  description: '全国の卒業制作展情報Webアプリ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} ${notoSansJP.variable}`}>
        <Header />
        <main style={{ minHeight: 'calc(100vh - 300px)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
