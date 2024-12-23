import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Container } from "lucide-react";
import { LanguageProvider } from "@/lib/providers/language-provider";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KupSiKontejner.cz',
  description: 'Levné nákladní kontejnery na prodej po celé České republice. Různé druhy a rozměry k dispozici.',
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
          <Navbar />
          <div className="pt-16">
            {children}
          </div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}