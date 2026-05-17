import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles and thoughts by Caleb Ochai on software engineering, full-stack development, and stuff.",
};

export default function BlogPage() {
  const allPosts = getAllPosts();

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-10">
        {/* Back to home */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-violet-500 transition-colors duration-200 mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Portfolio
        </Link>

        {/* Header */}
        <p className="text-violet-500 font-mono text-sm tracking-widest uppercase mb-2">
          My thoughts
        </p>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Blog
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-16">
          I write about things I build, lessons I learn, and ideas I find
          interesting.
        </p>

        {/* All posts */}
        <div className="flex flex-col gap-6">
          {allPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-violet-500/30 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 text-xs font-mono bg-violet-500/10 text-violet-500 rounded-full">
                  {post.tag}
                </span>
                <span className="text-xs text-gray-400 dark:text-gray-500 font-mono">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                  })}
                </span>
              </div>

              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-violet-500 transition-colors duration-200">
                {post.title}
              </h2>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {post.description}
              </p>

              <div className="flex items-center gap-2 text-sm text-violet-500 font-semibold">
                Read More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
