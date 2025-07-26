"use client"

import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, AlertCircle, Info, AlertTriangle, X } from "lucide-react"

interface Toast {
  id: string
  title: string
  description?: string
  type: "success" | "error" | "info" | "warning"
}

interface ToastProps {
  toasts: Toast[]
  onRemove: (id: string) => void
}

export function ToastContainer({ toasts, onRemove }: ToastProps) {
  const icons = {
    success: CheckCircle,
    error: AlertCircle,
    info: Info,
    warning: AlertTriangle,
  }

  const colors = {
    success:
      "bg-green-50/90 dark:bg-green-900/30 border-green-200/50 dark:border-green-800/50 text-green-800 dark:text-green-200",
    error: "bg-red-50/90 dark:bg-red-900/30 border-red-200/50 dark:border-red-800/50 text-red-800 dark:text-red-200",
    info: "bg-blue-50/90 dark:bg-blue-900/30 border-blue-200/50 dark:border-blue-800/50 text-blue-800 dark:text-blue-200",
    warning:
      "bg-yellow-50/90 dark:bg-yellow-900/30 border-yellow-200/50 dark:border-yellow-800/50 text-yellow-800 dark:text-yellow-200",
  }

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      <AnimatePresence>
        {toasts.map((toast) => {
          const Icon = icons[toast.type]
          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 300, scale: 0.3 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 300, scale: 0.5 }}
              className={`max-w-sm w-full border rounded-xl p-4 shadow-xl backdrop-blur-xl ${colors[toast.type]}`}
            >
              <div className="flex items-start gap-3">
                <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-semibold">{toast.title}</p>
                  {toast.description && <p className="text-sm opacity-80 mt-1">{toast.description}</p>}
                </div>
                <button
                  onClick={() => onRemove(toast.id)}
                  className="p-1 hover:bg-black/10 dark:hover:bg-white/10 rounded-md transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}
