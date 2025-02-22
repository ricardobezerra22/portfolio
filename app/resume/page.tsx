"use client";

import { useLanguage } from "../../components/language-provider";
import { motion } from "framer-motion";
import {
  Download,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Phone,
  Brain,
  Architecture,
  Cloud,
  Zap,
  Code2,
  Layout,
  FileJson,
  Layers,
  TestTube,
  Gauge,
  FileCode,
  Stars,
  Bot,
  FileType,
  Smartphone,
} from "lucide-react";

const iconMap: { [key: string]: any } = {
  Brain,
  Architecture,
  Cloud,
  Zap,
  Code2,
  Layout,
  FileJson,
  Layers,
  TestTube,
  Gauge,
  FileCode,
  Stars,
  Bot,
  FileType,
  Smartphone,
};

export default function Resume() {
  const { t } = useLanguage();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Header with Download Button */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          {t("resume.title")}
        </h1>
        <a
          href="/assets/docs/ricardo-resum.pdf"
          download="ricardo-resume.pdf"
          className="px-6 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors flex items-center gap-2 hover:scale-105 transform duration-200 shadow-lg"
        >
          <Download className="w-5 h-5" />
          {t("resume.downloadPDF")}
        </a>
      </div>

      {/* Personal Information */}
      <motion.section
        {...fadeIn}
        className="bg-black/40 rounded-xl p-8 backdrop-blur-sm border border-purple-500/30 shadow-xl"
      >
        <h2 className="text-3xl font-semibold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-6">
          {t("resume.personalInfo.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-white">
              {t("resume.personalInfo.name")}
            </h3>
            <p className="text-gray-300 text-lg">
              {t("resume.personalInfo.dob")}
            </p>
            <p className="text-gray-300 text-lg">
              {t("resume.personalInfo.nationality")}
            </p>
            <div className="flex items-center gap-3 text-gray-300 text-lg">
              <MapPin className="w-5 h-5 text-purple-400" />
              {t("resume.personalInfo.location")}
            </div>
          </div>
          <div className="space-y-4">
            <a
              href={`tel:${t("resume.personalInfo.phone")}`}
              className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors text-lg group hover:scale-105 transform duration-200"
            >
              <Phone className="w-5 h-5 text-purple-400 group-hover:scale-110 transform duration-200" />
              {t("resume.personalInfo.phone")}
            </a>
            <a
              href={`mailto:${t("resume.personalInfo.email")}`}
              className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors text-lg group hover:scale-105 transform duration-200"
            >
              <Mail className="w-5 h-5 text-purple-400 group-hover:scale-110 transform duration-200" />
              {t("resume.personalInfo.email")}
            </a>
            <a
              href={`https://${t("resume.personalInfo.linkedin")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors text-lg group hover:scale-105 transform duration-200"
            >
              <Linkedin className="w-5 h-5 text-purple-400 group-hover:scale-110 transform duration-200" />
              LinkedIn Profile
            </a>
            <a
              href={`https://${t("resume.personalInfo.github")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors text-lg group hover:scale-105 transform duration-200"
            >
              <Github className="w-5 h-5 text-purple-400 group-hover:scale-110 transform duration-200" />
              GitHub Profile
            </a>
          </div>
        </div>
      </motion.section>

      {/* Professional Summary */}
      <motion.section
        {...fadeIn}
        className="bg-black/40 rounded-xl p-8 backdrop-blur-sm border border-purple-500/30 shadow-xl"
      >
        <h2 className="text-3xl font-semibold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-6">
          {t("resume.summary.title")}
        </h2>
        <p className="text-gray-200 text-lg leading-relaxed">
          {t("resume.summary.content")}
        </p>
      </motion.section>

      {/* Work Experience */}
      <motion.section {...fadeIn} className="space-y-6">
        <h2 className="text-3xl font-semibold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          {t("resume.experience.title")}
        </h2>
        {t("resume.experience.jobs").map((job: any, index: number) => (
          <div
            key={job.company}
            className="bg-black/40 rounded-xl p-8 backdrop-blur-sm border border-purple-500/30 shadow-xl"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-purple-400 mb-2">
                  {job.company}
                </h3>
                <p className="text-xl text-gray-200 mb-2">{job.position}</p>
                {job.description && (
                  <p className="text-gray-300 text-lg">{job.description}</p>
                )}
              </div>
              <span className="text-gray-300 text-lg font-medium bg-purple-500/20 px-4 py-2 rounded-full">
                {job.period}
              </span>
            </div>
            <ul className="list-disc list-inside space-y-3 text-gray-200 text-lg pl-4">
              {job.achievements.map((achievement: string, i: number) => (
                <li
                  key={i}
                  className="hover:translate-x-2 transform duration-200 hover:text-purple-400"
                >
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.section>

      {/* Skills */}
      <motion.section
        {...fadeIn}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {/* Technical Skills */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            {t("resume.skills.title")}
          </h2>
          {Object.entries(t("resume.skills.categories")).map(
            ([key, category]: [string, any]) => (
              <div
                key={key}
                className="bg-black/40 rounded-xl p-8 backdrop-blur-sm border border-purple-500/30 shadow-xl"
              >
                <h3 className="text-2xl font-semibold text-purple-400 mb-6">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill: string) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-purple-500/20 text-gray-200 rounded-full text-base border border-purple-500/30 
                                 hover:scale-105 transform duration-200 hover:bg-purple-500/30 hover:border-purple-500/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          )}
        </div>

        {/* Soft Skills */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            {t("resume.softSkills.title")}
          </h2>
          <div className="bg-black/40 rounded-xl p-8 backdrop-blur-sm border border-purple-500/30 shadow-xl space-y-6">
            {t("resume.softSkills.skills").map((skill: any) => (
              <div
                key={skill.name}
                className="hover:translate-x-2 transform duration-200"
              >
                <h3 className="text-xl font-semibold text-purple-400 mb-2">
                  {skill.name}
                </h3>
                <p className="text-gray-200 text-lg">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Education, Languages, and Certifications */}
      <motion.section
        {...fadeIn}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            {t("resume.education.title")}
          </h2>
          {t("resume.education.schools").map((school: any) => (
            <div
              key={school.name}
              className="bg-black/40 rounded-xl p-6 backdrop-blur-sm border border-purple-500/30 shadow-xl 
                                            hover:scale-105 transform duration-200"
            >
              <h3 className="text-xl font-semibold text-purple-400 mb-2">
                {school.name}
              </h3>
              <p className="text-gray-200 text-lg mb-2">{school.degree}</p>
              <p className="text-gray-300">{school.period}</p>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            {t("resume.languages.title")}
          </h2>
          {t("resume.languages.list").map((lang: any) => (
            <div
              key={lang.language}
              className="bg-black/40 rounded-xl p-6 backdrop-blur-sm border border-purple-500/30 shadow-xl 
                                              hover:scale-105 transform duration-200"
            >
              <h3 className="text-xl font-semibold text-purple-400 mb-2">
                {lang.language}
              </h3>
              <p className="text-gray-200 text-lg">{lang.level}</p>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            {t("resume.certifications.title")}
          </h2>
          {t("resume.certifications.list").map((cert: string) => (
            <div
              key={cert}
              className="bg-black/40 rounded-xl p-6 backdrop-blur-sm border border-purple-500/30 shadow-xl 
                                     hover:scale-105 transform duration-200"
            >
              <p className="text-gray-200 text-lg">{cert}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Projects and Interests */}
      <motion.section
        {...fadeIn}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            {t("resume.projects.title")}
          </h2>
          <div className="bg-black/40 rounded-xl p-8 backdrop-blur-sm border border-purple-500/30 shadow-xl h-full">
            <ul className="space-y-4 text-gray-200 text-lg">
              {t("resume.projects.list").map((project: string) => (
                <li
                  key={project}
                  className="hover:translate-x-2 transform duration-200 hover:text-purple-400"
                >
                  {project}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            {t("resume.interests.title")}
          </h2>
          <div className="bg-black/40 rounded-xl p-8 backdrop-blur-sm border border-purple-500/30 shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t("resume.interests.list").map((interest: any) => {
                const Icon = iconMap[interest.icon];
                return (
                  <div
                    key={interest.name}
                    className="flex items-center gap-3 px-4 py-3 bg-purple-500/20 rounded-lg border border-purple-500/30 
                             hover:scale-105 transform duration-200 hover:bg-purple-500/30 hover:border-purple-500/50 group"
                  >
                    {Icon && (
                      <Icon className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                    )}
                    <span className="text-gray-200 text-base">
                      {interest.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
