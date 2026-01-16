"use client"

import { CheckCircle } from "lucide-react"

export function ImpactWidget() {
    return (
        <div className="bg-gradient-to-br from-[#1657FD] to-blue-700 rounded-2xl p-5 text-white shadow-lg shadow-brand-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-brand-accent/20 rounded-full blur-xl -ml-6 -mb-6" />

            <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4 opacity-90">
                    <CheckCircle className="w-4 h-4 text-brand-accent" />
                    <span className="text-xs font-bold uppercase tracking-wider">Weekly Impact</span>
                </div>

                <div className="flex items-end gap-1 mb-1">
                    <span className="text-3xl font-black">12</span>
                    <span className="text-sm font-medium mb-1 opacity-80">/ 15 tasks</span>
                </div>
                <p className="text-[10px] text-blue-100 mb-3">You're on fire! 🔥 Top 5% earner.</p>

                <button className="w-full bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg py-2 text-xs font-bold transition-colors">
                    View Wallet
                </button>
            </div>
        </div>
    )
}
