"use client"

import { Plus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function PostJobFAB() {
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false) // Hide on scroll down
            } else {
                setIsVisible(true) // Show on scroll up
            }
            setLastScrollY(currentScrollY)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [lastScrollY])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="fixed bottom-20 right-4 z-50 lg:hidden" // Bottom-20 to clear BottomNav (which is usually h-16 + spacing)
                >
                    <Button
                        size="icon"
                        className="h-14 w-14 rounded-2xl bg-brand-primary text-white shadow-xl shadow-brand-primary/40 hover:bg-brand-primary-dark transition-all active:scale-95"
                    >
                        <Plus className="w-8 h-8" />
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
