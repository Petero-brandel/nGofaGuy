"use client"

import { motion } from "framer-motion"
import { CheckCircle, Zap, CreditCard, Users, Star } from "lucide-react"

const springTransition = {
  type: "spring",
  stiffness: 300,
  damping: 20
}

export function WalletPayment() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-background">
      {/* Background Elements */}
      <div className="absolute top-20 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
            Robust In-App
            <br />
            <span className="text-primary">Wallet System</span>
          </h2>
          
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="inline-flex items-center justify-center"
          >
            <div className="w-12 h-12 bg-foreground rounded-xl flex items-center justify-center shadow-md">
              <Star className="w-6 h-6 text-background" />
            </div>
          </motion.div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Faster Payments Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-primary rounded-3xl p-8 h-full text-primary-foreground relative overflow-hidden">
              {/* Background Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/30 rounded-full blur-xl" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">
                  Faster
                  <br />
                  payments
                </h3>
                <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                  Receive your task payments instantly in your campus wallet. Access or withdraw from any time.
                </p>

                {/* Notification Card */}
                <motion.div 
                  whileHover={{ y: -3 }}
                  className="bg-background/10 backdrop-blur-sm rounded-2xl p-4 border shadow-lg border-primary/20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-foreground rounded-xl flex items-center justify-center">
                      <Star className="w-5 h-5 text-background" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Account Credited</div>
                      <div className="text-xs text-primary-foreground/70">
                        Your NGN Balance has been credited with ₦2500 from Adebayo M.
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* No Unnecessary Hassles Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-card shadow-lg rounded-3xl p-8 h-full relative overflow-hidden">
              {/* Background Decorative Elements */}
              <div className="absolute top-1/4 left-1/4 w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full transform rotate-12" />
              <div className="absolute top-1/2 right-1/4 w-16 h-1 bg-gradient-to-r from-accent to-primary rounded-full transform -rotate-12" />

              {/* Checkmark Elements */}
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-1/4 right-1/4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-sm"
              >
                <CheckCircle className="w-5 h-5 text-white" />
              </motion.div>
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-1/4 left-1/4 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center shadow-sm"
              >
                <CheckCircle className="w-4 h-4 text-white" />
              </motion.div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  No unnecessary
                  <br />
                  hassles
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  A simple system where students never have to worry about payment delays or disputes again.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Credit from Platforms Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-900 to-foreground rounded-3xl p-8 h-full text-background relative overflow-hidden">
              {/* Background Decorative Elements */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />

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
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-background rounded-full flex items-center justify-center z-10 shadow-lg"
                  >
                    <span className="text-foreground font-bold text-sm">GG</span>
                  </motion.div>

                  {/* Surrounding Icons */}
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-md"
                  >
                    <Zap className="w-5 h-5 text-foreground" />
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    className="absolute top-1/4 right-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-md"
                  >
                    <CreditCard className="w-5 h-5 text-primary-foreground" />
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center shadow-md"
                  >
                    <Users className="w-5 h-5 text-white" />
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    className="absolute top-1/4 left-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-md"
                  >
                    <Star className="w-5 h-5 text-white" />
                  </motion.div>

                  {/* Connection Lines */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-border/20 rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}