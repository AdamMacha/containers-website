"use client"

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Container } from "lucide-react";
import { LanguageProvider } from "@/lib/providers/language-provider";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import React from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  return (
    <header className="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm">
    <div className="max-w-6xl mx-auto px-4">
      <nav className="flex items-center justify-between h-16">
        <Link href="/" className="flex items-center space-x-2">
          <Container className="w-8 h-8 text-blue-600" />
          <span className="font-bold text-xl">KupSiKontejner.cz</span>
        </Link>
        <button className="text-black md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className={`md:flex ${isMenuOpen ? "block" : "hidden"} absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent`}>
          <Navigation />
        </div>
      </nav>
    </div>
  </header>
  )
}

export default Navbar