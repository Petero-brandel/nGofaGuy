"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Info, Check, AlertCircle } from "lucide-react";
import { TASK_CATEGORIES, SUGGESTIONS, type FormData } from "./constants";
import PostingTips from "./PostingTips";

interface Step1DescriptionProps {
  formData: FormData;
  onFormDataChange: (data: Partial<FormData>) => void;
  onNext: () => void;
  canProceed: boolean;
  showTips: boolean;
  onToggleTips: () => void;
}

export default function Step1Description({
  formData,
  onFormDataChange,
  onNext,
  canProceed,
  showTips,
  onToggleTips,
}: Step1DescriptionProps) {
  const maxLength = 1500;
  const characterPercentage = (formData.description.length / maxLength) * 100;
  const isNearLimit = characterPercentage > 80;
  const isAtLimit = characterPercentage > 95;

  const handleSuggestionClick = (suggestion: string) => {
    const isSelected = formData.selectedSuggestions.includes(suggestion);
    if (isSelected) {
      onFormDataChange({
        selectedSuggestions: formData.selectedSuggestions.filter(
          (s) => s !== suggestion
        ),
        description: formData.description
          .replace(`${suggestion}, `, "")
          .replace(suggestion, ""),
      });
    } else {
      const newText = formData.description
        ? `${formData.description}, ${suggestion}`
        : suggestion;
      if (newText.length <= maxLength) {
        onFormDataChange({
          selectedSuggestions: [...formData.selectedSuggestions, suggestion],
          description: newText,
        });
      }
    }
  };

  return (
    <motion.div
      key="step1"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-8">
        <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-4 text-balance">
          What do you need help with?
        </h1>
        <p className="text-[var(--color-text-secondary)] text-lg">
          Post your task and connect with students on campus who can help you
          out
        </p>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm font-semibold text-[var(--color-text-primary)]">
            Select category:
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {TASK_CATEGORIES.map((category) => {
            const isSelected = formData.category === category.id;
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onFormDataChange({ category: category.id })}
                className={`p-4 rounded-2xl text-center transition-all ${
                  isSelected
                    ? "bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/20"
                    : "bg-[var(--color-surface)] border-2 border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)]"
                }`}
              >
                <Icon
                  className={`w-6 h-6 mx-auto mb-2 ${
                    isSelected ? "text-white" : "text-[var(--color-primary)]"
                  }`}
                />
                <span className="text-xs font-semibold block">
                  {category.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

     
      <div className="relative">
        <div className="relative border-2 border-[var(--color-border-strong)] rounded-3xl p-6 bg-[var(--color-surface)] shadow-lg hover:shadow-xl hover:shadow-[var(--color-primary)]/5 transition-shadow">
          <textarea
            value={formData.description}
            onChange={(e) => onFormDataChange({ description: e.target.value })}
            placeholder="I need someone to help me with..."
            maxLength={maxLength}
            className="w-full min-h-[200px] resize-none outline-none text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] text-base leading-relaxed bg-transparent"
          />

          {formData.description.length === 0 && (
            <>
              <motion.div
                className="absolute left-8 top-8 w-2 h-2 bg-[var(--color-primary)] rounded-full"
                animate={{
                  opacity: [1, 0.3, 1],
                  scale: [1, 0.8, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute left-8 bottom-24 w-2 h-2 bg-[var(--color-accent)] rounded-full"
                animate={{
                  opacity: [1, 0.3, 1],
                  scale: [1, 0.8, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
              />
            </>
          )}

          <div className="flex items-center justify-between mt-4">
            <button
              onClick={onToggleTips}
              className="flex items-center gap-2 px-3 py-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
            >
              <Info className="w-4 h-4" />
              <span className="font-medium">Posting tips</span>
            </button>

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

        <div className="flex items-center justify-between mt-3 px-2">
          <div className="flex items-center gap-2">
            {formData.description.length < 20 &&
              formData.description.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-1 text-sm text-[var(--color-warning)]"
                >
                  <AlertCircle className="w-4 h-4" />
                  <span>Add at least 20 characters</span>
                </motion.div>
              )}
            {!formData.category && formData.description.length >= 20 && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-1 text-sm text-[var(--color-warning)]"
              >
                <AlertCircle className="w-4 h-4" />
                <span>Select a category</span>
              </motion.div>
            )}
          </div>
          <div
            className={`text-sm font-medium transition-colors ${
              isAtLimit
                ? "text-[var(--color-danger)]"
                : isNearLimit
                ? "text-[var(--color-warning)]"
                : "text-[var(--color-text-muted)]"
            }`}
          >
            {formData.description.length} / {maxLength}
          </div>
        </div>

        <AnimatePresence>
          {isNearLimit && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`mt-3 p-3 rounded-xl border ${
                isAtLimit
                  ? "bg-red-50 border-red-200 text-red-700"
                  : "bg-amber-50 border-amber-200 text-amber-700"
              }`}
            >
              <div className="flex items-center gap-2 text-sm">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>
                  {isAtLimit
                    ? "Character limit reached!"
                    : "You're approaching the character limit"}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        <PostingTips showTips={showTips} onClose={onToggleTips} />
      </AnimatePresence>
    </motion.div>
  );
}
