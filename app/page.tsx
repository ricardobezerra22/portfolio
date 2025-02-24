"use client";

import { useLanguage } from "../components/language-provider";
import { motion } from "framer-motion";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  link: string;
  image: string | StaticImageData;
  tags?: string[];
}

export default function Home() {
  const { t } = useLanguage();
  const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>(
    {}
  );

  const projects = t("home.featured.projects") as unknown as Project[];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            {t("home.title")}
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            {t("home.subtitle")}
          </p>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-7xl mx-auto space-y-12">
          <motion.div className="text-center space-y-4" {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              {t("home.featured.title")}
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              {t("home.featured.description")}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {projects.map((project: Project, index: number) => (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                key={project.title}
                className="group"
                aria-label={`Visit ${project.title} website`}
              >
                <motion.div
                  className="bg-black/40 rounded-xl overflow-hidden border border-purple-500/30 hover:border-purple-500/50 
                           transition-all duration-300 shadow-xl group-hover:scale-[1.02] transform h-[500px] flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative h-48 bg-purple-500/10">
                    {!loadedImages[project.title] && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
                      </div>
                    )}
                    <Image
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                      fill
                      className={`object-cover transition-opacity duration-300 ${
                        loadedImages[project.title]
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                      onLoadingComplete={() =>
                        setLoadedImages((prev: any) => ({
                          ...prev,
                          [project.title]: true,
                        }))
                      }
                      priority={index < 2}
                    />
                  </div>
                  <div className="p-6 space-y-4 flex-1 flex flex-col">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-gray-300 text-sm line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500/50 scrollbar-track-transparent pr-2">
                      <div className="flex flex-wrap gap-2">
                        {project.tags?.map((tag: string) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full whitespace-nowrap"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </a>
            ))}
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link
              href="/projects"
              className="inline-block px-6 py-3 bg-purple-500/20 text-purple-300 rounded-full 
                       hover:bg-purple-500/30 transition-colors hover:scale-105 transform duration-200"
            >
              {t("home.view_all_projects")} →
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
