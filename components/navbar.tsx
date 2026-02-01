'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '#beranda', label: 'Beranda' },
    { href: '#program', label: 'Program' },
    { href: '#unit-kerja', label: 'Unit Kerja' },
    { href: '#persyaratan', label: 'Persyaratan' },
    { href: '#kontak', label: 'Kontak' },
  ]

  return (
    <nav className="fixed w-full top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2 font-bold text-lg">
            <div className="w-10 h-10 bg-accent rounded flex items-center justify-center text-primary font-bold">
              PD
            </div>
            <span className="hidden sm:inline">Polda Jateng</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link
              href="#pendaftaran"
              className="px-6 py-2 bg-accent text-primary font-semibold rounded hover:opacity-90 transition-opacity"
            >
              Daftar Sekarang
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-sm font-medium hover:bg-primary/90 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Link
              href="#pendaftaran"
              className="block px-4 py-2 bg-accent text-primary font-semibold rounded mt-4"
              onClick={() => setIsOpen(false)}
            >
              Daftar Sekarang
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
