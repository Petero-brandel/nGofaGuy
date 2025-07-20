import type React from "react";
import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import type { Metadata } from "next";
import Link from "next/link";
import {
  HomeIcon,
  PlusSquare,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import { AuthProvider } from "@/lib/auth/auth-context";
import { Toaster } from "sonner";

// Font variables
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

// SEO Metadata
export const metadata: Metadata = {
  title: "GofaGuy – Campus Errand Network",
  description:
    "GofaGuy is a student-powered platform where students post errands and others accept to run them for a fee. Built for campus life, by students.",
  keywords: [
    "GofaGuy",
    "campus errands",
    "student jobs",
    "on-demand help",
    "student services",
    "Nigeria campus",
    "task delivery",
  ],
  authors: [{ name: "Peter Obumneme", url: "https://gofaguy.com" }],
  creator: "Peter Obumneme, Founder of GofaGuy",
  metadataBase: new URL("https://gofaguy.com"),
  openGraph: {
    title: "GofaGuy – Campus Errand Network",
    description:
      "Get things done or earn on campus with GofaGuy – post errands or run them for cash.",
    url: "https://gofaguy.com",
    siteName: "GofaGuy",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GofaGuy Campus Errand App",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GofaGuy – Campus Errand Network",
    description:
      "A student-powered errand app for campus. Post errands. Earn. Connect.",
    creator: "@yourhandle",
    images: ["/og-image.png"],
  },
};

// Bottom Navigation (Mobile Only)
function BottomNav() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-white/95 via-white/90 to-white/80 backdrop-blur border-t border-gray-200 shadow-2xl md:hidden"
      style={{ height: 72 }}
    >
      <ul className="flex justify-around items-center h-full px-2">
        <li>
          <Link
            href="/"
            className="group flex flex-col items-center gap-1 text-gray-500 hover:text-blue-600 transition-colors"
          >
            <span className="rounded-full p-2 group-hover:bg-blue-50 transition">
              <HomeIcon size={28} strokeWidth={2.2} />
            </span>
            <span className="text-xs font-semibold tracking-wide">Home</span>
          </Link>
        </li>
        <li>
          <Link
            href="/post-task"
            className="group flex flex-col items-center gap-1 text-gray-500 hover:text-green-600 transition-colors"
          >
            <span className="rounded-full p-2 group-hover:bg-green-50 transition shadow-lg bg-gradient-to-br from-green-400/10 to-green-200/10">
              <PlusSquare size={28} strokeWidth={2.2} />
            </span>
            <span className="text-xs font-semibold tracking-wide">Post</span>
          </Link>
        </li>
        <li>
          <Link
            href="/chat"
            className="group flex flex-col items-center gap-1 text-gray-500 hover:text-purple-600 transition-colors"
          >
            <span className="rounded-full p-2 group-hover:bg-purple-50 transition">
              <MessageSquare size={28} strokeWidth={2.2} />
            </span>
            <span className="text-xs font-semibold tracking-wide">
              Messages
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/wallet"
            className="group flex flex-col items-center gap-1 text-gray-500 hover:text-yellow-600 transition-colors"
          >
            <span className="rounded-full p-2 group-hover:bg-yellow-50 transition">
              <ShieldCheck size={28} strokeWidth={2.2} />
            </span>
            <span className="text-xs font-semibold tracking-wide">
              GoVault
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

// Main Layout Component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="bg-white text-gray-900 font-inter antialiased relative pb-20 lg:pb-0">
        <AuthProvider>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "white",
                border: "1px solid #e5e7eb",
                color: "#374151",
              },
            }}
          />
        </AuthProvider>
        <BottomNav />
      </body>
    </html>
  );
}

// Runtime and Caching Hints
export const dynamic = "force-dynamic";
export const revalidate = 60;
export const fetchCache = "force-no-store";
export const runtime = "edge";
export const preferredRegion = "auto";
export const dynamicParams = false;
export const fetchCacheKey = "gofaguy-layout";
export const fetchCacheTtl = 60;
export const fetchCacheMaxAge = 60;
