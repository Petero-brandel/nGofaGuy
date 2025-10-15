"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, AlertCircle, Wallet } from "lucide-react";
import type { FormData } from "./constants";

interface Step4PaymentProps {
  formData: FormData;
  onFormDataChange: (data: Partial<FormData>) => void;
  onNext: () => void;
  onBack: () => void;
  canProceed: boolean;
}

export default function Step4Payment({
  formData,
  onFormDataChange,
  onNext,
  onBack,
  canProceed,
}: Step4PaymentProps) {
  return (
    <motion.div
      key="step4"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
          How much will you pay?
        </h1>
        <p className="text-[var(--color-text-secondary)] text-lg">
          Set a fair price for the task. Payment is secured via GoVault Wallet
        </p>
      </div>

      <div className="bg-[var(--color-surface)] border-2 border-[var(--color-border-strong)] rounded-3xl p-8 shadow-lg space-y-8">
        <div className="bg-[var(--color-wallet)]/10 border border-[var(--color-wallet)]/20 rounded-2xl p-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[var(--color-wallet)] flex items-center justify-center flex-shrink-0">
              <Wallet className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-[var(--color-text-primary)] mb-1">
                Secured by GoVault Wallet
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                Your payment is held securely in escrow until the task is
                completed. Both you and the student are protected.
              </p>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-3">
            Task payment (₦)
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-semibold text-[var(--color-text-muted)]">
              ₦
            </span>
            <input
              type="number"
              value={formData.budgetAmount}
              onChange={(e) =>
                onFormDataChange({ budgetAmount: e.target.value })
              }
              placeholder="500"
              className="w-full pl-12 pr-4 py-5 border-2 border-[var(--color-border)] rounded-xl outline-none focus:border-[var(--color-primary)] transition-colors text-2xl font-semibold bg-[var(--color-surface-elevated)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)]"
            />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-2">
            {["500", "1000", "2000", "5000"].map((amount) => (
              <motion.button
                key={amount}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onFormDataChange({ budgetAmount: amount })}
                className="px-4 py-2 bg-[var(--color-surface-elevated)] hover:bg-[var(--color-border)] rounded-lg text-sm font-medium text-[var(--color-text-primary)] transition-colors border border-[var(--color-border)]"
              >
                ₦{amount}
              </motion.button>
            ))}
          </div>
          <p className="mt-3 text-sm text-[var(--color-text-muted)]">
            Suggested range for this type of task: ₦500 - ₦2,000
          </p>
        </div>

        {!canProceed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-400 text-sm"
          >
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>Please enter a payment amount to continue</span>
          </motion.div>
        )}

        <div className="flex items-center justify-between pt-6 border-t border-[var(--color-border)]">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
            className="flex items-center gap-2 px-6 py-3 rounded-full font-medium text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-elevated)] transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            disabled={!canProceed}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
              !canProceed
                ? "bg-[var(--color-surface-elevated)] text-[var(--color-text-muted)] cursor-not-allowed"
                : "bg-[var(--color-primary)] hover:shadow-lg hover:shadow-[var(--color-primary)]/30 text-white shadow-md"
            }`}
          >
            <span>Next step</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
