"use client";

import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-gray-950">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary-700/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-10 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-32">
        {/* Left side */}
        <div className="flex flex-col items-start">
          {/* Greeting */}
          <p className="text-primary-500 font-mono text-sm mb-4 tracking-widest uppercase">
            Hi there, I&apos;m
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-6xl font-bold text-ink dark:text-white mb-4 tracking-tight leading-tight">
            Caleb <span className="text-primary-500">Ochai</span>
          </h1>

          {/* Typing animation */}
          <div className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-6 font-mono flex items-center gap-2">
            <span className="text-primary-500">&gt;</span>
            <Typewriter
              options={{
                strings: [
                  "Software Engineer",
                  "Full Stack Developer",
                  "React & Next.js Engineer",
                  "Laravel & Python Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </div>

          {/* Tagline */}
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-8 max-w-md">
            I design and build full-stack web applications — from responsive
            frontends to scalable backend APIs. I bring a product mindset and a
            strong engineering foundation to every project I work on.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white font-semibold rounded-full transition-all duration-200 shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white font-semibold rounded-full transition-all duration-200"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right side — Code card */}
        <div className="hidden md:flex justify-center items-center">
          <div className="w-full max-w-md bg-gray-900 dark:bg-gray-800/50 rounded-2xl shadow-2xl shadow-primary-500/10 border border-gray-700/50 overflow-hidden">
            {/* Code card header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 dark:bg-gray-900/80 border-b border-gray-700/50">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-xs text-gray-400 font-mono">
                caleb.ts
              </span>
            </div>

            {/* Code content */}
            <div className="p-6 font-mono text-sm leading-7">
              <p>
                <span className="text-primary-400">const </span>
                <span className="text-blue-300">caleb </span>
                <span className="text-white">= {"{"}</span>
              </p>
              <p className="pl-6">
                <span className="text-green-300">role</span>
                <span className="text-white">: </span>
                <span className="text-yellow-300">
                  &quot;Software Engineer&quot;
                </span>
                <span className="text-white">,</span>
              </p>
              <p className="pl-6">
                <span className="text-green-300">experience</span>
                <span className="text-white">: </span>
                <span className="text-yellow-300">&quot;4+ years&quot;</span>
                <span className="text-white">,</span>
              </p>
              <p className="pl-6">
                <span className="text-green-300">stack</span>
                <span className="text-white">: [</span>
              </p>
              <p className="pl-12">
                <span className="text-yellow-300">&quot;React&quot;</span>
                <span className="text-white">, </span>
                <span className="text-yellow-300">&quot;Next.js&quot;</span>
                <span className="text-white">, </span>
                <span className="text-yellow-300">&quot;Laravel&quot;</span>
                <span className="text-white">,</span>
              </p>
              <p className="pl-12">
                <span className="text-yellow-300">&quot;TypeScript&quot;</span>
                <span className="text-white">, </span>
                <span className="text-yellow-300">&quot;Python&quot;</span>
              </p>
              <p className="pl-6">
                <span className="text-white">],</span>
              </p>
              <p className="pl-6">
                <span className="text-green-300">available</span>
                <span className="text-white">: </span>
                <span className="text-orange-400">true</span>
                <span className="text-white">,</span>
              </p>
              <p className="pl-6">
                <span className="text-green-300">location</span>
                <span className="text-white">: </span>
                <span className="text-yellow-300">&quot;Nigeria 🇳🇬&quot;</span>
              </p>
              <p>
                <span className="text-white">{"}"}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
