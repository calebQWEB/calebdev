import { ShieldCheck, Handshake } from "lucide-react";

export default function AgencyHero() {
  return (
    <section className="min-h-[80vh] flex items-center bg-white dark:bg-gray-950 pt-24">
      <div className="max-w-6xl mx-auto px-10 w-full">
        <p className="text-xs font-medium text-violet-500 mb-4 tracking-wide uppercase">
          For Web Design Agencies
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight max-w-3xl">
          Your White-Label Development Partner for Complex Client Projects.
        </h1>
        <p className="mt-4 text-base md:text-[14px] text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
          From client portals and internal dashboards to payment integrations
          and custom business applications, I help web design agencies take on
          projects beyond traditional websites—all under your brand.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="px-5 py-2 bg-violet-600 hover:bg-violet-700 text-white text-[12px] font-semibold rounded-full transition-all duration-200 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40"
          >
            See My Work
          </a>
          <a
            href="#contact"
            className="px-5 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-[12px] font-semibold rounded-full border border-gray-300 dark:border-gray-700 hover:border-violet-500 hover:text-violet-500 transition-colors text-center"
          >
            Book a Call
          </a>
        </div>

        <div className="my-10 inline-flex flex-wrap items-center gap-1 rounded-full border border-gray-200 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-900/50 backdrop-blur-sm p-1">
          <span className="flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300">
            <ShieldCheck
              className="w-4 h-4 text-violet-500"
              strokeWidth={2.5}
            />
            White-label development
          </span>
          <span className="flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300">
            <ShieldCheck
              className="w-4 h-4 text-violet-500"
              strokeWidth={2.5}
            />
            No client poaching
          </span>

          <span className="hidden sm:block w-px h-4 bg-gray-200 dark:bg-gray-800" />

          <span className="flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300">
            <Handshake className="w-4 h-4 text-violet-500" strokeWidth={2.5} />
            Available for contract work
          </span>
        </div>
      </div>
    </section>
  );
}
