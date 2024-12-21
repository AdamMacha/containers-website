import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Container } from "lucide-react";
import { LanguageProvider } from "@/lib/providers/language-provider";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Premium Containers | High-Quality Shipping Containers',
  description: 'Premium shipping containers for sale in the Czech Republic. Various sizes and customization options available.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <header className="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm">
            <div className="max-w-6xl mx-auto px-4">
              <nav className="flex items-center justify-between h-16">
                <Link href="/" className="flex items-center space-x-2">
                  <Container className="w-8 h-8 text-blue-600" />
                  <span className="font-bold text-xl">ContainerPro</span>
                </Link>
                <Navigation />
              </nav>
            </div>
          </header>
          <div className="pt-16">
            {children}
          </div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}