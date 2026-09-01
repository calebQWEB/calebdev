"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

type Experience = {
  title: string;
  company: string;
  period: string;
  current: boolean;
  points: string[];
  defaultVisible?: number;
  stack: string[];
};

const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Rex Insurance",
    period: "Nov 2025 – Present",
    current: true,
    points: [
      "Built a custom Appraisal System for Retail Sales Managers from scratch, replacing SeamlessHR's per-employee licensing with a dedicated, role-based workflow. Delivered dashboards for RSMs and TSMs, multi-stage approvals, and Kissflow integration, serving 18 users (13 RSMs, 5 TSMs) and eliminating ongoing per-seat licensing costs.",
      "Designed and delivered a Loss Adjuster Platform for the claims department, integrating with Kissflow so claims officers can initiate tasks via API. Replaced an error-prone email-based assignment process with a structured dashboard for task management, field submissions (with attachments), and task closure, serving over 60 field users (loss adjusters, engineers, and surveyors).",
      "Redesigned and rebuilt the company's corporate website (50+ pages, including Blogs, News, and Financial Reports) with a custom WordPress theme, modular CSS, and ACF-driven templates, covering 28 insurance products and giving the marketing team full self-service content control.",
      "Integrated direct-purchase checkout via Paystack for Motor and all 8 protection product lines; other general products route through the company's self-service portal.",
      "Developed a custom WordPress Applicant Tracking System (ATS) plugin that automatically filters job applications against configurable criteria, removing the need for HR to sort CVs manually.",
    ],
    defaultVisible: 3,
    stack: ["React", "Laravel", "MySQL", "Kissflow", "WordPress", "Paystack"],
  },
  {
    title: "Freelance Software Developer",
    company: "Self-Employed",
    period: "2023 – Present",
    current: false,
    points: [
      "Developed BrokerProcess, a full-stack broker operations platform (Laravel, React, MySQL) that automates Excel/CSV import and cleaning of policy schedules (premiums, dates, statuses, loss ratios), with a role-based approval workflow (Viewer / Ops Manager) designed to replace an email-based claims/renewal approval process prone to lost threads.",
      "Designed and developed single-page applications (SPAs) and responsive websites for clients across various industries.",
    ],
    stack: ["React", "Laravel", "MySQL", "Next.js", "Tailwind CSS"],
  },
];

function ExperienceCard({ exp }: { exp: Experience }) {
  const [expanded, setExpanded] = useState(false);
  const defaultVisible = exp.defaultVisible ?? exp.points.length;
  const hasToggle = exp.points.length > defaultVisible;
  const visiblePoints = expanded ? exp.points : exp.points.slice(0, defaultVisible);

  return (
      <div className="w-full md:w-1/2 bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-accent-500/30 transition-all duration-200">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-ink dark:text-white">
              {exp.title}
            </h3>
            <p className="text-primary-500 font-medium text-sm mt-1">
              {exp.company}
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
          <span className="text-xs font-mono text-gray-400 dark:text-gray-500 whitespace-nowrap">
            {exp.period}
          </span>
            {exp.current && (
                <span className="px-2 py-1 text-xs bg-accent-500/10 text-accent-500 rounded-full font-mono">
              Current
            </span>
            )}
          </div>
        </div>

        {/* Points */}
        <ul className="flex flex-col gap-2 mb-3">
          {visiblePoints.map((point, i) => (
              <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
              >
                <span className="text-primary-500 mt-1 shrink-0">▹</span>
                {point}
              </li>
          ))}
        </ul>

        {/* Show more / less toggle */}
        {hasToggle && (
            <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                className="flex items-center gap-1 text-xs font-mono text-primary-500 hover:text-accent-500 transition-colors duration-200 mb-5"
            >
              {expanded ? "Show less" : `Show ${exp.points.length - defaultVisible} more`}
              <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      expanded ? "rotate-180" : ""
                  }`}
              />
            </button>
        )}
        {!hasToggle && <div className="mb-2" />}

        {/* Stack */}
        <div className="flex flex-wrap gap-2 mt-2">
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
  );
}

export default function Experience() {
  return (
      <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-10">
          {/* Section label */}
          <p className="text-primary-500 font-mono text-sm tracking-widest uppercase mb-2">
            Where I&apos;ve worked
          </p>
          <h2 className="text-4xl font-bold text-ink dark:text-white mb-16">
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
                    <ExperienceCard exp={exp} />

                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-white dark:border-gray-900 z-10" />

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