"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Wallet, Zap } from "lucide-react";
import { TASK_CATEGORIES, type FormData } from "./constants";

interface Step5ReviewProps {
  formData: FormData;
  needsSkills: boolean;
  onBack: () => void;
  onSubmit: () => void;
  onEditStep: (step: number) => void;
}

export default function Step5Review({
  formData,
  needsSkills,
  onBack,
  onSubmit,
  onEditStep,
}: Step5ReviewProps) {
  return (
    <motion.div
      key="step5"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
          Review your task
        </h1>
        <p className="text-[var(--color-text-secondary)] text-lg">
          Make sure everything looks good before posting to campus
        </p>
      </div>

      <div className="bg-[var(--color-surface)] border-2 border-[var(--color-border-strong)] rounded-3xl p-8 shadow-lg space-y-6">
        <div className="pb-6 border-b border-[var(--color-border)]">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-[var(--color-text-primary)]">
              Task Description
            </h3>
            <button
              onClick={() => onEditStep(1)}
              className="text-sm text-[var(--color-primary)] hover:underline font-medium"
            >
              Edit
            </button>
          </div>
          <div className="mb-2">
            <span className="inline-block px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full text-xs font-semibold mb-3 border border-[var(--color-primary)]/20">
              {
                TASK_CATEGORIES.find((cat) => cat.id === formData.category)
                  ?.label
              }
            </span>
          </div>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            {formData.description}
          </p>
        </div>

        {needsSkills && formData.skills.length > 0 && (
          <div className="pb-6 border-b border-[var(--color-border)]">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-[var(--color-text-primary)]">
                Skills Required
              </h3>
              <button
                onClick={() => onEditStep(2)}
                className="text-sm text-[var(--color-primary)] hover:underline font-medium"
              >
                Edit
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded-full text-sm font-medium border border-[var(--color-accent)]/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="pb-6 border-b border-[var(--color-border)]">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-[var(--color-text-primary)]">
              Timeline & Location
            </h3>
            <button
              onClick={() => onEditStep(3)}
              className="text-sm text-[var(--color-primary)] hover:underline font-medium"
            >
              Edit
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="text-xs text-[var(--color-text-muted)] mb-1">
                Urgency
              </div>
              <div className="font-medium text-[var(--color-text-primary)] capitalize">
                {formData.urgency}
              </div>
            </div>
            <div>
              <div className="text-xs text-[var(--color-text-muted)] mb-1">
                Duration
              </div>
              <div className="font-medium text-[var(--color-text-primary)]">
                {formData.duration}
              </div>
            </div>
            <div>
              <div className="text-xs text-[var(--color-text-muted)] mb-1">
                Location
              </div>
              <div className="font-medium text-[var(--color-text-primary)]">
                {formData.location}
              </div>
            </div>
          </div>
        </div>

        <div className="pb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-[var(--color-text-primary)]">
              Payment
            </h3>
            <button
              onClick={() => onEditStep(4)}
              className="text-sm text-[var(--color-primary)] hover:underline font-medium"
            >
              Edit
            </button>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-3xl font-bold text-[var(--color-primary)]">
              ₦{formData.budgetAmount}
            </div>
            <div className="flex items-center gap-1 text-sm text-[var(--color-text-muted)]">
              <Wallet className="w-4 h-4 text-[var(--color-wallet)]" />
              <span>Secured via GoVault</span>
            </div>
          </div>
        </div>

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
            onClick={onSubmit}
            className="flex items-center gap-2 px-8 py-4 rounded-full font-bold bg-[var(--color-primary)] hover:shadow-xl hover:shadow-[var(--color-primary)]/30 text-white shadow-lg transition-all text-lg"
          >
            <span>Post Task</span>
            <Zap className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
