'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo et Hamburger */}
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#E30613] hover:text-[#B30000] transition-colors md:hidden"
              aria-label="Menu"
            >
              {!isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
            <Link href="/" className="ml-4">
              <Image
                src="/Djezzy_logo.png"
                alt="Djezzy"
                width={100}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Menu de navigation desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-gray-600 hover:text-[#E30613] transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-[#E30613] transition-colors">
              À propos
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-[#E30613] transition-colors">
              Contact
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:block">
              <select className="appearance-none bg-white border border-[#E5E5E5] rounded-md py-2 pl-3 pr-8 text-sm text-[#666666] focus:outline-none focus:ring-2 focus:ring-[#E30613] focus:border-transparent">
                <option>Français</option>
                <option>العربيّة</option>
                <option>English</option>
              </select>
            </div>
            <Link
              href="/accounts/login"
              className="text-[#E30613] hover:text-[#B30000] font-medium transition-colors"
            >
              Se connecter
            </Link>
          </div>
        </div>

        {/* Menu mobile */}
        <div
          className={`${
            isMenuOpen ? 'max-h-64' : 'max-h-0'
          } md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className="py-3 space-y-3">
            <Link
              href="/services"
              className="block px-2 py-1 text-gray-600 hover:text-[#E30613] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block px-2 py-1 text-gray-600 hover:text-[#E30613] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              À propos
            </Link>
            <Link
              href="/contact"
              className="block px-2 py-1 text-gray-600 hover:text-[#E30613] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="sm:hidden px-2 py-1">
              <select className="w-full appearance-none bg-white border border-[#E5E5E5] rounded-md py-2 pl-3 pr-8 text-sm text-[#666666] focus:outline-none focus:ring-2 focus:ring-[#E30613] focus:border-transparent">
                <option>Français</option>
                <option>العربيّة</option>
                <option>English</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 