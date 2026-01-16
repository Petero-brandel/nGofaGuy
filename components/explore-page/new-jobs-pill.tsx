"use client"

import { ArrowUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export function NewJobsPill() {
    const [isVisible, setIsVisible] = useState(false)
    const [hasNewContent, setHasNewContent] = useState(false)

    useEffect(() => {
        // Simulate new content arriving
        const timer = setTimeout(() => {
            setHasNewContent(true)
        }, 5000)

        const handleScroll = () => {
            // Only show if we have new content AND we are scrolled down > 300px
            if (window.scrollY > 300 && hasNewContent) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", handleScroll, { passive: true })

        // Also run once in case we are already scrolled down when content arrives
        if (hasNewContent && window.scrollY > 300) {
            setIsVisible(true)
        }

        return () => {
            clearTimeout(timer)
            window.removeEventListener("scroll", handleScroll)
        }
    }, [hasNewContent])

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed top-24 left-1/2 -translate-x-1/2 z-40">
                    <motion.button
                        initial={{ y: -20, opacity: 0, scale: 0.9 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: -20, opacity: 0, scale: 0.9 }}
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                            setIsVisible(false)
                        }}
                        className="flex items-center gap-2 bg-zinc-800/95 dark:bg-zinc-100/95 backdrop-blur-sm text-white dark:text-zinc-900 px-4 py-2 rounded-full shadow-lg shadow-black/10 text-xs font-bold hover:scale-105 transition-all border border-white/10 dark:border-black/5"
                    >
                        <ArrowUp className="w-3.5 h-3.5" />
                        New Jobs Available
                    </motion.button>
                </div>
            )}
        </AnimatePresence>
    )
}
