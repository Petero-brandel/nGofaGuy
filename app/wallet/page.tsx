"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Copy, Check, Plus, Repeat2, ArrowDownCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { WalletCard } from "@/components/wallet/wallet-card"
import { TransactionItem } from "@/components/wallet/transaction-item"
import { mockWalletBalances, mockTransactions, userWalletId } from "@/lib/wallet-data"
import { WalletPageLayout } from "@/components/wallet/wallet-page-layout" // Import the new layout component
import Link from "next/link"

export default function WalletOverviewPage() {
  const [copied, setCopied] = useState(false)

  const handleCopyWalletId = () => {
    navigator.clipboard.writeText(userWalletId)
    setCopied(true)
    toast.success("Wallet ID copied to clipboard!")
    setTimeout(() => setCopied(false), 2000)
  }

  const recentTransactions = mockTransactions
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3) // Show only 3 recent transactions

  return (
    <WalletPageLayout
      title="My Wallet"
      description="Manage your funds, top-up, transfer, and withdraw with ease."
      backLink="/" // Assuming the main wallet page links back to home or dashboard
    >
     

      {/* Wallet Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <WalletCard
          type="main"
          balance={mockWalletBalances.main}
          title="Main Wallet Balance"
          description="Your available funds for spending."
          actions={[
            { name: "Top Up", icon: Plus, href: "/wallet/top-up" },
            { name: "Transfer", icon: Repeat2, href: "/wallet/transfer" },
            { name: "Withdraw", icon: ArrowDownCircle, href: "/wallet/withdraw" },
          ]}
        />
        <WalletCard
          type="govault"
          balance={mockWalletBalances.govault}
          title="GoVault (Escrow)"
          description="Funds held securely for ongoing tasks."
        />
      </div>

      {/* Wallet ID */}
      <motion.div
        className="bg-white/70 backdrop-blur-xl border border-gray-100/50 p-7 rounded-3xl shadow-lg mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 100, damping: 15 }}
        whileHover={{ boxShadow: "0 12px 25px rgba(0,0,0,0.08)" }}
      >
        <h3 className="text-xl font-semibold text-[#010411] mb-4">Your Wallet ID</h3>
        <div className="flex items-center gap-4">
          <Input
            type="text"
            value={userWalletId}
            readOnly
            className="flex-1 dark:bg-red-700 bg-gray-50/80 border-2 border-gray-100 rounded-xl px-5 py-3.5 text-gray-800 font-mono text-base focus:ring-2 focus:ring-[#1657FB]/20 focus:border-[#1657FB] transition-all duration-300"
          />
          <Button
            onClick={handleCopyWalletId}
            className="bg-[#1657FB] hover:bg-[#0033CD] text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
            <span className="ml-2 hidden sm:inline">{copied ? "Copied!" : "Copy ID"}</span>
          </Button>
        </div>
        <p className="text-sm text-gray-600 mt-3.5">Use this ID to receive money from other GofaGuy users.</p>
      </motion.div>

      {/* Recent Transactions */}
      <motion.div
        className="bg-white/70 backdrop-blur-xl border border-gray-100/50 p-7 rounded-3xl shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 100, damping: 15 }}
        whileHover={{ boxShadow: "0 12px 25px rgba(0,0,0,0.08)" }}
      >
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-xl font-semibold text-[#010411]">Recent Transactions</h3>
          <Button variant="link" className="text-[#1657FB] hover:text-[#0033CD] px-0 py-0 h-auto" asChild>
            <Link href="/wallet/history" className="text-sm font-medium">
              View All
            </Link>
          </Button>
        </div>
        <div className="space-y-4">
          {recentTransactions.length > 0 ? (
            recentTransactions.map((tx) => <TransactionItem key={tx.id} transaction={tx} />)
          ) : (
            <p className="text-gray-600 text-center py-6">No recent transactions.</p>
          )}
        </div>
      </motion.div>
    </WalletPageLayout>
  )
}
