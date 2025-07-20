"use client"

import { motion } from "framer-motion"
import { ArrowUp, ArrowDown, Repeat, Lock, Unlock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Transaction, TransactionType } from "@/lib/wallet-data"

interface TransactionItemProps {
  transaction: Transaction
}

const getIconAndColor = (type: TransactionType, status: Transaction["status"]) => {
  let icon = ArrowUp
  let iconBgClass = "bg-[#1657FB]/10"
  let iconColorClass = "text-[#1657FB]"
  let badgeVariant: "default" | "secondary" | "destructive" | "outline" = "default"
  let badgeText = status.charAt(0).toUpperCase() + status.slice(1)

  switch (type) {
    case "top-up":
      icon = ArrowUp
      iconBgClass = "bg-[#1FF3A5]/10"
      iconColorClass = "text-[#1FF3A5]"
      badgeVariant = "default"
      break
    case "transfer":
      icon = Repeat
      iconBgClass = "bg-[#0033CD]/10"
      iconColorClass = "text-[#0033CD]"
      badgeVariant = "secondary"
      break
    case "withdrawal":
      icon = ArrowDown
      iconBgClass = "bg-red-500/10"
      iconColorClass = "text-red-500"
      badgeVariant = "destructive"
      break
    case "escrow-hold":
      icon = Lock
      iconBgClass = "bg-yellow-600/10"
      iconColorClass = "text-yellow-600"
      badgeVariant = "outline"
      badgeText = "Locked"
      break
    case "escrow-release":
      icon = Unlock
      iconBgClass = "bg-green-600/10"
      iconColorClass = "text-green-600"
      badgeVariant = "default"
      badgeText = "Released"
      break
    default:
      break
  }

  if (status === "pending") {
    badgeVariant = "outline"
    badgeText = "Pending"
    iconColorClass = "text-gray-500"
    iconBgClass = "bg-gray-200/50"
  } else if (status === "failed") {
    badgeVariant = "destructive"
    badgeText = "Failed"
    iconColorClass = "text-red-500"
    iconBgClass = "bg-red-500/10"
  }

  return { icon, iconBgClass, iconColorClass, badgeVariant, badgeText }
}

export function TransactionItem({ transaction }: TransactionItemProps) {
  const {
    icon: Icon,
    iconBgClass,
    iconColorClass,
    badgeVariant,
    badgeText,
  } = getIconAndColor(transaction.type, transaction.status)

  const formattedAmount = transaction.amount.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  return (
    <motion.div
      className="flex items-center justify-between p-5 rounded-2xl bg-white/70 backdrop-blur-xl shadow-sm border border-gray-100/50 hover:shadow-md transition-all duration-200"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.01 }}
    >
      <div className="flex items-center gap-4">
        <div className={`w-11 h-11 rounded-full flex items-center justify-center ${iconBgClass}`}>
          <Icon className={`w-5 h-5 ${iconColorClass}`} />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 text-base">{transaction.title}</h4>
          <p className="text-sm text-gray-600 mt-1">{transaction.description || transaction.date}</p>
        </div>
      </div>
      <div className="flex flex-col items-end gap-1">
        <span className={`font-bold text-lg ${transaction.amount < 0 ? "text-red-500" : "text-[#010411]"}`}>
          {formattedAmount}
        </span>
        <Badge variant={badgeVariant} className="text-xs px-2.5 py-0.5">
          {badgeText}
        </Badge>
      </div>
    </motion.div>
  )
}
