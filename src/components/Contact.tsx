"use client";

import { useState } from "react";
import { Mail, Link2, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-10">
        {/* Section label */}
        <p className="text-primary-500 font-mono text-sm tracking-widest uppercase mb-2">
          Get in touch
        </p>
        <h2 className="text-4xl font-bold text-ink dark:text-white mb-4">
          Contact Me
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-16 max-w-xl">
          Have a project in mind, want to collaborate, or just want to say hi?
          My inbox is always open.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left — Contact info */}
          <div className="flex flex-col gap-8">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I&apos;m currently open to new opportunities — whether it&apos;s a
              full-time role, a freelance project, or an interesting
              collaboration. Feel free to reach out and I&apos;ll get back to
              you as soon as I can.
            </p>

            {/* Contact links */}
            <div className="flex flex-col gap-4">
              <a
                href="mailto:calebochai09@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="p-3 bg-accent-500/10 rounded-xl group-hover:bg-accent-500 transition-colors duration-200">
                  <Mail className="w-5 h-5 text-accent-500 group-hover:text-white transition-colors duration-200" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 dark:text-gray-500 font-mono mb-1">
                    Email
                  </p>
                  <p className="text-sm font-semibold text-ink dark:text-white group-hover:text-accent-500 transition-colors duration-200">
                    calebochai09@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/caleb-ochai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="p-3 bg-accent-500/10 rounded-xl group-hover:bg-accent-500 transition-colors duration-200">
                  <Link2 className="w-5 h-5 text-accent-500 group-hover:text-white transition-colors duration-200" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 dark:text-gray-500 font-mono mb-1">
                    LinkedIn
                  </p>
                  <p className="text-sm font-semibold text-ink dark:text-white group-hover:text-accent-500 transition-colors duration-200">
                    linkedin.com/in/caleb-ochai
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right — Contact form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="text-sm text-gray-600 dark:text-gray-400 mb-2 block">
                Your Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-ink dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-all duration-200"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 dark:text-gray-400 mb-2 block">
                Your Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-ink dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-all duration-200"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 dark:text-gray-400 mb-2 block">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Tell me about your project or just say hi..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-ink dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-all duration-200 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-accent-600 hover:bg-accent-700 disabled:opacity-60 text-white font-semibold rounded-full transition-all duration-200 shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40"
            >
              {status === "sending" ? (
                "Sending..."
              ) : status === "sent" ? (
                "Message Sent! ✓"
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>

            {status === "error" && (
              <p className="text-sm text-red-500 text-center">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
