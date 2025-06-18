"use client"

import { motion } from "framer-motion"
import { CheckCircle, Zap, CreditCard, Users, Star } from "lucide-react"

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 300, damping: 24 },
  },
}

export function WalletPayment() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-white">
      {/* Background Elements */}
      <div className="absolute top-20 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-32 w-64 h-64 bg-purple-400/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="text-center mb-16"
        >
          <motion.h2
            variants={item}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight"
          >
           Robust In-App
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-primary">
              Wallet System
            </span>
          </motion.h2>
          <motion.div variants={item} className="flex justify-center">
            <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {/* Faster Payments Card */}
          <motion.div variants={item} className="relative">
            <div className="bg-gradient-to-br shadow-lg from-purple-600 via-purple-700 to-indigo-800 rounded-3xl p-8 h-full text-white relative overflow-hidden">
              {/* Background Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-400/30 rounded-full blur-xl" />
              <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-indigo-300/20 rounded-full blur-lg" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">
                  Faster
                  <br />
                  payments
                </h3>
                <p className="text-purple-100 mb-8 leading-relaxed">
                  Receive your task payments instantly in your campus wallet. Access or withdraw from any time.
                </p>

                {/* Notification Card */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border shadow-lg border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Account Credited</div>
                      <div className="text-xs text-purple-200">
                        Your NGN Balance has been credited with ₦2500 from Adebayo M.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* No Unnecessary Hassles Card */}
          <motion.div variants={item} className="relative">
            <div className="bg-gray-100 shadow-lg rounded-3xl p-8 h-full relative overflow-hidden">
              {/* Background Decorative Elements */}
              <div className="absolute top-1/4 left-1/4 w-20 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transform rotate-12" />
              <div className="absolute top-1/2 right-1/4 w-16 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transform -rotate-12" />
              <div className="absolute bottom-1/3 left-1/3 w-12 h-2 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full transform rotate-45" />

              {/* Checkmark Elements */}
              <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div className="absolute bottom-1/4 left-1/4 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-500 rounded-full" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  No unnecessary
                  <br />
                  hassles
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A simple system where students never have to worry about payment delays or disputes again.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Credit from Platforms Card */}
          <motion.div variants={item} className="relative">
            <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl p-8 h-full text-white relative overflow-hidden">
              {/* Background Decorative Elements */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-green-400/10 rounded-full blur-2xl" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">
                  Credit from
                  <br />
                  your platforms
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Receive payments from popular campus services like food delivery, laundry, and study groups.
                </p>

                {/* Platform Icons */}
                <div className="relative w-32 h-32 mx-auto">
                  {/* Center Icon */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center z-10">
                    <span className="text-gray-900 font-bold text-sm">GG</span>
                  </div>

                  {/* Surrounding Icons */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute top-1/4 right-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute top-1/4 left-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>

                  {/* Connection Lines */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-gray-600 rounded-full opacity-30" />
                </div>

              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
