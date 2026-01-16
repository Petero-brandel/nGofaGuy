"use client"

import { motion } from "framer-motion"
import { TrendingUp, Award } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AdCarousel } from "@/components/explore-page/widgets/ad-carousel"

export function ExploreSidebar() {
    return (
        <div className="space-y-6 sticky top-24">
            {/* Widget 1: Dynamic Ad Carousel */}
            <AdCarousel />

            {/* Widget 2: Trending Gigs */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white dark:bg-card rounded-xl border border-gray-200 dark:border-white/10 overflow-hidden shadow-sm"
            >
                <div className="px-4 py-3 bg-gray-50 dark:bg-white/5 border-b border-gray-100 dark:border-white/5 flex items-center justify-between">
                    <h3 className="font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2 text-sm">
                        <TrendingUp className="w-4 h-4 text-brand-primary" />
                        Trending Gigs
                    </h3>
                    <Link href="/explore" className="text-xs text-brand-primary font-medium hover:underline">View All</Link>
                </div>

                <div className="divide-y divide-gray-100 dark:divide-white/5">
                    {[1, 2, 3].map((i) => (
                        <Link key={i} href={`/job/${i}`} className="p-4 flex items-start gap-3 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer group">
                            <div className="font-bold text-gray-400 text-sm mt-0.5">0{i}</div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-brand-primary transition-colors line-clamp-1 mb-0.5">
                                    {i === 1 ? "Research Assistant Needed" : i === 2 ? "Ushering for Convocation" : "Graphic Designer for Week"}
                                </h4>
                                <div className="flex items-center gap-2">
                                    <p className="text-xs text-brand-accent font-bold">
                                        {i === 1 ? "₦15,000" : i === 2 ? "₦5,000" : "₦10,000"}
                                    </p>
                                    <span className="text-[10px] text-gray-400">• {i}h ago</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </motion.div>

            {/* Widget 3: Top Earners */}
            <div className="bg-white dark:bg-card rounded-xl border border-gray-200 dark:border-white/10 p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                    <Award className="w-4 h-4 text-orange-500" />
                    <h3 className="font-bold text-sm text-gray-900 dark:text-gray-100">Top Earners This Week</h3>
                </div>
                <div className="flex -space-x-2 overflow-hidden mb-3">
                    {[1, 2, 3, 4, 5].map(i => (
                        <Avatar key={i} className="inline-block ring-2 ring-white w-8 h-8">
                            <AvatarImage src="/dp.jpg" />
                            <AvatarFallback>U{i}</AvatarFallback>
                        </Avatar>
                    ))}
                </div>
                <p className="text-xs text-gray-500">
                    Join <strong>200+ students</strong> earning this week!
                </p>
            </div>

            {/* Footer Links */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 px-2 text-[10px] text-gray-400 font-medium">
                <Link href="#" className="hover:text-gray-600">Advertising</Link>
                <Link href="#" className="hover:text-gray-600">Business</Link>
                <Link href="#" className="hover:text-gray-600">About</Link>
                <Link href="#" className="hover:text-gray-600">Privacy</Link>
                <span>© 2026 GofaGuy NG</span>
            </div>
        </div>
    )
}
