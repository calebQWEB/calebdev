import type { Metadata } from "next";
import ContactCard from "./Components/ContactCard";

const SITE_URL = "https://calebdev-mu.vercel.app";
const PAGE_URL = `${SITE_URL}/card`;
const PREVIEW_IMAGE = `${SITE_URL}/card-preview.png`;

// ============ SEO + Open Graph + Twitter Card ============
// This is what powers both search-engine snippets AND the
// image preview that shows up when the link is shared.
export const metadata: Metadata = {
  title: "Caleb Ochai — Software Engineer | Contact Card",
  description:
    "Caleb Ochai is a full-stack software engineer building web apps, dashboards, and custom business tools. Get in touch — phone, WhatsApp, email, LinkedIn, and portfolio, all in one place.",
  keywords: [
    "Caleb Ochai",
    "software engineer",
    "full-stack developer",
    "web developer Lagos",
    "Nigeria software engineer",
    "contact card",
  ],
  authors: [{ name: "Caleb Ochai" }],
  alternates: {
    canonical: PAGE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "profile",
    url: PAGE_URL,
    title: "Caleb Ochai — Software Engineer",
    description:
      "Full-stack developer building web apps, dashboards, and custom business tools. Tap to save my contact or reach out.",
    images: [
      {
        url: PREVIEW_IMAGE,
        width: 1200,
        height: 630,
        alt: "Caleb Ochai, Software Engineer — contact card",
      },
    ],
    firstName: "Caleb",
    lastName: "Ochai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Caleb Ochai — Software Engineer",
    description:
      "Full-stack developer building web apps, dashboards, and custom business tools.",
    images: [PREVIEW_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Caleb Ochai",
  jobTitle: "Software Engineer",
  url: SITE_URL,
  image: PREVIEW_IMAGE,
  email: "mailto:calebochai09@gmail.com",
  telephone: "+2349030986268",
  sameAs: ["https://www.linkedin.com/in/caleb-ochai", SITE_URL],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
};

export default function CardPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactCard />
    </>
  );
}
