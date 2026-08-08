"use client";

import Image from "next/image";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import styles from "../card.module.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-mono",
});

function saveContact() {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:Ochai;Caleb;;;",
    "FN:Caleb Ochai",
    "TITLE:Software Engineer",
    "TEL;TYPE=CELL:+2349030986268",
    "EMAIL:calebochai09@gmail.com",
    "URL:https://calebdev-mu.vercel.app/",
    "X-SOCIALPROFILE;TYPE=linkedin:https://www.linkedin.com/in/caleb-ochai",
    "END:VCARD",
  ].join("\r\n");

  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "Caleb-Ochai.vcf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

const LINKS = [
  {
    href: "tel:+2349030986268",
    label: "Phone",
    value: "0903 098 6268",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    href: "https://wa.me/2349030986268",
    label: "WhatsApp",
    value: "Message me",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12.05 2C6.55 2 2.1 6.45 2.1 11.95c0 1.87.51 3.63 1.4 5.13L2 22l5.06-1.46a9.96 9.96 0 0 0 4.99 1.34h.004c5.5 0 9.95-4.45 9.95-9.95C21.99 6.45 17.55 2 12.05 2zm0 18.1h-.003a8.14 8.14 0 0 1-4.15-1.14l-.298-.177-3.006.868.9-2.93-.194-.301a8.13 8.13 0 0 1-1.25-4.34c0-4.5 3.66-8.16 8.16-8.16 2.18 0 4.23.85 5.77 2.4a8.1 8.1 0 0 1 2.39 5.77c0 4.5-3.67 8.16-8.16 8.16z" />
      </svg>
    ),
  },
  {
    href: "mailto:calebochai09@gmail.com",
    label: "Email",
    value: "calebochai09@gmail.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <path d="m22 6-10 7L2 6" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/caleb-ochai",
    label: "LinkedIn",
    value: "linkedin.com/in/caleb-ochai",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.048c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 11.001-4.124 2.062 2.062 0 010 4.124zM7.114 20.452H3.56V9h3.554v11.452z" />
      </svg>
    ),
  },
  {
    href: "https://calebdev-mu.vercel.app/",
    label: "Portfolio",
    value: "calebdev-mu.vercel.app",
    external: true,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

export default function ContactCard() {
  return (
    <div
      className={`${styles.page} ${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <div className={styles.card}>
        <div className={styles.avatarWrap}>
          <div className={styles.avatar}>
            <Image
              src="/caleb-photo.jpg"
              alt="Caleb Ochai"
              width={184}
              height={184}
              priority
            />
          </div>
          <div className={styles.avatarRing} />
        </div>
        <h1 className={styles.name}>Caleb Ochai</h1>
        <p className={styles.role}>
          <span className={styles.prompt}>&gt;</span>&nbsp;Software Engineer
          <span className={styles.cursor}>_</span>
        </p>
        <p className={styles.tagline}>
          Full-stack developer building web apps, dashboards, and custom
          business tools.
        </p>

        <button className={styles.saveBtn} onClick={saveContact}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
          Save Contact
        </button>

        <div className={styles.links}>
          {LINKS.map((link) => (
            <a
              key={link.label}
              className={styles.linkRow}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
            >
              <div className={styles.iconWrap}>{link.icon}</div>
              <div className={styles.linkText}>
                <p className={styles.linkLabel}>{link.label}</p>
                <p className={styles.linkValue}>{link.value}</p>
              </div>
            </a>
          ))}
        </div>

        <p className={styles.footer}>Caleb Ochai · Lagos, Nigeria</p>
      </div>
    </div>
  );
}
