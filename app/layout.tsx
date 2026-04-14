import type { Metadata } from 'next'
import './globals.css'
import Header from '@/app/components/ui/Header'
import Footer from '@/app/components/ui/Footer'

export const metadata: Metadata = {
  title: 'Robson Raphael | Desenvolvimento e Automação para Negócios',
  description: 'Soluções em desenvolvimento web, automação de WhatsApp e sistemas de gestão para negócios que querem crescer com tecnologia.',
  icons: '/favicon.ico',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased font-[var(--font-body)]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
