'use client'

import { useLanguage } from '../components/language-provider'
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const { t } = useLanguage()

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    projectsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 min-h-[80vh] items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-purple-400 float">
            {t('home.title')}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t('home.subtitle')}
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 hover-scale">
              <Github className="w-6 h-6 text-purple-400" />
              <a
                href="https://github.com/niverton-ricardo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors"
              >
                GitHub Profile
              </a>
            </div>
            <div className="flex items-center space-x-4 hover-scale">
              <Linkedin className="w-6 h-6 text-purple-400" />
              <a
                href="https://linkedin.com/in/niverton-ricardo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center space-x-4 hover-scale">
              <Mail className="w-6 h-6 text-purple-400" />
              <Link
                href="/contact"
                className="hover:text-purple-400 transition-colors"
              >
                {t('home.contact')}
              </Link>
            </div>
          </div>
        </div>
        <div className="relative aspect-square">
          <Image
            src="/profile.jpg"
            alt="Profile"
            fill
            className="object-cover rounded-2xl hover-scale"
            priority
          />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="space-y-12">
        <h2 className="text-3xl font-bold text-purple-400 text-center float">
          {t('home.featured_projects')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((project) => (
            <div
              key={project}
              className="p-6 rounded-xl bg-black bg-opacity-50 border border-purple-600 hover-scale"
            >
              <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                <Image
                  src={`/project-${project}.jpg`}
                  alt={`Project ${project}`}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-purple-400">
                {t(`home.project_${project}_title`)}
              </h3>
              <p className="text-muted-foreground mb-4">
                {t(`home.project_${project}_description`)}
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 text-sm rounded-full bg-black bg-opacity-50 border border-purple-600">
                  React
                </span>
                <span className="px-3 py-1 text-sm rounded-full bg-black bg-opacity-50 border border-purple-600">
                  TypeScript
                </span>
                <span className="px-3 py-1 text-sm rounded-full bg-black bg-opacity-50 border border-purple-600">
                  Next.js
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/projects"
            className="inline-block px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors hover-scale"
          >
            {t('home.view_all_projects')}
          </Link>
        </div>
      </section>
    </div>
  )
}
