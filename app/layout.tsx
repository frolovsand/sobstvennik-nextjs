import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Собственник — Аренда и продажа коммерческих помещений',
  description:
    'Коммерческие помещения для аренды и продажи напрямую от собственника. Ограниченный пул отобранных объектов в Москве и Санкт-Петербурге.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={jetBrainsMono.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
