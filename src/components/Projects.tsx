"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Computer,
  ExternalLink,
  Star,
  ChevronLeft,
  ChevronRight,
  ImageIcon,
  X,
} from "lucide-react";

type Project = {
  name: string;
  featured: boolean;
  description: string;
  stack: string[];
  github: string | null;
  live: string | null;
  images: string[];
};

const projects: Project[] = [
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
    images: [
      "/images/viciniti/viciniti-png-3.png",
      "/images/viciniti/viciniti-buy.png",
      "/images/viciniti/viciniti-chargeback.png",
      "/images/viciniti/viciniti-message.png",
    ],
  },
  {
    name: "Rex Insurance Website",
    featured: false,
    description:
        "A modern, responsive website for Rex Insurance, built with WordPress and Elementor. The site features a clean design, easy navigation, and integrates seamlessly with the company's branding and messaging.",
    stack: ["wordpress", "elementor", "php", "javascript"],
    github: null,
    live: null,
    images: [
      "/images/rexwebsite/rexwebsite.png",
      "/images/rexwebsite/rexwebsite-1.png",
      "/images/rexwebsite/rexwebsite-2.png",
    ],
  },
  {
    name: "Retail Appraisal System",
    featured: false,
    description:
        "The retail appraisal process relied on a manual system involving multiple levels of management, causing delays and making it difficult to track progress.",
    stack: ["react", "laravel", "tailwindcss", "mysql"],
    github: null,
    live: null,
    images: [
      "/images/rsmappraisal/appraisal-platform.png",
      "/images/rsmappraisal/appraisal-1.png",
      "/images/rsmappraisal/appraisal-2.png",
    ],
  },
  {
    name: "Insurance Broker Ops Dashboard",
    featured: false,
    description:
        "A comprehensive dashboard for insurance brokers to manage client information, policies, and claims.",
    stack: ["react", "laravel", "mysql", "tailwindcss"],
    github: null,
    live: null,
    images: [
      "/images/brokerprocess/brokerprocess-1.png",
      "/images/brokerprocess/brokerprocess.png",
      "/images/brokerprocess/brokerprocess-3.png",
    ],
  },
  {
    name: "Application Tracking System",
    featured: false,
    description:
        "custom WordPress Applicant Tracking System (ATS) plugin that automatically filters job applications against configurable criteria, removing the need for HR to sort CVs manually.",
    stack: ["php", "custom plugin"],
    github: null,
    live: null,
    images: [
      "/images/atsplugin/atsplugin-1.png",
      "/images/atsplugin/atsplugin.png",
    ],
  },
  {
    name: "Risk Inspection Platform",
    featured: false,
    description:
        "A comprehensive platform for the claims department, integrating with Kissflow so claims officers can initiate tasks via API. Replaced an error-prone email-based assignment process with a structured dashboard for task management, field submissions (with attachments), and task closure, serving over 60 field users (loss adjusters, engineers, and surveyors).",
    stack: ["react", "laravel", "mysql", "tailwindcss"],
    github: null,
    live: null,
    images: [
      "/images/riskinspection/riskinspection.png",
      "/images/riskinspection/riskinspection-1.png",
      "/images/riskinspection/riskinspection-2.png",
    ],
  },
];

const INITIAL_COUNT = 4;
const LOAD_MORE_COUNT = 2;

type ProjectCarouselProps = {
  images: string[];
  projectName: string;
  onImageClick: (src: string) => void;
};

