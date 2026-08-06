import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://calebdev-mu.vercel.app"),
  title: {
    default: "Caleb Ochai | Software Engineer",
    template: "%s | Caleb Ochai",
  },
  description:
    "Software Engineer with 4+ years of experience building full-stack web applications. Specializing in React, Next.js, Laravel, and Python. Based in Nigeria.",
  keywords: [
    "Software Engineer Nigeria",
    "Full Stack Developer Lagos",
    "Next.js Developer Nigeria",
    "React Developer Nigeria",
    "Laravel Developer Nigeria",
    "Caleb Ochai",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Caleb Ochai" }],
  creator: "Caleb Ochai",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://calebdev-mu.vercel.app",
    title: "Caleb Ochai | Software Engineer",
    description:
      "Software Engineer with 4+ years of experience building full-stack web applications. Specializing in React, Next.js, Laravel, and Python. Based in Nigeria.",
    siteName: "Caleb Ochai Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Caleb Ochai | Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Caleb Ochai | Software Engineer",
    description:
      "Software Engineer with 4+ years of experience building full-stack web applications. Specializing in React, Next.js, Laravel, and Python. Based in Nigeria.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${firaCode.variable} antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-white font-[var(--font-inter)]`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
