"use client"

import { Menu, Briefcase, User, MessageCircle, Wallet } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { TasksWidget } from "@/components/explore-page/widgets/tasks-widget"
import { ImpactWidget } from "@/components/explore-page/widgets/impact-widget"

export function MobileMenu() {
    const pathname = usePathname()

    const navItems = [
        { icon: Briefcase, label: "Jobs", href: "/explore", active: true },
        { icon: User, label: "Contacts", href: "/contacts" },
        { icon: MessageCircle, label: "Messages", href: "/messages", badge: "2" },
        { icon: Wallet, label: "GoVault Wallet", href: "/wallet" },
    ]

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-gray-500 hover:text-gray-900 -ml-2">
                    <Menu className="w-6 h-6" />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[350px] overflow-y-auto p-0">
                <SheetHeader className="p-4 border-b border-border/40 bg-gray-50/50 dark:bg-white/5 text-left">
                    <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10 border border-border">
                            <AvatarImage src="/dp.jpg" />
                            <AvatarFallback>ME</AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                            <SheetTitle className="text-base">Kaielix</SheetTitle>
                            <p className="text-xs text-gray-500">Student • Level 400</p>
                        </div>
                    </div>
                </SheetHeader>

                <div className="p-4 space-y-6">
                    {/* Navigation */}
                    <nav className="space-y-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors ${item.href === pathname
                                        ? "bg-brand-primary/10 text-brand-primary font-bold"
                                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5"
                                    }`}
                            >
                                <item.icon className={`w-5 h-5 ${item.href === pathname ? "text-brand-primary" : "text-gray-500"}`} />
                                <span className="text-sm">{item.label}</span>
                                {item.badge && (
                                    <span className="ml-auto bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                                        {item.badge}
                                    </span>
                                )}
                            </Link>
                        ))}
                    </nav>

                    <div className="h-px bg-border/50" />

                    {/* Widgets in Drawer */}
                    <div className="space-y-6">
                        <section>
                            <h3 className="px-2 mb-2 text-xs font-bold text-gray-400 uppercase tracking-wider">Dashboard</h3>
                            <ImpactWidget />
                        </section>

                        <section>
                            <TasksWidget />
                        </section>
                    </div>

                    <div className="pt-4 text-xs text-center text-gray-400">
                        <p>© 2026 GofaGuy NG</p>
                        <div className="flex justify-center gap-3 mt-2">
                            <Link href="#">Privacy</Link>
                            <Link href="#">Terms</Link>
                            <Link href="#">Logout</Link>
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
