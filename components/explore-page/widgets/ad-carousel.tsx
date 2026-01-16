"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

const ADS = [
    {
        id: 1,
        title: "Flamingo 🦩",
        subtitle: "Rice & Chicken Special",
        tag: "Student Meal",
        discount: "-15%",
        desc: "Get a plate of Jollof Rice + Grilled Chicken for just ₦1,200.",
        bgClass: "bg-[#FF4500]",
        btnClass: "bg-[#FF4500] hover:bg-[#E03E00]",
        pattern: "opacity-20 bg-[url('https://www.transparenttextures.com/patterns/food.png')]",
        icon: "🍗"
    },
    {
        id: 2,
        title: "Campus Tech",
        subtitle: "Laptop Repair & Sales",
        tag: "Tech Support",
        discount: "Free Diagnosis",
        desc: "Slow laptop? We fix hardware & software issues in 24h.",
        bgClass: "bg-blue-600",
        btnClass: "bg-blue-600 hover:bg-blue-700",
        pattern: "opacity-20 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]",
        icon: "💻"
    },
    {
        id: 3,
        title: "Neon Social",
        subtitle: "End of Sem Party",
        tag: "Event",
        discount: "Early Bird",
        desc: "Tickets selling fast! Grab yours for the biggest night.",
        bgClass: "bg-purple-600",
        btnClass: "bg-purple-600 hover:bg-purple-700",
        pattern: "opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]",
        icon: "🎉"
    }
]

export function AdCarousel() {
    const [currentAdIndex, setCurrentAdIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentAdIndex((prev) => (prev + 1) % ADS.length)
        }, 12000)
        return () => clearInterval(timer)
    }, [])

    const currentAd = ADS[currentAdIndex]

    return (
        <div className="relative overflow-hidden rounded-xl bg-white dark:bg-card border border-border shadow-sm min-h-[260px] md:min-h-[300px]">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentAd.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="h-full flex flex-col"
                >
                    {/* Ad Visual Header */}
                    <div className={`h-32 ${currentAd.bgClass} relative flex items-center justify-center overflow-hidden`}>
                        <div className={`absolute inset-0 ${currentAd.pattern}`}></div>
                        <div className="relative z-10 text-center text-white">
                            <div className="text-4xl mb-1 drop-shadow-md">{currentAd.icon}</div>
                            <h3 className="font-extrabold text-xl drop-shadow-md">{currentAd.title}</h3>
                            <p className="text-xs font-medium opacity-90">{currentAd.subtitle}</p>
                        </div>
                    </div>

                    {/* Ad Body */}
                    <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                            <div className="flex items-start justify-between mb-3">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{currentAd.tag}</span>
                                <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-md">{currentAd.discount}</span>
                            </div>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed font-medium">
                                {currentAd.desc}
                            </p>
                        </div>
                        <Button className={`w-full text-white font-bold h-10 shadow-lg transition-transform active:scale-95 ${currentAd.btnClass}`}>
                            Check it out <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Carousel Indicators */}
            <div className="absolute top-3 right-3 flex gap-1 z-20">
                {ADS.map((_, idx) => (
                    <div
                        key={idx}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentAdIndex ? "bg-white scale-125" : "bg-white/40"}`}
                    />
                ))}
            </div>
        </div>
    )
}
