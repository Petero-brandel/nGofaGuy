"use client"

import type React from "react"
import { motion } from "framer-motion"

interface WalletFormCardProps {
  children: React.ReactNode
}

export function WalletFormCard({ children }: WalletFormCardProps) {
  return (
    <motion.div
      className="bg-white/70 backdrop-blur-xl border border-gray-100/50 p-7 rounded-3xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100, damping: 15 }}
      whileHover={{ boxShadow: "0 12px 25px rgba(0,0,0,0.08)" }}
    >
      {children}
    </motion.div>
  )
}
