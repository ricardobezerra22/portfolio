'use client'

import { useState } from 'react'
import { useLanguage } from '../../components/language-provider'
import { Mail, Linkedin, Github } from 'lucide-react'

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission (e.g., send email or API call)
    console.log('Form submitted:', formData)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h1 className="text-4xl font-bold text-purple-400 mb-6 float">{t('contact.title')}</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              {t('contact.name')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-black bg-opacity-50 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600 hover-scale"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              {t('contact.email')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-black bg-opacity-50 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600 hover-scale"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              {t('contact.message')}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 rounded-md bg-black bg-opacity-50 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600 hover-scale"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors hover-scale"
          >
            {t('contact.send')}
          </button>
        </form>
      </div>
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-purple-400 float">Connect with me</h2>
        <div className="flex items-center space-x-4 hover-scale">
          <Mail className="w-6 h-6 text-purple-400" />
          <a href="mailto:niverton.neves@gmail.com" className="hover:text-purple-400 transition-colors">
            niverton.neves@gmail.com
          </a>
        </div>
        <div className="flex items-center space-x-4 hover-scale">
          <Linkedin className="w-6 h-6 text-purple-400" />
          <a href="https://www.linkedin.com/in/niverton-ricardo" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
            LinkedIn Profile
          </a>
        </div>
        <div className="flex items-center space-x-4 hover-scale">
          <Github className="w-6 h-6 text-purple-400" />
          <a href="https://github.com/niverton-ricardo" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
            GitHub Profile
          </a>
        </div>
      </div>
    </div>
  )
}
