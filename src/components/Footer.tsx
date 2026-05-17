import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left — Name */}
        <Link
          href="/"
          className="text-base font-bold text-gray-900 dark:text-white tracking-tight"
        >
          Caleb<span className="text-violet-500">.</span>
        </Link>

        {/* Middle — Links */}
        <div className="flex items-center gap-6">
          {["About", "Projects", "Blog", "Contact"].map((item) => (
            <a
              key={item}
              href={item === "Blog" ? "/blog" : `#${item.toLowerCase()}`}
              className="text-xs font-mono text-gray-400 dark:text-gray-500 hover:text-violet-500 dark:hover:text-violet-400 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right — Copyright */}
        <p className="text-xs font-mono text-gray-400 dark:text-gray-500">
          © {new Date().getFullYear()} Caleb Ochai
        </p>
      </div>
    </footer>
  );
}
