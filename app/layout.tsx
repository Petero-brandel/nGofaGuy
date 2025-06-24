import type React from "react"
import "./globals.css"
import { Inter, Montserrat } from "next/font/google"
import type { Metadata } from "next"

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
      <body className="bg-white text-gray-900 font-inter antialiased">{children}</body>
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
