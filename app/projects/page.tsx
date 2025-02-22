'use client'

import { useLanguage } from '../../components/language-provider'
import Image from 'next/image'
import { useState } from 'react'

const projects = [
  {
    name: 'SaaS One',
    description: 'A tool for aggregating SaaS platforms authenticated via Google Workspace.',
    image: '/placeholder.svg?height=200&width=300',
    techStack: ['Vue.js', 'Node.js', 'MongoDB'],
    link: 'https://saasone.example.com',
    date: '2023-05-15',
  },
  {
    name: 'TeamCulture',
    description: 'An HR management SaaS developed with Vue.js.',
    image: '/placeholder.svg?height=200&width=300',
    techStack: ['Vue.js', 'Express.js', 'PostgreSQL'],
    link: 'https://teamculture.example.com',
    date: '2023-02-01',
  },
  {
    name: 'NutriFlow',
    description: 'AI-powered diet generator with PDF export functionality.',
    image: '/placeholder.svg?height=200&width=300',
    techStack: ['React', 'Python', 'TensorFlow'],
    link: 'https://nutriflow.example.com',
    date: '2022-11-20',
  },
]

export default function Projects() {
  const { t } = useLanguage()
  const [nameFilter, setNameFilter] = useState('')
  const [sortBy, setSortBy] = useState('name')

  const filteredProjects = projects
    .filter(project => project.name.toLowerCase().includes(nameFilter.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name)
      } else {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      }
    })

  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold text-purple-400 float">{t('projects.title')}</h1>
      <div className="flex space-x-4 mb-6">
        <input
          type="text"
          placeholder="Filter by name"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          className="px-4 py-2 rounded-full bg-purple-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 rounded-full bg-purple-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
        >
          <option value="name">Sort by Name</option>
          <option value="date">Sort by Date</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.name} className="bg-black bg-opacity-50 rounded-lg overflow-hidden backdrop-blur-md hover-scale">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.name}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold">{project.name}</h3>
              <p>{project.description}</p>
              <p className="text-sm text-gray-400">{new Date(project.date).toLocaleDateString()}</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="bg-purple-800 text-white px-2 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors"
              >
                {t('projects.viewProject')}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
