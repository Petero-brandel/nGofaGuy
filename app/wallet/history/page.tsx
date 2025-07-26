"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Filter, Search, Moon, Sun } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { TransactionItem } from "@/components/wallet/transaction-item"
import { mockTransactions, type TransactionType } from "@/lib/wallet-data"
import { WalletPageLayout } from "@/components/wallet/wallet-page-layout"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export default function TransactionHistoryPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | TransactionType>("all")
  const [searchQuery, setSearchQuery] = useState("")
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const filteredAndGroupedTransactions = useMemo(() => {
    const filtered = mockTransactions.filter((tx) => {
      const matchesFilter = activeFilter === "all" || tx.type === activeFilter
      const matchesSearch =
        tx.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tx.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tx.type.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesFilter && matchesSearch
    })

    // Sort by date descending
    filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    // Group by date
    const grouped: { [key: string]: typeof filtered } = {}
    filtered.forEach((tx) => {
      const date = tx.date // Assuming date is in YYYY-MM-DD format
      if (!grouped[date]) {
        grouped[date] = []
      }
      grouped[date].push(tx)
    })

    return grouped
  }, [activeFilter, searchQuery])

  const filterOptions: { label: string; value: "all" | TransactionType }[] = [
    { label: "All", value: "all" },
    { label: "Top-ups", value: "top-up" },
    { label: "Transfers", value: "transfer" },
    { label: "Withdrawals", value: "withdrawal" },
    { label: "Escrow Holds", value: "escrow-hold" },
    { label: "Escrow Releases", value: "escrow-release" },
  ]

  return (
    <WalletPageLayout 
      title="Transaction History" 
      description="View all your past wallet activities."
      headerAction={
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleTheme}
          className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      }
    >
      {/* Filters and Search */}
      <motion.div
        className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-gray-100/50 dark:border-gray-700/50 p-7 rounded-3xl shadow-lg dark:shadow-gray-900/10 mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100, damping: 15 }}
        whileHover={{ boxShadow: "0 12px 25px rgba(0,0,0,0.08)" }}
      >
        <div className="relative mb-5">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
          <Input
            placeholder="Search transactions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 h-14 border-2 border-gray-100 dark:border-gray-700 focus:border-[#1657FB] dark:focus:border-[#3b82f6] focus:ring-4 focus:ring-[#1657FB]/10 dark:focus:ring-[#3b82f6]/20 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm transition-all duration-300 text-lg dark:text-white"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <span className="text-base font-semibold text-gray-700 dark:text-gray-300 flex items-center mr-2">
            <Filter className="w-5 h-5 mr-1" /> Filter by:
          </span>
          {filterOptions.map((option) => (
            <Badge
              key={option.value}
              variant={activeFilter === option.value ? "default" : "outline"}
              onClick={() => setActiveFilter(option.value)}
              className={`cursor-pointer px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 ${
                activeFilter === option.value
                  ? "bg-[#1657FB] dark:bg-[#3b82f6] text-white hover:bg-[#0033CD] dark:hover:bg-[#1d4ed8]"
                  : "border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-700/80"
              }`}
            >
              {option.label}
            </Badge>
          ))}
        </div>
      </motion.div>

      {/* Transaction List */}
      <div className="space-y-8">
        {Object.keys(filteredAndGroupedTransactions).length > 0 ? (
          Object.keys(filteredAndGroupedTransactions).map((date) => (
            <div key={date}>
              <h3 className="text-xl font-bold text-[#010411] dark:text-white mb-4">
                {new Date(date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </h3>
              <div className="space-y-5">
                {filteredAndGroupedTransactions[date].map((tx) => (
                  <TransactionItem key={tx.id} transaction={tx} />
                ))}
              </div>
            </div>
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-gray-100/50 dark:border-gray-700/50 p-8 rounded-3xl shadow-lg dark:shadow-gray-900/10 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">No Transactions Found</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Adjust your filters or search query.</p>
          </motion.div>
        )}
      </div>
    </WalletPageLayout>
  )
}