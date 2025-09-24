import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/app/components/ui/Header';
import Footer from '@/app/components/ui/Footer';

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: "Raphael - Desenvolvedor Full Stack",
  description: "Crio aplicações Web moderno robusto e escaláveis, do back até a interface.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
