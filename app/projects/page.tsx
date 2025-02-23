"use client";

import { useLanguage } from "../../components/language-provider";
import Image from "next/image";
import saasone from "../../public/assets/images/saason.png";
import teamculture from "../../public/assets/images/teamculture.png";
import nutriflow from "../../public/assets/images/nutriflow.png";
import bitcoin from "../../public/assets/images/bitcoin.png";
import cards from "../../public/assets/images/cards.png";
import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "SaaS One",
    description:
      "A tool for aggregating SaaS platforms authenticated via Google Workspace.",
    image: saasone,
    techStack: [
      "Vue.js",
      "Node.js",
      "MongoDB",
      "Storybook",
      "Cypress",
      "GraphQL",
      "Google Cloud Platform",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "BitBucket",
      "Jest",
      "Cucumber Preprocessor",
      "Jenkins",
      "Docker",
      "Kubernetes",
      "Redis",
      "Git",
    ],
    link: "https://saas.one/",
    date: "2023-05-15",
  },
  {
    name: "TeamCulture",
    description: "An HR management SaaS developed with Vue.js and Node.js",
    image: teamculture,
    techStack: [
      "Vue.js",
      "Node.js",
      "Cypress",
      "MongoDB",
      "CI/CD",
      "Storybook",
      "Jest",
      "Cucumber Preprocessor",
      "GraphQL",
      "Customer Success",
      "Agile Methodologies",
    ],
    link: "https://teamculture.com.br",
    date: "2023-02-01",
  },
  {
    name: "NutriFlow",
    description: "AI-powered diet generator with PDF export functionality.",
    image: nutriflow,
    techStack: [
      "Next.js",
      "Node.js",
      "OpenAI",
      "Docker",
      "MongoDB",
      "Stripe",
      "Google Cloud Platform",
      "App Engine",
      "Redis",
      "Git",
    ],
    link: "https://nutriflow.online/",
    date: "2024-11-20",
  },
  {
    name: "BitCoinLiveTracker",
    description: "Real-time Bitcoin price tracker from coingecko API.",
    image: bitcoin,
    techStack: ["Vue.js", "Vue Router", "Vuex", "Coingecko API", "Vuetify"],
    link: "https://bitcoinlivetracker.netlify.app/",
    date: "2022-10-20",
  },
  {
    name: "Cards Marketplace",
    description: "Simple card marketplace built with Vue.js",
    image: cards,
    techStack: ["Vue.js", "Vue Router", "Vuex", "Vuetify", "Scss"],
    link: "https://yu-gi-oh-marketplace.netlify.app/",
    date: "2023-02-20",
  },
];

export default function Projects() {
  const { t } = useLanguage();
  const [nameFilter, setNameFilter] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const filteredProjects = projects
    .filter((project) =>
      project.name.toLowerCase().includes(nameFilter.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });

  return (
    <div className="space-y-12 mt-12">
      <div className="text-center space-y-4">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {t("projects.title")}
        </motion.h1>
      </div>

      <motion.div 
        className="flex flex-col sm:flex-row gap-4 sm:items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <input
          type="text"
          placeholder={t("projects.filterPlaceholder")}
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          className="px-4 py-2 rounded-full bg-purple-800/50 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 border border-purple-700/50 transition-all duration-200"
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 rounded-full bg-purple-800/50 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 border border-purple-700/50 transition-all duration-200"
        >
          <option value="name">{t("projects.sortOptions.name")}</option>
          <option value="date">{t("projects.sortOptions.date")}</option>
        </select>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.name}
            className="bg-black/50 rounded-lg overflow-hidden backdrop-blur-md group hover:scale-[1.02] transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index < 6}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                <span className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors transform hover:scale-105">
                  {t("projects.viewProject")}
                </span>
              </a>
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-200">
                {project.name}
              </h3>
              <p className="text-sm text-purple-400/80">
                {new Date(project.date).toLocaleDateString()}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm px-3 py-1 rounded-full bg-purple-800/50 text-purple-200 border border-purple-700/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
