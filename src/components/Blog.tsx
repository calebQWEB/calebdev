"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const latestPosts = [
  {
    title:
      "Building the RSM Appraisal System: Adjusting to a New Role Under Pressure",
    date: "December 2025",
    description:
      "What happens when you join a new company and immediately have to deliver a complex, role-based appraisal system from scratch? Here's how I navigated the pressure, made key technical decisions, and shipped on time.",
    slug: "rsm-appraisal-system-new-role",
    tag: "Story",
  },
  {
    title: "How I Built Viciniti — A Location-Based Marketplace",
    date: "February 2026",
    description:
      "The story behind building a full-stack, peer-to-peer community marketplace with verified profiles, real-time messaging, and secure payments via Flutterwave — and what I learned along the way.",
    slug: "building-viciniti-location-based-marketplace",
    tag: "Full Stack",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-10">
        {/* Section header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-violet-500 font-mono text-sm tracking-widest uppercase mb-2">
              My thoughts
            </p>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Latest Posts
            </h2>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm text-violet-500 hover:text-violet-600 font-semibold transition-colors duration-200 group"
          >
            View All Posts
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        {/* Latest 2 posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {latestPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:border-violet-500/30 hover:shadow-md transition-all duration-200 flex flex-col"
            >
              {/* Tag and date */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 text-xs font-mono bg-violet-500/10 text-violet-500 rounded-full">
                  {post.tag}
                </span>
                <span className="text-xs text-gray-400 dark:text-gray-500 font-mono">
                  {post.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 leading-snug">
                {post.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 flex-1">
                {post.description}
              </p>

              {/* Read more */}
              <Link
                href={`/blog/${post.slug}`}
                className="flex items-center gap-2 text-sm text-violet-500 hover:text-violet-600 font-semibold transition-colors duration-200 group"
              >
                Read More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
