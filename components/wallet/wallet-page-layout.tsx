"use client"

import type React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"


interface WalletPageLayoutProps {
  title: string
  description: string
  children: React.ReactNode
  backLink?: string
}

export function WalletPageLayout({ title, description, children, backLink = "/wallet" }: WalletPageLayoutProps) {
  return (
    <div className="min-h-screen dark:text-gray-300 bg-[#EEF6FF] dark:bg-primary-foreground flex flex-col pb-20 lg:pb-0">
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <Link
            href={backLink}
            className="inline-flex items-center gap-2 text-[#1657FB] hover:text-[#0033CD] transition-all duration-300 group"
          >
            <div className="p-2.5 rounded-full bg-[#1657FB]/10 group-hover:bg-[#1657FB]/20 transition-all duration-300">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium">Back to Wallet</span>
          </Link>
          <h1 className="text-4xl font-bold dark:text-gray-500 text-[#010411] mt-6 tracking-tight">{title}</h1>
          <p className="text-gray-600 mt-2 text-lg">{description}</p>
        </motion.div>

        {children}
      </div>
      
    </div>
  )
}
