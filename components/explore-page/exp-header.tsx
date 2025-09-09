"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, Bell } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const BRAND_COLOR = "#1657FD";

const navItems = [
  { name: "Jobs", href: "/" },
  { name: "Contacts", href: "/" },
  { name: "Explore", href: "/explore" },
  { name: "Messages", href: "/chat" },
  { name: "GoVault Wallet", href: "/wallet" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-6 py-3 bg-white/80 backdrop-blur border-b border-gray-100 shadow-xl">
      <div className="flex items-center gap-6">
        <Link href="/">
          <Image
            src="/android-chrome-192x192.png"
            alt="Logo"
            width={44}
            height={44}
            className="rounded-2xl transition-transform duration-200 shadow-sm hover:scale-110"
          />
        </Link>

        <div className="hidden md:flex items-center bg-gray-50 border border-gray-200 rounded-full px-5 py-2 shadow-sm focus-within:ring-2 focus-within:ring-[#1FF3A5]">
          <Search className="w-5 h-5 mr-2" style={{ color: BRAND_COLOR }} />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-base w-40 placeholder:text-gray-400"
          />
        </div>

        <nav className="hidden md:flex gap-2">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-2 px-5 py-2 rounded-full transition-all duration-150 group ${
                  active
                    ? "bg-[#1657FD] text-white font-light shadow-xl"
                    : "text-black hover:bg-gray-100 hover:text-[#1657FD]"
                }`}
              >
                <span className="hidden lg:inline font-semibold tracking-tight">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="flex items-center gap-5">
        <button className="p-2 rounded-full hover:bg-gray-100 transition shadow-md relative group">
          <Bell className="w-5 h-5 text-black group-hover:text-[#1657FD]" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-700 rounded-full border-2 border-white" />
        </button>

        <Link href="/profile">
          <Avatar
            className="w-11 h-11 border-2 shadow-xl hover:scale-105 transition-transform duration-200"
            style={{ borderColor: BRAND_COLOR }}
          >
            <AvatarImage src="/avatar.png" alt="User Avatar" />
            <AvatarFallback>PG</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </header>
  );
}
