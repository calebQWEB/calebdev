import {
  Monitor,
  Server,
  Database,
  Brain,
  Wrench,
  FlaskConical,
} from "lucide-react";

const skillGroups = [
  {
    category: "Frontend",
    icon: Monitor,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "CSS3", "Sass"],
  },
  {
    category: "Backend",
    icon: Server,
    skills: ["Laravel", "Node.js", "Python", "REST APIs", "PHP"],
  },
  {
    category: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "Firebase", "Supabase"],
  },
  {
    category: "AI & Emerging Tech",
    icon: Brain,
    skills: ["LangChain", "LangGraph"],
  },
  {
    category: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "GitHub", "Docker", "Kubernetes", "WordPress", "Kissflow"],
  },
  {
    category: "Testing",
    icon: FlaskConical,
    skills: ["Jest", "pytest"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-10">
        {/* Section label */}
        <p className="text-primary-500 font-mono text-sm tracking-widest uppercase mb-2">
          What I work with
        </p>
        <h2 className="text-4xl font-bold text-ink dark:text-white mb-16">
          Skills & Tech Stack
        </h2>

        {/* Skill groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.category}
                className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-primary-500/30 transition-all duration-200"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 bg-primary-500/10 rounded-lg">
                    <Icon className="w-5 h-5 text-primary-500" />
                  </div>
                  <h3 className="text-base font-semibold text-ink dark:text-white">
                    {group.category}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm font-mono bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700 hover:border-accent-500 hover:text-accent-500 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
