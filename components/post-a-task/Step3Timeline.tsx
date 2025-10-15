"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, AlertCircle } from "lucide-react";
import type { FormData } from "./constants";

interface Step3TimelineProps {
  formData: FormData;
  onFormDataChange: (data: Partial<FormData>) => void;
  onNext: () => void;
  onBack: () => void;
  canProceed: boolean;
}

export default function Step3Timeline({
  formData,
  onFormDataChange,
  onNext,
  onBack,
  canProceed,
}: Step3TimelineProps) {
  return (
    <motion.div
      key="step3"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
          When & where?
        </h1>
        <p className="text-[var(--color-text-secondary)] text-lg">
          Let students know the urgency and location on campus
        </p>
      </div>

      <div className="bg-[var(--color-surface)] border-2 border-[var(--color-border-strong)] rounded-3xl p-8 shadow-lg space-y-8">
        <div>
          <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-3">
            How urgent is this?
          </label>
          <div className="grid grid-cols-3 gap-3">
            {[
              {
                value: "asap",
                label: "ASAP",
                desc: "Within hours",
                color: "red",
              },
              {
                value: "today",
                label: "Today",
                desc: "Same day",
                color: "orange",
              },
              {
                value: "flexible",
                label: "Flexible",
                desc: "This week",
                color: "green",
              },
            ].map((option) => (
              <motion.button
                key={option.value}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onFormDataChange({ urgency: option.value })}
                className={`p-4 rounded-xl border-2 transition-all ${
                  formData.urgency === option.value
                    ? "border-[var(--color-primary)] bg-[var(--color-primary)]/10"
                    : "border-[var(--color-border)] hover:border-[var(--color-border-strong)] bg-[var(--color-surface-elevated)]"
                }`}
              >
                <div className="font-semibold text-[var(--color-text-primary)] mb-1">
                  {option.label}
                </div>
                <div className="text-xs text-[var(--color-text-muted)]">
                  {option.desc}
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-3">
            How long will it take?
          </label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { value: "30min", label: "30 minutes" },
              { value: "1-2hrs", label: "1-2 hours" },
              { value: "half-day", label: "Half day" },
              { value: "full-day", label: "Full day" },
            ].map((option) => (
              <motion.button
                key={option.value}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onFormDataChange({ duration: option.value })}
                className={`p-4 rounded-xl border-2 transition-all text-left ${
                  formData.duration === option.value
                    ? "border-[var(--color-primary)] bg-[var(--color-primary)]/10"
                    : "border-[var(--color-border)] hover:border-[var(--color-border-strong)] bg-[var(--color-surface-elevated)]"
                }`}
              >
                <div className="font-medium text-[var(--color-text-primary)]">
                  {option.label}
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-3">
            Where on campus?
          </label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) => onFormDataChange({ location: e.target.value })}
            placeholder="e.g., Main Library, Student Center, Hostel Block A"
            className="w-full px-4 py-4 border-2 border-[var(--color-border)] rounded-xl outline-none focus:border-[var(--color-primary)] transition-colors text-base bg-[var(--color-surface-elevated)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)]"
          />
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">
            Be specific so students can find you easily
          </p>
        </div>

        {!canProceed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-400 text-sm"
          >
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>Please complete all fields to continue</span>
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
