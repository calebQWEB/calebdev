"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Software Engineer",
    company: "Rex Insurance",
    period: "Nov 2025 – Present",
    current: true,
    points: [
      "Built a custom Appraisal System for Retail Sales Managers (RSMs) from the ground up, replacing a generic HR process with a dedicated, role-based workflow featuring dashboards, multi-stage approval flows, and direct Kissflow integration — enabling 13 RSMs and 5 TSMs to manage sales performance efficiently.",
      "Developed a custom WordPress Applicant Tracking System (ATS) plugin that automatically filters job applications against configurable criteria, eliminating manual CV sorting for HR.",
      "Designed and delivered a Loss Adjuster Platform for the claims department, integrating with Kissflow to streamline task management, field inspections, and findings submission with attachments.",
      "Maintained the internal ePortal platform by resolving queries and technical issues for internal staff users.",
    ],
    stack: ["React", "Laravel", "MySQL", "Kissflow", "WordPress"],
  },
  {
    title: "Freelance Software Developer",
    company: "Self-Employed",
    period: "2023 – Present",
    current: false,
    points: [
      "Designed and developed single-page applications (SPAs) and responsive websites for clients across various industries.",
      "Built and updated UI features for existing client websites, ensuring performance, responsiveness, and cross-browser compatibility.",
    ],
    stack: ["React", "Next.js", "Tailwind CSS"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-10">
        {/* Section label */}
        <p className="text-violet-500 font-mono text-sm tracking-widest uppercase mb-2">
          Where I&apos;ve worked
        </p>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-16">
          Work Experience
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 -translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company + exp.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div className="w-full md:w-1/2 bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-violet-500/30 transition-all duration-200">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-violet-500 font-medium text-sm mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="text-xs font-mono text-gray-400 dark:text-gray-500 whitespace-nowrap">
                        {exp.period}
                      </span>
                      {exp.current && (
                        <span className="px-2 py-1 text-xs bg-violet-500/10 text-violet-500 rounded-full font-mono">
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Points */}
                  <ul className="flex flex-col gap-2 mb-5">
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
                      >
                        <span className="text-violet-500 mt-1 shrink-0">▹</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400 rounded-full border border-gray-200 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-violet-500 border-4 border-white dark:border-gray-900 z-10" />

                {/* Empty space for the other side */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
