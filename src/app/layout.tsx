import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/graphics/ParticleBackground";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans-custom",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-custom",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://developerabhishek.me";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Abhishek Singh | Backend & Full Stack Engineer",
    template: "%s | Abhishek Singh",
  },
  description:
    "Portfolio of Abhishek Singh — Backend & Full-Stack Developer specializing in Python, FastAPI, Node.js, distributed systems, and DevOps.",
  keywords: [
    "Abhishek Singh",
    "Backend Developer",
    "Python Developer",
    "FastAPI",
    "DevOps",
    "Full Stack",
    "Distributed Systems",
    "Next.js",
  ],
  authors: [{ name: "Abhishek Singh", url: siteUrl }],
  creator: "Abhishek Singh",
  publisher: "Abhishek Singh",
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
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Abhishek Singh",
    title: "Abhishek Singh | Backend & Full Stack Engineer",
    description:
      "Backend & Full-Stack Developer specializing in Python, FastAPI, Node.js, and scalable cloud systems.",
    images: [
      {
        url: "/images/my-pic.png",
        width: 1200,
        height: 630,
        alt: "Abhishek Singh Portfolio",
      },
    ],
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1120",
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
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0B1120] text-[#E8ECF4] font-sans relative overflow-x-hidden selection:bg-[#4FD1C5]/30 selection:text-white">
        <ParticleBackground />
        <Navbar>
          {children}
          <Footer />
        </Navbar>
      </body>
    </html>
  );
}
