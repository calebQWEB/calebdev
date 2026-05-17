import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import rehypePrettyCode from "rehype-pretty-code";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

const mdxOptions = {
  mdxOptions: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "one-dark-pro",
          keepBackground: true,
        },
      ],
    ],
  },
};

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-10">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-violet-500 transition-colors duration-200 mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Blog
        </Link>

        {/* Tag and date */}
        <div className="flex items-center gap-4 mb-6">
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

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 leading-tight">
          {post.title}
        </h1>

        {/* MDX Content */}
        <div
          className="
          prose prose-gray dark:prose-invert max-w-none
          prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
          prose-p:text-gray-600 dark:prose-p:text-gray-400 prose-p:leading-relaxed
          prose-code:text-violet-500 prose-code:bg-violet-500/10 prose-code:px-1 prose-code:rounded prose-code:font-mono prose-code:text-sm
          prose-pre:p-0 prose-pre:bg-transparent prose-pre:border-0
          [&_pre]:rounded-xl [&_pre]:overflow-x-auto [&_pre]:p-5 [&_pre]:my-6 [&_pre]:border [&_pre]:border-gray-700
          [&_code]:bg-transparent [&_code]:text-inherit [&_code]:p-0
        "
        >
          <MDXRemote source={post.content} options={mdxOptions as any} />
        </div>
      </div>
    </main>
  );
}
