"use client"

import { useState } from "react"
import { CreditCard, Banknote, CheckCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "sonner"
import { WalletPageLayout } from "@/components/wallet/wallet-page-layout"
import { WalletFormCard } from "@/components/wallet/wallet-form-card"
import { motion } from "framer-motion"

export default function TopUpPage() {
  const [amount, setAmount] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("flutterwave")
  const [isLoading, setIsLoading] = useState(false)

  const handleTopUp = async () => {
    const numAmount = Number.parseFloat(amount)
    if (isNaN(numAmount) || numAmount <= 0) {
      toast.error("Please enter a valid amount.")
      return
    }

    setIsLoading(true)
    toast.info(`Initiating top-up of ₦${numAmount.toLocaleString()} via ${paymentMethod}...`)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    toast.success(`Successfully topped up ₦${numAmount.toLocaleString()}!`)
    setAmount("")
  }

  return (
    <WalletPageLayout title="Top Up Wallet" description="Add funds to your main wallet balance.">
      <WalletFormCard>
        <div className="mb-7">
          <Label htmlFor="amount" className="text-base font-semibold text-gray-700 mb-2 block">
            Amount to Top Up (₦)
          </Label>
          <Input
            id="amount"
            type="number"
            placeholder="e.g., 5,000.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="h-14 border-2 border-gray-100 focus:border-[#1657FB] focus:ring-4 focus:ring-[#1657FB]/10 rounded-xl bg-white/80 backdrop-blur-sm transition-all duration-300 text-lg px-5"
            disabled={isLoading}
          />
        </div>

        <div className="mb-7">
          <Label className="text-base font-semibold text-gray-700 mb-3 block">Select Payment Method</Label>
          <RadioGroup
            value={paymentMethod}
            onValueChange={setPaymentMethod}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            disabled={isLoading}
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Label
                htmlFor="flutterwave"
                className={`flex flex-col items-center justify-center p-5 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                  paymentMethod === "flutterwave"
                    ? "border-[#1657FB] bg-[#EEF6FF] shadow-md"
                    : "border-gray-200 bg-gray-50/80 hover:bg-gray-100/80"
                }`}
              >
                <RadioGroupItem value="flutterwave" id="flutterwave" className="sr-only" />
                <Banknote className="w-9 h-9 text-[#1657FB] mb-3" />
                <span className="text-base font-medium text-gray-800">Flutterwave</span>
              </Label>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Label
                htmlFor="card"
                className={`flex flex-col items-center justify-center p-5 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                  paymentMethod === "card"
                    ? "border-[#1657FB] bg-[#EEF6FF] shadow-md"
                    : "border-gray-200 bg-gray-50/80 hover:bg-gray-100/80"
                }`}
              >
                <RadioGroupItem value="card" id="card" className="sr-only" />
                <CreditCard className="w-9 h-9 text-[#1657FB] mb-3" />
                <span className="text-base font-medium text-gray-800">Card Payment</span>
              </Label>
            </motion.div>
          </RadioGroup>
        </div>

        <Button
          onClick={handleTopUp}
          disabled={isLoading || !amount || Number.parseFloat(amount) <= 0}
          className="w-full h-14 bg-gradient-to-r from-[#1657FB] to-[#0033CD] hover:from-[#0033CD] hover:to-[#1657FB] text-white font-bold text-lg transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-[1.005] active:scale-[0.995] rounded-xl"
        >
          {isLoading ? (
            <div className="flex items-center gap-3">
              <Loader2 className="w-6 h-6 animate-spin" />
              <span>Processing...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-3">
              <span>Top Up Now</span>
              <CheckCircle className="w-6 h-6" />
            </div>
          )}
        </Button>
      </WalletFormCard>
    </WalletPageLayout>
  )
}
