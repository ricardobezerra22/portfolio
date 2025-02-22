'use client'

import { useLanguage } from '../../components/language-provider'
import Image from 'next/image'
import { useState } from 'react'

const books = [
  {
    title: 'Deep Work',
    author: 'Cal Newport',
    category: 'productivity',
    review: 'A game-changer for focusing on high-value tasks.',
    image: '/placeholder.svg?height=200&width=150',
    link: 'https://example.com/deep-work',
  },
  {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    category: 'technology',
    review: 'Essential principles for writing maintainable code.',
    image: '/placeholder.svg?height=200&width=150',
    link: 'https://example.com/clean-code',
  },
  {
    title: 'Ikigai',
    author: 'Héctor García and Francesc Miralles',
    category: 'selfDevelopment',
    review: 'Insights into finding purpose and living a fulfilling life.',
    image: '/placeholder.svg?height=200&width=150',
    link: 'https://example.com/ikigai',
  },
]

export default function Books() {
  const { t } = useLanguage()
  const [nameFilter, setNameFilter] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(nameFilter.toLowerCase()) &&
    (categoryFilter === 'all' || book.category === categoryFilter)
  )

  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold text-purple-400 float">{t('books.title')}</h1>
      <div className="flex space-x-4 mb-6">
        <input
          type="text"
          placeholder="Filter by name"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          className="px-4 py-2 rounded-full bg-purple-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="px-4 py-2 rounded-full bg-purple-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
        >
          <option value="all">All Categories</option>
          <option value="productivity">Productivity</option>
          <option value="technology">Technology</option>
          <option value="selfDevelopment">Self Development</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBooks.map((book) => (
          <div key={book.title} className="bg-black bg-opacity-50 rounded-lg overflow-hidden backdrop-blur-md hover-scale">
            <div className="p-6 space-y-4">
              <Image
                src={book.image || "/placeholder.svg"}
                alt={book.title}
                width={150}
                height={200}
                className="mx-auto rotate-on-hover"
              />
              <h3 className="text-2xl font-semibold">{book.title}</h3>
              <p className="text-purple-300">{book.author}</p>
              <p className="bg-purple-800 text-white px-2 py-1 rounded-full text-sm inline-block">
                {t(`books.categories.${book.category}`)}
              </p>
              <p>{book.review}</p>
              <a
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors"
              >
                {t('books.readMore')}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
