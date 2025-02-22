'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useLanguage } from './language-provider'
import { MoonIcon, SunIcon, GlobeIcon } from 'lucide-react'

export function Header() {
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-black bg-opacity-50 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-purple-400">NR</Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
          <Link href="/projects" className="hover:text-purple-400 transition-colors">Projects</Link>
          <Link href="/books" className="hover:text-purple-400 transition-colors">Books</Link>
          <Link href="/contact" className="hover:text-purple-400 transition-colors">Contact</Link>
          <Link href="/resume" className="hover:text-purple-400 transition-colors">{t('header.resume')}</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full hover:bg-purple-800 transition-colors"
          >
            {theme === 'dark' ? <SunIcon size={20} /> : <MoonIcon size={20} />}
          </button>
          <div className="relative">
            <button
              onClick={() => setLanguage(language === 'en' ? 'pt' : language === 'pt' ? 'es' : language === 'es' ? 'fr' : 'en')}
              className="p-2 rounded-full hover:bg-purple-800 transition-colors"
            >
              <GlobeIcon size={20} />
            </button>
            <span className="absolute top-0 right-0 bg-purple-600 text-xs rounded-full px-1">
              {language.toUpperCase()}
            </span>
          </div>
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
            <Link href="/projects" className="hover:text-purple-400 transition-colors">Projects</Link>
            <Link href="/books" className="hover:text-purple-400 transition-colors">Books</Link>
            <Link href="/contact" className="hover:text-purple-400 transition-colors">Contact</Link>
            <Link href="/resume" className="hover:text-purple-400 transition-colors">{t('header.resume')}</Link>
          </nav>
        </div>
      )}
    </header>
  )
}

