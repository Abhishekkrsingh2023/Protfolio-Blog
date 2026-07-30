import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import { Space_Grotesk } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://developerabhishek.me"; 

export const metadata: Metadata = {
  // metadataBase lets you use relative paths everywhere below (OG images, etc.)
  metadataBase: new URL(siteUrl),

  // Title has a "template" so every page can just set its own short title,
  // and it auto-appends your site name — DRY, consistent branding
  title: {
    default: "Abhishek Singh | Full Stack Developer & DevOps Engineer",
    template: "%s | Abhishek Singh",
  },

  description:
    "Portfolio and blog of Abhishek Singh — Full Stack Developer & DevOps enthusiast building responsive, user-friendly web applications with modern technologies.",

  keywords: [
    "Abhishek Singh",
    "Full Stack Developer",
    "DevOps",
    "Next.js Developer",
    "Portfolio",
  ],

  authors: [{ name: "Abhishek Singh", url: siteUrl }],
  creator: "Abhishek Singh",
  publisher: "Abhishek Singh",

  // Tells crawlers "yes, index this, follow links" — explicit is better than default
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph — controls link previews on LinkedIn, Slack, Discord, Facebook
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Abhishek Singh",
    title: "Abhishek Singh | Full Stack Developer & DevOps Engineer",
    description:
      "Portfolio and blog of Abhishek Singh — Full Stack Developer & DevOps enthusiast.",
    images: [
      {
        url: "/my-pic.png", // resolved against metadataBase, put in /public
        width: 1200,
        height: 630,
        alt: "Abhishek Singh Portfolio",
      },
    ],
    locale: "en_US",
  },

  // Favicons / app icons
  icons: {
    icon: "/favicon.ico",
  },

  // Canonical URL for the homepage — prevents duplicate-content confusion
  alternates: {
    canonical: siteUrl,
  },
};

// viewport & theme-color moved here — Next.js 14+ separates this from `metadata`
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a", // match your brand/dark bg
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar >
          {children}
          <Footer />
        </Navbar>
      </body>
    </html>
  );
}
