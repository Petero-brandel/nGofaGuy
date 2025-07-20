import type React from "react"
import "./globals.css"
import { Inter, Montserrat } from "next/font/google"
import type { Metadata } from "next"
import Link from "next/link"
import {
  Home as HomeIcon,
  PlusSquare,
  MessageSquare,
  ShieldCheck,
} from "lucide-react" // Lucide icons

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })

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
    description: "Get things done or earn on campus with GofaGuy – post errands or run them for cash.",
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
    description: "A student-powered errand app for campus. Post errands. Earn. Connect.",
    creator: "@yourhandle",
    images: ["/og-image.png"],
  },
}

// Modern Bottom Navigation Component
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
            href="/messages"
            className="group flex flex-col items-center gap-1 text-gray-500 hover:text-purple-600 transition-colors"
          >
            <span className="rounded-full p-2 group-hover:bg-purple-50 transition">
              <MessageSquare size={28} strokeWidth={2.2} />
            </span>
            <span className="text-xs font-semibold tracking-wide">Messages</span>
          </Link>
        </li>
        <li>
          <Link
            href="/govault"
            className="group flex flex-col items-center gap-1 text-gray-500 hover:text-yellow-600 transition-colors"
          >
            <span className="rounded-full p-2 group-hover:bg-yellow-50 transition">
              <ShieldCheck size={28} strokeWidth={2.2} />
            </span>
            <span className="text-xs font-semibold tracking-wide">GoVault</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white text-gray-900 font-inter antialiased relative">
        {children}
        <BottomNav />
      </body>
    </html>
  )
}

// Runtime and cache settings
export const dynamic = "force-dynamic"
export const revalidate = 60
export const fetchCache = "force-no-store"
export const runtime = "edge"
export const preferredRegion = "auto"
export const dynamicParams = false
export const fetchCacheKey = "gofaguy-layout"
export const fetchCacheTtl = 60
export const fetchCacheMaxAge = 60
