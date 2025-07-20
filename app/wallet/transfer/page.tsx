"use client"

import { useState } from "react"
import { Repeat2, User, DollarSign, MessageSquare, CheckCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { WalletPageLayout } from "@/components/wallet/wallet-page-layout"
import { WalletFormCard } from "@/components/wallet/wallet-form-card"
import { motion } from "framer-motion"

export default function TransferPage() {
  const [amount, setAmount] = useState("")
  const [recipientWalletId, setRecipientWalletId] = useState("")
  const [note, setNote] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleInitiateTransfer = () => {
    const numAmount = Number.parseFloat(amount)
    if (isNaN(numAmount) || numAmount <= 0) {
      toast.error("Please enter a valid amount.")
      return
    }
    if (!recipientWalletId.trim()) {
      toast.error("Recipient Wallet ID cannot be empty.")
      return
    }
    // In a real app, you'd validate the recipient ID here (e.g., check if it exists)
    setShowConfirmation(true)
  }

  const handleConfirmTransfer = async () => {
    setIsLoading(true)
    toast.info(`Transferring ₦${Number.parseFloat(amount).toLocaleString()} to ${recipientWalletId}...`)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    toast.success(`Successfully transferred ₦${Number.parseFloat(amount).toLocaleString()} to ${recipientWalletId}!`)
    setAmount("")
    setRecipientWalletId("")
    setNote("")
    setShowConfirmation(false)
  }

  return (
    <WalletPageLayout title="Send Money" description="Transfer funds to another GofaGuy user.">
      <WalletFormCard>
        {!showConfirmation ? (
          <div className="space-y-7">
            <div>
              <Label htmlFor="amount" className="text-base font-semibold text-gray-700 mb-2 block">
                Amount (₦)
              </Label>
              <div className="relative group">
                <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-[#1657FB] transition-colors duration-300" />
                <Input
                  id="amount"
                  type="number"
                  placeholder="e.g., 1,500.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="pl-12 h-14 border-2 border-gray-100 focus:border-[#1657FB] focus:ring-4 focus:ring-[#1657FB]/10 rounded-xl bg-white/80 backdrop-blur-sm transition-all duration-300 text-lg"
                  disabled={isLoading}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="recipientId" className="text-base font-semibold text-gray-700 mb-2 block">
                Recipient Wallet ID
              </Label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-[#1657FB] transition-colors duration-300" />
                <Input
                  id="recipientId"
                  type="text"
                  placeholder="e.g., GFG123456"
                  value={recipientWalletId}
                  onChange={(e) => setRecipientWalletId(e.target.value)}
                  className="pl-12 h-14 border-2 border-gray-100 focus:border-[#1657FB] focus:ring-4 focus:ring-[#1657FB]/10 rounded-xl bg-white/80 backdrop-blur-sm transition-all duration-300 text-lg"
                  disabled={isLoading}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="note" className="text-base font-semibold text-gray-700 mb-2 block">
                Note (Optional)
              </Label>
              <div className="relative group">
                <MessageSquare className="absolute left-4 top-4 text-gray-400 w-5 h-5 group-focus-within:text-[#1657FB] transition-colors duration-300" />
                <Textarea
                  id="note"
                  placeholder="e.g., Payment for task completion"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="pl-12 min-h-[100px] border-2 border-gray-100 focus:border-[#1657FB] focus:ring-4 focus:ring-[#1657FB]/10 rounded-xl bg-white/80 backdrop-blur-sm transition-all duration-300 text-lg"
                  disabled={isLoading}
                />
              </div>
            </div>

            <Button
              onClick={handleInitiateTransfer}
              disabled={isLoading || !amount || Number.parseFloat(amount) <= 0 || !recipientWalletId.trim()}
              className="w-full h-14 bg-gradient-to-r from-[#1657FB] to-[#0033CD] hover:from-[#0033CD] hover:to-[#1657FB] text-white font-bold text-lg transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-[1.005] active:scale-[0.995] rounded-xl"
            >
              <div className="flex items-center justify-center gap-3">
                <span>Continue to Transfer</span>
                <Repeat2 className="w-6 h-6" />
              </div>
            </Button>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-7 text-center"
          >
            <h3 className="text-2xl font-bold text-[#010411]">Confirm Transfer</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              You are about to send{" "}
              <span className="font-bold text-[#1657FB]">
                ₦
                {Number.parseFloat(amount).toLocaleString("en-NG", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>{" "}
              to Wallet ID: <span className="font-bold text-[#0033CD]">{recipientWalletId}</span>.
            </p>
            {note && <p className="text-gray-600 text-base italic">Note: "{note}"</p>}
            <div className="flex gap-4 mt-8">
              <Button
                variant="outline"
                onClick={() => setShowConfirmation(false)}
                className="flex-1 h-14 border-2 border-gray-200 text-gray-700 hover:bg-gray-100/80 rounded-xl font-medium text-lg"
                disabled={isLoading}
              >
                Cancel
              </Button>
              <Button
                onClick={handleConfirmTransfer}
                disabled={isLoading}
                className="flex-1 h-14 bg-gradient-to-r from-[#1657FB] to-[#0033CD] hover:from-[#0033CD] hover:to-[#1657FB] text-white font-bold text-lg transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-[1.005] active:scale-[0.995] rounded-xl"
              >
                {isLoading ? (
                  <div className="flex items-center gap-3">
                    <Loader2 className="w-6 h-6 animate-spin" />
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-3">
                    <span>Confirm & Send</span>
                    <CheckCircle className="w-6 h-6" />
                  </div>
                )}
              </Button>
            </div>
          </motion.div>
        )}
      </WalletFormCard>
    </WalletPageLayout>
  )
}
