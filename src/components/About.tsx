export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-10">
        {/* Section label */}
        <p className="text-violet-500 font-mono text-sm tracking-widest uppercase mb-2">
          Get to know me
        </p>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-16">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left — Avatar placeholder */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72">
              {/* Decorative border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-violet-500/30 translate-x-4 translate-y-4" />
              {/* Avatar box */}
              <div className="relative w-full h-full rounded-2xl bg-gray-200 dark:bg-gray-800 flex flex-col items-center justify-center border border-gray-200 dark:border-gray-700 overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-24 h-24 text-gray-400 dark:text-gray-600"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
                <p className="text-xs text-gray-400 dark:text-gray-600 mt-2 font-mono">
                  photo coming soon
                </p>
              </div>
            </div>
          </div>

          {/* Right — Bio */}
          <div className="flex flex-col gap-6">
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
              I&apos;m a Software Engineer with over 4 years of experience
              designing and building full-stack web applications, internal
              tools, and system integrations. I bring a strong mathematical
              foundation and a product-oriented mindset to everything I build.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
              I hold a B.Sc. in Mathematics from the University of Abuja, which
              gives me a unique analytical edge when approaching complex
              engineering problems. I enjoy working across the entire stack —
              from crafting pixel-perfect frontends to architecting robust
              backend systems.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mt-2">
              {[
                { label: "Years of Experience", value: "4+" },
                { label: "Projects Delivered", value: "10+" },
                { label: "Background", value: "Mathematics" },
                { label: "Location", value: "Nigeria 🇳🇬" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700"
                >
                  <p className="text-2xl font-bold text-violet-500">
                    {item.value}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Download CV button */}
            <div className="mt-2">
              <a
                href="/caleb-ochai-cv.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-full transition-all duration-200 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                  />
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
