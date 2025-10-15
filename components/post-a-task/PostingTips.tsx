"use client";

import { motion } from "framer-motion";
import { Sparkles, X } from "lucide-react";
import { TIPS } from "./constants";

interface PostingTipsProps {
  showTips: boolean;
  onClose: () => void;
}

export default function PostingTips({ showTips, onClose }: PostingTipsProps) {
  if (!showTips) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="mt-6 bg-[var(--color-surface-elevated)] border border-[var(--color-accent)]/20 rounded-2xl p-6 relative"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
      >
        <X className="w-5 h-5" />
      </button>
      <div className="flex items-start gap-3 mb-4">
        <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] flex items-center justify-center flex-shrink-0">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-[var(--color-text-primary)] mb-1">
            Tips for a great task post
          </h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Help fellow students understand exactly what you need
          </p>
        </div>
      </div>
      <ul className="space-y-2 ml-11">
        {TIPS.map((tip, index) => (
          <motion.li
            key={tip}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
            {tip}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
