"use client";

import { motion } from "framer-motion";
import { Computer, ExternalLink, Star } from "lucide-react";

const projects = [
  {
    name: "Viciniti",
    featured: true,
    description:
      "A full-stack, location-based community marketplace that enables users within the same geographic area to buy and sell items, as well as offer and hire local services. The platform facilitates trust-based peer-to-peer commerce through verified profiles, secure payments, and real-time messaging. Revenue is generated through a 5% transaction fee on all completed payments, processed via Flutterwave.",
    stack: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Flutterwave",
      "Real-time Messaging",
    ],
    github: null,
    live: "https://viciniti-frontend.vercel.app/",
  },
  {
    name: "AI Analyst",
    featured: false,
    description:
      "An AI-powered data analysis tool that extracts insights from Excel files and provides AI-generated analysis and recommendations. Features a conversational chat interface for querying and exploring uploaded data, with support for downloadable visualizations (bar, pie, and line charts) and PDF export.",
    stack: ["Next.js", "Python", "Supabase", "Tailwind CSS"],
    github: "https://github.com/calebQWEB/AI-analyst",
    live: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-10">
        {/* Section label */}
        <p className="text-primary-500 font-mono text-sm tracking-widest uppercase mb-2">
          What I&apos;ve built
        </p>
        <h2 className="text-4xl font-bold text-ink dark:text-white mb-16">
          Projects
        </h2>

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border transition-all duration-200 hover:shadow-lg ${
                project.featured
                  ? "border-accent-500/40 hover:border-accent-500"
                  : "border-gray-100 dark:border-gray-800 hover:border-accent-500/30"
              }`}
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-6 right-6 flex items-center gap-1 px-3 py-1 bg-accent-500/10 text-accent-500 rounded-full text-xs font-mono">
                  <Star className="w-3 h-3 fill-accent-500" />
                  Featured
                </div>
              )}

              {/* Project name */}
              <h3 className="text-2xl font-bold text-ink dark:text-white mb-3">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-6 max-w-3xl">
                {project.description}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full border border-gray-200 dark:border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-accent-500 dark:hover:text-accent-400 transition-colors duration-200"
                  >
                    <Computer className="w-4 h-4" />
                    View Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-accent-500 dark:hover:text-accent-400 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
