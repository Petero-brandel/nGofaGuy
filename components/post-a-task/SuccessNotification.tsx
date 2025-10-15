"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

interface SuccessNotificationProps {
  show: boolean;
}

export default function SuccessNotification({
  show,
}: SuccessNotificationProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-[var(--color-primary)] text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 z-50 max-w-md"
        >
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
            <Check className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold mb-1">Task posted successfully!</div>
            <div className="text-sm text-white/90">
              Students on campus will start responding soon.
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
