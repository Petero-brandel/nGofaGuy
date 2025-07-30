"use client"

import React from "react"
import { motion } from "framer-motion"
import { Lock, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface WalletCardProps {
  type: "main" | "govault"
  balance: number
  description: string
  actions?: {
    name: string
    icon: React.ElementType
    href: string
  }[]
}

export function WalletCard({ type, balance, title, description, actions }: WalletCardProps) {
  const isMainWallet = type === "main"
  const icon = isMainWallet ? Wallet : Lock

  return (
    <motion.div
      className={`relative text-white p-7 rounded-3xl shadow-xl overflow-hidden border ${
        isMainWallet
          ? "bg-gradient-to-br from-[#1657FB] to-[#0033CD] text-white border-[#1657FB]/50"
          : "bg-card text-card-foreground border-border"
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 15 }}
      whileHover={{
        scale: 1.01,
        boxShadow: isMainWallet
          ? "0 12px 25px rgba(22, 87, 251, 0.35)"
          : "0 12px 25px rgba(0,0,0,0.08)",
      }}
    >
      {/* Subtle Glassmorphism Overlay */}
      <div
        className={`absolute inset-0 z-0 ${
          isMainWallet
            ? "bg-white/10 opacity-20"
            : "bg-muted/50 opacity-40"
        }`}
        style={{
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
      />
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            {React.createElement(icon, {
              className: `w-6 h-6 ${isMainWallet ? "text-white" : "text-primary"}`,
            })}
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
          {isMainWallet && (
            <span className="text-sm font-medium bg-white/20 px-3 py-1.5 rounded-full border border-white/30">
              Active
            </span>
          )}
        </div>

        <div className="mb-7">
          <p className={`text-5xl font-extrabold ${isMainWallet ? "text-white" : "text-foreground"}`}>
            ₦{balance.toLocaleString("en-NG", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          <p className={`text-sm mt-2 ${isMainWallet ? "text-white/80" : "text-muted-foreground"}`}>
            {description}
          </p>
        </div>

        {actions && (
          <div className="flex flex-wrap gap-3">
            {actions.map((action) => (
              <Link key={action.name} href={action.href} passHref>
                <Button
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 shadow-sm ${
                    isMainWallet
                      ? "bg-white/20 hover:bg-white/30 text-white border border-white/30"
                      : "bg-primary hover:bg-primary/80 text-white"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {React.createElement(action.icon, { className: "w-4 h-4" })}
                  {action.name}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
