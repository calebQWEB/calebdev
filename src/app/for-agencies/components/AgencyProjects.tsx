import Image from "next/image";

const projects = [
  {
    badge: "Internal Business Application",
    title: "Retail Sales Appraisal Platform",
    image: "/images/appraisal-platform.png",
    narrative:
      "The retail appraisal process relied on a manual system involving multiple levels of management, causing delays and making it difficult to track progress.",
    featureGroups: [
      {
        group: "Workflow",
        items: [
          "Multi-level approvals",
          "Role-based permissions",
          "Audit trail",
        ],
      },
      {
        group: "Reporting",
        items: ["Performance scoring", "Dashboard", "Notifications"],
      },
    ],
    stack: ["Laravel", "React", "MySQL"],
    outcome:
      "Reduced appraisal turnaround time and eliminated manual tracking across multiple departments.",
    relevantFor: "Custom dashboards • Workflow automation • Client portals",
  },
  {
    badge: "Marketplace Platform",
    title: "Location-Based Marketplace",
    image: "/images/marketplace-platform.png",
    narrative:
      "Built a location-based marketplace that enables people to buy, sell, and hire trusted local service providers within their community. The platform includes authentication, location-aware listings, messaging, payment processing, and an administrative dashboard.",
    featureGroups: [
      {
        group: "Marketplace",
        items: [
          "Location-aware search",
          "User profiles",
          "Messaging",
          "Listings",
          "Reviews",
        ],
      },
      {
        group: "Commerce",
        items: [
          "Flutterwave payments",
          "Transaction management",
          "Dispute handling",
        ],
      },
    ],
    stack: ["Python", "Next.js", "PostgreSQL"],
    outcome:
      "Delivered a production-ready marketplace that combines e-commerce and local service discovery within a single platform, complete with payments, messaging, and dispute management.",
    relevantFor:
      "Payment integrations • Marketplace development • Custom business applications",
  },
  {
    badge: "Customer Self-Service Platform",
    title: "Insurance Purchase & Renewal Platform",
    image: "/images/insurance-platform.png",
    narrative:
      "Customers needed to purchase and renew insurance policies online without an agent or account creation. I built a streamlined purchase experience with renewal logic and third-party integrations, across a 50+ page custom WordPress site backed by a Laravel/PHP engine.",
    featureGroups: [
      {
        group: "Customer Experience",
        items: [
          "Online purchase flow",
          "Renewal workflow",
          "Policy management",
        ],
      },
      {
        group: "Integrations",
        items: ["Payment integration", "Third-party APIs"],
      },
    ],
    stack: ["WordPress (Custom Theme)", "Laravel/PHP"],
    outcome:
      "Simplified the customer journey by reducing friction in policy purchases and renewals.",
    relevantFor:
      "Custom WordPress development • Payment integrations • Client-facing portals",
  },
];

export default function AgencyProjects() {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
          Proof Through Real Projects
        </h2>
        <p className="mt-4 text-[14px] text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
          Here's a selection of production applications I've built,
          demonstrating the kind of custom functionality I can deliver for your
          clients.
        </p>

        <div className="mt-16 flex flex-col gap-24">
          {projects.map((project, index) => {
            const reversed = index % 2 === 1;
            return (
              <div
                key={project.title}
                className={`flex flex-col ${
                  reversed ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-10 lg:gap-16 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-earth-200 dark:border-gray-800 shadow-sm">
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="w-full lg:w-1/2">
                  <span className="inline-block rounded-full border border-violet-200 dark:border-violet-900 bg-violet-50 dark:bg-violet-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-violet-600 dark:text-violet-400">
                    {project.badge}
                  </span>

                  <h3 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white tracking-tight">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-300">
                    {project.narrative}
                  </p>

                  <div className="mt-6 rounded-2xl border border-earth-200 dark:border-gray-800 bg-earth-50/60 dark:bg-gray-900/40 p-5 space-y-4">
                    {project.featureGroups.map((fg) => (
                      <div key={fg.group}>
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">
                          {fg.group}
                        </p>
                        <div className="mt-1.5 grid grid-cols-2 gap-x-4 gap-y-1">
                          {fg.items.map((item) => (
                            <span
                              key={item}
                              className="text-[13px] text-gray-600 dark:text-gray-300"
                            >
                              — {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="mt-6 pl-4 border-l-2 border-violet-500 text-[13px] text-gray-700 dark:text-gray-200 italic leading-relaxed">
                    {project.outcome}
                  </p>

                  <p className="mt-6 text-[12px] text-gray-400 dark:text-gray-500">
                    Relevant for agencies:{" "}
                    <span className="text-gray-600 dark:text-gray-300">
                      {project.relevantFor}
                    </span>
                  </p>

                  <p className="mt-3 text-[11px] text-gray-400 dark:text-gray-600">
                    Built with {project.stack.join(" • ")}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
