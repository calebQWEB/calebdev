import {
  Layers,
  ShieldCheck,
  Zap,
  MessageCircle,
  TrendingUp,
  Handshake,
} from "lucide-react";

const benefits = [
  {
    icon: Layers,
    title: "White-Label Collaboration",
    description:
      "Your client remains your client. I work behind the scenes under your brand.",
  },
  {
    icon: ShieldCheck,
    title: "No Client Poaching",
    description:
      "Your clients remain yours. I work behind the scenes and never market my services to your clients.",
  },
  {
    icon: Zap,
    title: "Custom Functionality",
    description:
      "Client portals, dashboards, marketplaces, booking systems, workflow automation, APIs, payment integrations.",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description:
      "Regular updates, realistic timelines, and no disappearing halfway through a project.",
  },
  {
    icon: TrendingUp,
    title: "Scale Without Hiring",
    description:
      "Take on larger or more technical projects without committing to another full-time developer.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Collaboration",
    description:
      "Reliable communication, transparent timelines, and a commitment to delivering work that reflects well on your agency.",
  },
];

export default function AgencyWhyPartner() {
  return (
    <section
      id="partners"
      className="py-8 lg:py-19 bg-earth-50 dark:bg-gray-950"
    >
      <div className="max-w-6xl mx-auto px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-ink dark:text-white tracking-tight">
          Why Agencies Partner With Me
        </h2>
        <p className="mt-4 text-[14px] text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
          Whether your team is at capacity or a client asks for functionality
          beyond your usual projects, I step in as your technical
          partner—working behind the scenes while you stay focused on your
          clients.
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="p-5 rounded-3xl bg-white dark:bg-gray-900 border border-earth-200 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-accent-200 dark:hover:border-accent-900 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-500/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary-500" strokeWidth={2} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-ink dark:text-white">
                {title}
              </h3>
              <p className="mt-2 text-[12px] text-gray-600 dark:text-gray-300 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
