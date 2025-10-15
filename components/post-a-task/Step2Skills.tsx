"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, X, AlertCircle } from "lucide-react";
import { SKILLS, type FormData } from "./constants";

interface Step2SkillsProps {
  formData: FormData;
  onFormDataChange: (data: Partial<FormData>) => void;
  onNext: () => void;
  onBack: () => void;
  canProceed: boolean;
}

export default function Step2Skills({
  formData,
  onFormDataChange,
  onNext,
  onBack,
  canProceed,
}: Step2SkillsProps) {
  const handleSkillClick = (skill: string) => {
    const isSelected = formData.skills.includes(skill);
    if (isSelected) {
      onFormDataChange({
        skills: formData.skills.filter((s) => s !== skill),
      });
    } else {
      onFormDataChange({
        skills: [...formData.skills, skill],
      });
    }
  };

  return (
    <motion.div
      key="step2"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
          What skills are needed?
        </h1>
        <p className="text-[var(--color-text-secondary)] text-lg">
          Select at least one skill that the student should have
        </p>
      </div>

      <div className="bg-[var(--color-surface)] border-2 border-[var(--color-border-strong)] rounded-3xl p-8 shadow-lg">
        <div className="mb-6">
          <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-3">
            Selected skills ({formData.skills.length})
          </label>
          <div className="flex flex-wrap gap-2 min-h-[60px] p-4 bg-[var(--color-surface-elevated)] rounded-xl border border-[var(--color-border)]">
            {formData.skills.length === 0 ? (
              <span className="text-[var(--color-text-muted)] text-sm">
                No skills selected yet
              </span>
            ) : (
              formData.skills.map((skill) => (
                <motion.div
                  key={skill}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)] text-white rounded-full text-sm font-medium shadow-md"
                >
                  {skill}
                  <button
                    onClick={() => handleSkillClick(skill)}
                    className="hover:bg-white/20 rounded-full p-0.5 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </motion.div>
              ))
            )}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-3">
            Popular skills
          </label>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((skill) => {
              const isSelected = formData.skills.includes(skill);
              return (
                <motion.button
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSkillClick(skill)}
                  disabled={isSelected}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    isSelected
                      ? "bg-[var(--color-surface-elevated)] text-[var(--color-text-muted)] cursor-not-allowed"
                      : "bg-[var(--color-surface-elevated)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                  }`}
                >
                  {skill}
                </motion.button>
              );
            })}
          </div>
        </div>

        {formData.skills.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-400 text-sm"
          >
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>Please select at least one skill to continue</span>
          </motion.div>
        )}

        <div className="flex items-center justify-between mt-8 pt-6 border-t border-[var(--color-border)]">
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
