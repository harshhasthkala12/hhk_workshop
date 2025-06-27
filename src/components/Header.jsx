"use client"
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Palette } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Palette className="h-8 w-8 text-gold" />
            <h1 className="text-2xl font-bold font-hindi">
              HarshHasthkala Workshop
            </h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <Link href="/workshops" className="hover:text-gold transition-colors">Workshops</Link>
            <Link href="/gallery" className="hover:text-gold transition-colors">Gallery</Link>
            <Link href="/about" className="hover:text-gold transition-colors">About</Link>
            <Link href="/contact" className="hover:text-gold transition-colors">Contact</Link>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="py-2 hover:text-gold transition-colors">Home</Link>
              <Link href="/workshops" className="py-2 hover:text-gold transition-colors">Workshops</Link>
              <Link href="/gallery" className="py-2 hover:text-gold transition-colors">Gallery</Link>
              <Link href="/about" className="py-2 hover:text-gold transition-colors">About</Link>
              <Link href="/contact" className="py-2 hover:text-gold transition-colors">Contact</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
