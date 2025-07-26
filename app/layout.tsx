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
} from "lucide-react";

import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/lib/auth/auth-context";
import { Toaster } from "sonner";
import clsx from "clsx";

// Font setup (unchanged)
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: "swap" });

// Metadata (unchanged)
export const metadata: Metadata = { /* ... */ };

// Bottom Navigation - Strict brand colors in dark mode
function BottomNav() {
  const navItems = [
    { 
      href: "/", 
      icon: HomeIcon, 
      label: "Home",
      // Brand blue - light: #1d4ed8, dark: #60a5fa
      activeClass: "text-blue-600 dark:text-blue-400"
    },
    { 
      href: "/post-task", 
      icon: PlusSquare, 
      label: "Post",
      // Brand green - light: #16a34a (from your palette), dark: #4ade80
      activeClass: "text-blue-600 dark:text-blue-400"
    },
    { 
      href: "/chat", 
      icon: MessageSquare, 
      label: "Messages",
      // Brand purple - light: #7c3aed, dark: #a78bfa
      activeClass: "text-blue-600 dark:text-blue-400"
    },
    { 
      href: "/wallet", 
      icon: ShieldCheck, 
      label: "GoVault",
      // Brand yellow - light: #ca8a04, dark: #facc15
      activeClass: "text-blue-600 dark:text-blue-400"
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border md:hidden">
      <ul className="flex justify-around items-center h-16 px-2">
        {navItems.map(({ href, icon: Icon, label, activeClass }) => (
          <li key={label}>
            <Link
              href={href}
              className={clsx(
                "flex flex-col items-center gap-1 p-2 transition-colors",
                "text-muted-foreground hover:text-foreground", // Uses CSS variables
                activeClass // Applies brand colors
              )}
            >
              <Icon size={20} strokeWidth={2} className="transition-colors" />
              <span className="text-xs font-medium transition-colors">{label}</span>
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
          "pb-16 md:pb-0"
        )}
      >
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
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