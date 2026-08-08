import { Handshake, ClipboardList, Code2, Rocket, Check } from "lucide-react";

const steps = [
  {
    icon: Handshake,
    title: "You Win the Project",
    description:
      "You manage the client relationship and define the project requirements.",
  },
  {
    icon: ClipboardList,
    title: "We Plan the Build",
    description:
      "We review the technical scope together, identify any risks, and agree on timelines before development begins.",
  },
  {
    icon: Code2,
    title: "Development Under Your Brand",
    description:
      "I develop the application under your brand while keeping you informed with clear communication and progress updates.",
  },
  {
    icon: Rocket,
    title: "You Deliver With Confidence",
    description:
      "You present the finished solution to your client, with optional ongoing support if future improvements are needed.",
  },
];

const trustPoints = [
  "White-label collaboration",
  "Your clients remain yours",
  "Flexible engagement",
  "Available for one-off or ongoing work",
];

export default function AgencyProcess() {
  return (
    <section className="pt-18 lg:pt-30 bg-earth-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-ink dark:text-white tracking-tight">
            How We Work Together
          </h2>
          <p className="mt-6 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            A simple, transparent process that lets you stay focused on your
            client while I handle the technical implementation behind the
            scenes.
          </p>
        </div>

        <div className="mt-[60px] grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step) => (
            <div
              key={step.title}
              className="flex flex-col items-center text-center"
            >
              <step.icon
                className="w-9 h-9 text-primary-900"
                strokeWidth={1.75}
              />
              <h3 className="mt-4 text-base font-semibold text-ink dark:text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-[12px] text-gray-600 dark:text-gray-300 leading-relaxed max-w-[240px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-[60px] max-w-xl mx-auto rounded-2xl border border-earth-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-8 py-8">
          <h3 className="text-base font-semibold text-ink dark:text-white text-center">
            What You Can Expect
          </h3>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
            {trustPoints.map((point) => (
              <span
                key={point}
                className="flex items-center gap-2 text-[12px] text-gray-600 dark:text-gray-300"
              >
                <Check
                  className="w-4 h-4 text-primary-900 flex-shrink-0"
                  strokeWidth={2.5}
                />
                {point}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
