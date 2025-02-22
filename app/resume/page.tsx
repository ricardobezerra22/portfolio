'use client'

import { useLanguage } from '../../components/language-provider'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

// Mocked resume data
const resumeData = {
  name: "Niverton Ricardo",
  title: "Senior Full-Stack Developer & DevOps Specialist",
  summary: "Experienced full-stack developer with over 10 years of expertise in Vue.js, React, Node.js, and DevOps practices. Passionate about creating efficient, scalable, and user-friendly web applications.",
  experience: [
    {
      title: "Senior Full-Stack Developer",
      company: "TechInnovate Solutions",
      period: "2020 - Present",
      responsibilities: [
        "Lead development of enterprise-level SaaS applications",
        "Implement microservices architecture using Node.js and Docker",
        "Mentor junior developers and conduct code reviews"
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "WebWizards Inc.",
      period: "2016 - 2020",
      responsibilities: [
        "Developed and maintained multiple client websites using Vue.js and Laravel",
        "Implemented CI/CD pipelines using Jenkins and GitLab",
        "Optimized database queries resulting in 40% performance improvement"
      ]
    },
    {
      title: "Junior Web Developer",
      company: "StartUp Dynamo",
      period: "2013 - 2016",
      responsibilities: [
        "Built responsive web applications using React and Express.js",
        "Collaborated with UX designers to implement pixel-perfect designs",
        "Participated in agile development processes and sprint planning"
      ]
    }
  ],
  education: [
    {
      degree: "Master of Science in Computer Science",
      institution: "Tech University",
      year: "2013"
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "Code College",
      year: "2011"
    }
  ],
  skills: [
    "JavaScript (Vue.js, React, Node.js)",
    "Python",
    "Rust",
    "DevOps (Docker, Kubernetes, Jenkins)",
    "Database Management (MySQL, MongoDB, PostgreSQL)",
    "Cloud Platforms (AWS, Google Cloud)",
    "Agile Methodologies"
  ]
}

export default function Resume() {
  const { t } = useLanguage();
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    experience: true,
    education: true,
    skills: true
  })

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-purple-400 mb-4">{resumeData.name}</h1>
      <h2 className="text-2xl text-purple-300 mb-4">{resumeData.title}</h2>
      <p className="text-lg mb-8">{resumeData.summary}</p>

      <section>
        <h3 
          className="text-2xl font-semibold mb-4 cursor-pointer flex items-center"
          onClick={() => toggleSection('experience')}
        >
          {t('resume.experience')}
          {expandedSections.experience ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
        </h3>
        {expandedSections.experience && (
          <div className="space-y-6">
            {resumeData.experience.map((job, index) => (
              <div key={index} className="relative pl-8 pb-8 border-l-2 border-purple-600">
                <div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-[9px] top-1"></div>
                <h4 className="text-xl font-semibold">{job.title}</h4>
                <p className="text-purple-300">{job.company}</p>
                <p className="text-sm text-gray-400 mb-2">{job.period}</p>
                <ul className="list-disc list-inside">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </section>

      <section>
        <h3 
          className="text-2xl font-semibold mb-4 cursor-pointer flex items-center"
          onClick={() => toggleSection('education')}
        >
          {t('resume.education')}
          {expandedSections.education ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
        </h3>
        {expandedSections.education && (
          <div className="space-y-4">
            {resumeData.education.map((edu, index) => (
              <div key={index} className="pl-8 relative">
                <div className="absolute w-3 h-3 bg-purple-600 rounded-full -left-[5px] top-2"></div>
                <h4 className="text-lg font-semibold">{edu.degree}</h4>
                <p>{edu.institution}, {edu.year}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      <section>
        <h3 
          className="text-2xl font-semibold mb-4 cursor-pointer flex items-center"
          onClick={() => toggleSection('skills')}
        >
          {t('resume.skills')}
          {expandedSections.skills ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
        </h3>
        {expandedSections.skills && (
          <ul className="grid grid-cols-2 gap-2">
            {resumeData.skills.map((skill, index) => (
              <li key={index} className="bg-purple-800 rounded-full px-4 py-2 text-center">{skill}</li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}
