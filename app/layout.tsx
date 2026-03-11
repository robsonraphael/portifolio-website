import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/app/components/ui/Header';
import Footer from '@/app/components/ui/Footer';

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: "Raphael - Desenvolvedor Full Stack",
  description: "Crio aplicações Web moderno robusto e escaláveis, do back até a interface.",
  icons: "/favicon.ico"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
<<<<<<< Updated upstream
      <body className={inter.className}>
=======
      <body className="antialiased font-sans bg-bg-base text-text-secondary">
>>>>>>> Stashed changes
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
