import type { Metadata } from 'next'
import './globals.css'
import Header from '@/app/components/ui/Header'
import Footer from '@/app/components/ui/Footer'

export const metadata: Metadata = {
  title: 'Robson Raphael | Tecnologia Jurídica',
  description: 'Soluções em tecnologia para escritórios de advocacia: sites profissionais, automação de WhatsApp e sistemas de gestão.',
  icons: '/favicon.ico',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
