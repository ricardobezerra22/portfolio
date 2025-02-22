import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Niverton Ricardo - Resume | Senior Full-Stack Developer & DevOps Specialist',
  description: 'View the professional resume of Niverton Ricardo, showcasing over 10 years of experience in full-stack development, DevOps, and leadership in tech innovation.',
  keywords: 'Niverton Ricardo, Full-Stack Developer, DevOps Specialist, Resume, Vue.js, React, Node.js, Docker, Kubernetes',
}

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

