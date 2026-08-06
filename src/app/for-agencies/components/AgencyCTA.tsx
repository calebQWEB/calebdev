import Link from "next/link";
import { Mail, MapPin, Clock } from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.048c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 11.001-4.124 2.062 2.062 0 010 4.124zM7.114 20.452H3.56V9h3.554v11.452z" />
    </svg>
  );
}

const contactDetails = [
  {
    icon: Mail,
    label: "calebochai09@gmail.com",
    href: "mailto:calebochai09@gmail.com",
  },
  {
    icon: LinkedinIcon,
    label: "Caleb Ochai",
    href: "https://www.linkedin.com/in/caleb-ochai/",
  },
  {
    icon: MapPin,
    label: "Lagos, Nigeria",
    href: null,
  },
  {
    icon: Clock,
    label: "Usually within 24 hours",
    href: null,
  },
];

export default function AgencyCTA() {
  return (
    <section id="contact" className="py-[120px] bg-white dark:bg-gray-950">
      <div className="max-w-3xl mx-auto px-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
          Need a Development Partner for Your Next Client Project?
        </h2>
        <p className="mt-6 text-[12px] text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mx-auto">
          Whether you need help with a client portal, internal dashboard,
          marketplace, workflow system, or another custom application, I'd be
          happy to discuss how I can support your team.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:calebochai09@gmail.com"
            className="px-5 py-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-full transition-all duration-200 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40"
          >
            Start a Conversation
          </a>
          <Link
            href="/"
            className="px-5 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-full border border-gray-300 dark:border-gray-700 hover:border-violet-500 hover:text-violet-500 transition-colors text-center"
          >
            View My Portfolio
          </Link>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-4">
          {contactDetails.map(({ icon: Icon, label, href }) =>
            href ? (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="flex items-center gap-2 text-[12px] text-gray-600 dark:text-gray-300 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
              >
                <Icon className="w-4 h-4" strokeWidth={2} />
                {label}
              </a>
            ) : (
              <span
                key={label}
                className="flex items-center gap-2 text-[12px] text-gray-600 dark:text-gray-300"
              >
                <Icon className="w-4 h-4" strokeWidth={2} />
                {label}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
