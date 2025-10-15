"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { STEPS } from "./constants";

interface StepIndicatorProps {
  currentStep: number;
  filteredSteps: typeof STEPS;
  onStepClick: (stepId: number) => void;
}

export default function StepIndicator({
  currentStep,
  filteredSteps,
  onStepClick,
}: StepIndicatorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="lg:sticky lg:top-8"
    >
      <div className="bg-[var(--color-surface)] rounded-3xl border-2 border-[var(--color-border)] p-6 shadow-lg">
        <div className="space-y-1">
          {filteredSteps.map((step, index) => {
            const isActive = currentStep === step.id;
            const isCompleted = currentStep > step.id;

            return (
              <motion.div
                key={step.id}
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => {
                    if (isCompleted) {
                      onStepClick(step.id);
                    }
                  }}
                  disabled={!isCompleted && !isActive}
                  className={`w-full flex items-start gap-4 p-4 rounded-xl transition-all ${
                    isActive
                      ? "bg-[var(--color-primary)] text-white shadow-md shadow-[var(--color-primary)]/20"
                      : isCompleted
                      ? "hover:bg-[var(--color-surface-elevated)] cursor-pointer"
                      : "opacity-50 cursor-not-allowed"
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                      isActive
                        ? "bg-white text-[var(--color-primary)] shadow-lg"
                        : isCompleted
                        ? "bg-[var(--color-accent)] text-white"
                        : "bg-[var(--color-surface-elevated)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
                    }`}
                  >
                    {isCompleted ? <Check className="w-5 h-5" /> : step.id}
                  </div>

                  <div className="flex-1 text-left">
                    <div
                      className={`font-semibold mb-0.5 ${
                        isActive
                          ? "text-white"
                          : isCompleted
                          ? "text-[var(--color-text-primary)]"
                          : "text-[var(--color-text-muted)]"
                      }`}
                    >
                      {step.title}
                    </div>
                    <div
                      className={`text-xs ${
                        isActive
                          ? "text-white/80"
                          : isCompleted
                          ? "text-[var(--color-text-muted)]"
                          : "text-[var(--color-text-muted)]"
                      }`}
                    >
                      {step.subtitle}
                    </div>
                  </div>
                </button>

                {index < filteredSteps.length - 1 && (
                  <div className="ml-9 h-4 w-0.5 bg-[var(--color-border)] my-1" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