function ProjectCarousel({ images, projectName, onImageClick }: ProjectCarouselProps) {
  const [current, setCurrent] = useState(0);
  const total = images.length;
  const touchStartX = useRef<number | null>(null);
  const isSwipe = useRef(false);

  const goTo = (i: number) => setCurrent((i + total) % total);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    isSwipe.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.touches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 10) isSwipe.current = true;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        goTo(current - 1);
      } else {
        goTo(current + 1);
      }
    }
    touchStartX.current = null;
  };

  return (
      <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 mb-6 group">
        {/* Slide */}
        <button
            type="button"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onClick={() => {
              if (isSwipe.current) return;
              if (images[current]) onImageClick(images[current]);
            }}
            className="w-full h-full flex items-center justify-center cursor-zoom-in touch-pan-y"
            aria-label={`Preview ${projectName} screenshot ${current + 1}`}
        >
          {images[current] ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                  src={images[current]}
                  alt={`${projectName} screenshot ${current + 1}`}
                  className="w-full h-full object-cover pointer-events-none"
              />
          ) : (
              <div className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600">
                <ImageIcon className="w-8 h-8" />
                <span className="text-xs font-mono">
              Image {current + 1} of {total}
            </span>
              </div>
          )}
        </button>

        {/* Prev / Next controls */}
        {total > 1 && (
            <>
              <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goTo(current - 1);
                  }}
                  aria-label="Previous image"
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/80 dark:bg-gray-950/80 text-gray-700 dark:text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white dark:hover:bg-gray-950"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goTo(current + 1);
                  }}
                  aria-label="Next image"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/80 dark:bg-gray-950/80 text-gray-700 dark:text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white dark:hover:bg-gray-950"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Dot indicators */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, i) => (
                    <button
                        key={i}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          goTo(i);
                        }}
                        aria-label={`Go to image ${i + 1}`}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                            i === current
                                ? "bg-accent-500 w-4"
                                : "bg-white/70 dark:bg-gray-500"
                        }`}
                    />
                ))}
              </div>
            </>
        )}
      </div>
  );
}

type ImageLightboxProps = {
  src: string | null;
  onClose: () => void;
};

function ImageLightbox({ src, onClose }: ImageLightboxProps) {
  return (
      <AnimatePresence>
        {src && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={onClose}
                className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 backdrop-blur-sm p-6"
            >
              <motion.img
                  key={src}
                  src={src}
                  alt="Project preview"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  onClick={(e) => e.stopPropagation()}
                  className="max-w-5xl max-h-[85vh] w-auto h-auto rounded-xl shadow-2xl object-contain"
              />
              <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close preview"
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
        )}
      </AnimatePresence>
  );
}

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visibleProjects.map((project, index) => (
                <motion.div
                    key={project.name}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: (index % INITIAL_COUNT) * 0.1 }}
                    className={`relative bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border transition-all duration-200 hover:shadow-lg flex flex-col ${
                        project.featured
                            ? "border-accent-500/40 hover:border-accent-500"
                            : "border-gray-100 dark:border-gray-800 hover:border-accent-500/30"
                    }`}
                >
                  {/* Featured badge */}
                  {project.featured && (
                      <div className="absolute top-6 right-6 flex items-center gap-1 px-3 py-1 bg-accent-500/10 text-accent-500 rounded-full text-xs font-mono z-10">
                        <Star className="w-3 h-3 fill-accent-500" />
                        Featured
                      </div>
                  )}

                  {/* Image carousel */}
                  <ProjectCarousel
                      images={project.images}
                      projectName={project.name}
                      onImageClick={setPreviewSrc}
                  />

                  {/* Project name */}
                  <h3 className="text-2xl font-bold text-ink dark:text-white mb-3">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Stack */}
                  {project.stack.length > 0 && (
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
                  )}

                  {/* Links */}
                  <div className="flex items-center gap-4 mt-auto">
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

          {/* Load more */}
          {hasMore && (
              <div className="flex justify-center mt-12">
                <button
                    type="button"
                    onClick={() => setVisibleCount((c) => c + LOAD_MORE_COUNT)}
                    className="px-6 py-3 rounded-full border border-gray-200 dark:border-gray-700 text-sm font-mono text-ink dark:text-white hover:border-accent-500 hover:text-accent-500 dark:hover:text-accent-400 transition-colors duration-200"
                >
                  Load more
                </button>
              </div>
          )}
        </div>

        {/* Fullscreen image preview */}
        <ImageLightbox src={previewSrc} onClose={() => setPreviewSrc(null)} />
      </section>
  );
}