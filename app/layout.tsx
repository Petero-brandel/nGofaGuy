// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Link from "next/link";
import {
  HomeIcon,
  PlusSquare,
  MessageSquare,
  ShieldCheck,
  UserRound,
} from "lucide-react";

import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/lib/auth/auth-context";
import { Toaster } from "sonner";
import clsx from "clsx";

// Font setup
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: "swap" });

// Metadata
export const metadata: Metadata = {
  title: "GofaGuy | Campus Tasks & Runners",
  description: "GofaGuy is the easiest way to post or complete tasks on campus. Connect with runners, fund your GoVault wallet, and get things done instantly!",
  keywords: ["GofaGuy", "Campus Runners", "Post Task", "Earn on Campus", "GoVault Wallet", "Task Marketplace"],
  openGraph: {
    title: "GofaGuy | Campus Tasks & Runners",
    description: "GofaGuy is the easiest way to post or complete tasks on campus. Connect with runners, fund your GoVault wallet, and get things done instantly!",
    url: "https://gofaguy.com",
    siteName: "GofaGuy",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GofaGuy Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GofaGuy | Campus Tasks & Runners",
    description: "Post tasks, find campus runners, and get paid on your terms.",
    images: ["/og-image.jpg"],
    creator: "@gofaguy",
  },
  metadataBase: new URL("https://gofaguy.com"),
};

// Shared Nav Items
const navItems = [
  { href: "/", icon: HomeIcon, label: "Home", activeClass: "text-blue-600 dark:text-blue-400" },
  { href: "/post-task", icon: PlusSquare, label: "Post", activeClass: "text-blue-600 dark:text-blue-400" },
  { href: "/chat", icon: MessageSquare, label: "Messages", activeClass: "text-blue-600 dark:text-blue-400" },
  { href: "/wallet", icon: ShieldCheck, label: "GoVault", activeClass: "text-blue-600 dark:text-blue-400" },
  { href: "/profile", icon: UserRound, label: "Profile", activeClass: "text-blue-600 dark:text-blue-400" },
];

// Bottom Nav (Mobile)
function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border md:hidden">
      <ul className="flex justify-around items-center h-16 px-2">
        {navItems.map(({ href, icon: Icon, label, activeClass }) => (
          <li key={label}>
            <Link
              href={href}
              className={clsx(
                "flex flex-col items-center gap-1 p-2 transition-colors",
                "text-muted-foreground hover:text-primary dark:hover:text-white dark:active:text-white dark:focus:text-white focus:text-primary ",
                activeClass
              )}
            >
              <Icon size={20} strokeWidth={2} />
              <span className="text-xs font-medium">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Top Nav (Desktop)
function TopNav() {
  return (
    <nav className="hidden md:flex fixed top-0 left-0 right-0 z-40 bg-background border-b border-border h-14 items-center px-6 shadow-sm">
      <ul className="flex gap-6 items-center">
        {navItems.map(({ href, icon: Icon, label, activeClass }) => (
          <li key={label}>
            <Link
              href={href}
              className={clsx(
                "flex items-center gap-2 transition-colors font-medium text-muted-foreground hover:text-primary dark:hover:text-white dark:active:text-white dark:focus:text-white focus:text-primary",
                activeClass
              )}
            >
              <Icon size={20} strokeWidth={2} />
              <span>{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Layout Component
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head />
      <body
        className={clsx(
          inter.variable,
          montserrat.variable,
          "font-inter antialiased min-h-screen bg-background text-foreground",
          "pb-16 md:pt-14 md:pb-0"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <TopNav />
            <main className="min-h-[calc(100vh-4rem)]">{children}</main>
            <Toaster
              position="top-right"
              toastOptions={{
                className: "bg-card text-card-foreground border border-border shadow-lg",
                unstyled: true,
              }}
            />
            <BottomNav />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
