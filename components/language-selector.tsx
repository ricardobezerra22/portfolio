'use client'

import { useLanguage } from './language-provider'
import { useState, useEffect } from 'react'
import { Globe } from 'lucide-react'

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="appearance-none bg-purple-800 text-white pl-10 pr-8 py-2 rounded-full hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-600"
        >
          <option value="en">EN</option>
          <option value="pt">PT</option>
          <option value="es">ES</option>
          <option value="fr">FR</option>
        </select>
        <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white w-5 h-5" />
      </div>
    </div>
  )
}

