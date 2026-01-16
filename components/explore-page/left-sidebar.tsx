"use client"

import { Briefcase, Wallet, MessageCircle, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TasksWidget } from "@/components/explore-page/widgets/tasks-widget"
import { ImpactWidget } from "@/components/explore-page/widgets/impact-widget"

export function LeftSidebar() {
    const pathname = usePathname()

    const navItems = [
        { icon: Briefcase, label: "Jobs", href: "/explore", active: true },
        { icon: User, label: "Contacts", href: "/contacts" },
        { icon: MessageCircle, label: "Messages", href: "/chat", badge: "2" },
        { icon: Wallet, label: "GoVault Wallet", href: "/wallet" },
    ]

    return (
        <div className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2 scrollbar-hide space-y-8">

            {/* User Profile Hook */}
            <div className="flex items-center gap-3 pl-2 group cursor-pointer">
                <div className="relative">
                    <Avatar className="w-12 h-12 border-2 border-white dark:border-card ring-2 ring-gray-100 dark:ring-white/10 transition-transform group-hover:scale-105">
                        <AvatarImage src="/dp.jpg" />
                        <AvatarFallback>ME</AvatarFallback>
                    </Avatar>
                    <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-card rounded-full"></div>
                </div>
                <div>
                    <h3 className="font-bold text-gray-900 dark:text-gray-100 leading-tight group-hover:text-brand-primary transition-colors">Kaielix</h3>
                    <p className="text-xs text-gray-500 font-medium">Student • Level 400</p>
                </div>
            </div>

            {/* Navigation */}
            <nav className="space-y-1">
                {navItems.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className={`flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-200 group relative overflow-hidden ${item.href === pathname || item.active
                            ? "bg-white dark:bg-white/5 text-brand-primary font-bold shadow-sm border border-gray-100 dark:border-white/5"
                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-gray-200"
                            }`}
                    >
                        <div className="flex items-center gap-3 relative z-10">
                            <item.icon className={`w-5 h-5 transition-colors ${item.active ? "text-brand-primary" : "text-gray-400 group-hover:text-brand-primary"
                                }`} />
                            <span className="text-sm">{item.label}</span>
                        </div>
                        {item.badge && (
                            <span className="bg-red-500 text-white text-[10px] min-w-[20px] h-5 flex items-center justify-center rounded-full font-bold px-1.5 shadow-sm">
                                {item.badge}
                            </span>
                        )}
                        {item.active && (
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-brand-primary rounded-r-full" />
                        )}
                    </Link>
                ))}
            </nav>

            {/* Widgets */}
            <TasksWidget />
            <ImpactWidget />

        </div>
    )
}
