"use client"

import { useState } from "react"
import { BanknoteIcon as Bank, DollarSign, CheckCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import { mockWalletBalances } from "@/lib/wallet-data"
import { WalletPageLayout } from "@/components/wallet/wallet-page-layout"
import { WalletFormCard } from "@/components/wallet/wallet-form-card"

interface BankAccount {
  id: string
  bankName: string
  accountNumber: string
  accountName: string
}

const mockBankAccounts: BankAccount[] = [
  { id: "b1", bankName: "Access Bank", accountNumber: "0123456789", accountName: "John Doe" },
  { id: "b2", bankName: "Zenith Bank", accountNumber: "9876543210", accountName: "John Doe" },
]

const MIN_WITHDRAWAL_BALANCE = 1000.0 // Example minimum balance

export default function WithdrawPage() {
  const [amount, setAmount] = useState("")
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleWithdraw = async () => {
    const numAmount = Number.parseFloat(amount)
    if (isNaN(numAmount) || numAmount <= 0) {
      toast.error("Please enter a valid amount.")
      return
    }
    if (numAmount > mockWalletBalances.main) {
      toast.error("Insufficient main wallet balance.")
      return
    }
    if (mockWalletBalances.main - numAmount < MIN_WITHDRAWAL_BALANCE) {
      toast.error(`You must maintain a minimum balance of ₦${MIN_WITHDRAWAL_BALANCE.toLocaleString()}.`)
      return
    }
    if (!selectedAccount) {
      toast.error("Please select a bank account.")
      return
    }

    setIsLoading(true)
    const accountDetails = mockBankAccounts.find((acc) => acc.id === selectedAccount)
    toast.info(`Initiating withdrawal of ₦${numAmount.toLocaleString()} to ${accountDetails?.bankName}...`)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    toast.success(`Withdrawal of ₦${numAmount.toLocaleString()} initiated successfully!`)
    setAmount("")
    setSelectedAccount(null)
  }

  return (
    <WalletPageLayout title="Withdraw Funds" description="Transfer money from your main wallet to your bank account.">
      <WalletFormCard>
        <div className="mb-7">
          <Label htmlFor="amount" className="text-base font-semibold text-gray-700 mb-2 block">
            Amount to Withdraw (₦)
          </Label>
          <div className="relative group">
            <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-[#1657FB] transition-colors duration-300" />
            <Input
              id="amount"
              type="number"
              placeholder="e.g., 2,000.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="pl-12 h-14 border-2 border-gray-100 focus:border-[#1657FB] focus:ring-4 focus:ring-[#1657FB]/10 rounded-xl bg-white/80 backdrop-blur-sm transition-all duration-300 text-lg"
              disabled={isLoading}
            />
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Available: ₦
            {mockWalletBalances.main.toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}.
            Minimum balance of ₦{MIN_WITHDRAWAL_BALANCE.toLocaleString()} must be maintained.
          </p>
        </div>

        <div className="mb-7">
          <Label htmlFor="bankAccount" className="text-base font-semibold text-gray-700 mb-2 block">
            Select Bank Account
          </Label>
          <Select onValueChange={setSelectedAccount} value={selectedAccount || ""} disabled={isLoading}>
            <SelectTrigger className="h-14 border-2 border-gray-100 focus:border-[#1657FB] focus:ring-4 focus:ring-[#1657FB]/10 rounded-xl bg-white/80 backdrop-blur-sm transition-all duration-300 text-lg px-5">
              <Bank className="mr-3 w-5 h-5 text-gray-400" />
              <SelectValue placeholder="Choose a bank account" />
            </SelectTrigger>
            <SelectContent className="bg-white/90 backdrop-blur-xl border border-gray-100/50 rounded-xl shadow-lg">
              {mockBankAccounts.map((account) => (
                <SelectItem key={account.id} value={account.id} className="py-3.5 px-4 text-base">
                  <div className="font-medium">{account.bankName}</div>
                  <div className="text-sm text-gray-600">{account.accountNumber}</div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant="link" className="text-[#1657FB] text-sm mt-2 px-0 py-0 h-auto font-medium">
            + Add New Bank Account
          </Button>
        </div>

        <Button
          onClick={handleWithdraw}
          disabled={
            isLoading ||
            !amount ||
            Number.parseFloat(amount) <= 0 ||
            !selectedAccount ||
            Number.parseFloat(amount) > mockWalletBalances.main ||
            mockWalletBalances.main - Number.parseFloat(amount) < MIN_WITHDRAWAL_BALANCE
          }
          className="w-full h-14 bg-gradient-to-r from-[#1657FB] to-[#0033CD] hover:from-[#0033CD] hover:to-[#1657FB] text-white font-bold text-lg transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-[1.005] active:scale-[0.995] rounded-xl"
        >
          {isLoading ? (
            <div className="flex items-center gap-3">
              <Loader2 className="w-6 h-6 animate-spin" />
              <span>Processing...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-3">
              <span>Withdraw Now</span>
              <CheckCircle className="w-6 h-6" />
            </div>
          )}
        </Button>
      </WalletFormCard>
    </WalletPageLayout>
  )
}
