"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Zap, CheckCircle, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

// Color guide
// --brand-primary: hsl(230 91% 54%)   #1657FD
// --brand-primary-dark: hsl(229 89% 4%) #010411
// --brand-secondary: hsl(225 100% 40%) #0033CD
// --brand-accent: hsl(158 90% 54%)   #1FF3A5

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardHover = {
  hover: {
    y: -8,
    scale: 1.02,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
}

export function HowItWorks() {
  const steps = [
    {
      icon: Users,
      step: "01",
      title: "Post Your Task",
      description: "Open the app, describe what you need, set your budget, and post it instantly to nearby students.",
      gradient: "from-[hsl(230,91%,54%)] via-[hsl(225,100%,40%)] to-[hsl(158,90%,54%)]",
      bgGradient: "from-[hsl(230,91%,97%)] via-[hsl(225,100%,98%)] to-[hsl(158,90%,97%)]",
      iconBg: "bg-gradient-to-br from-[hsl(230,91%,54%)] to-[hsl(225,100%,40%)]",
      accentColor: "text-[hsl(230,91%,54%)]",
      borderColor: "border-[hsl(230,91%,80%)]",
    },
    {
      icon: Zap,
      step: "02",
      title: "Get Instant Matches",
      description: "Receive push notifications when nearby students offer to help. Chat in-app and choose your helper.",
      gradient: "from-[hsl(225,100%,40%)] via-[hsl(230,91%,54%)] to-[hsl(158,90%,54%)]",
      bgGradient: "from-[hsl(225,100%,97%)] via-[hsl(230,91%,98%)] to-[hsl(158,90%,97%)]",
      iconBg: "bg-gradient-to-br from-[hsl(225,100%,40%)] to-[hsl(230,91%,54%)]",
      accentColor: "text-[hsl(225,100%,40%)]",
      borderColor: "border-[hsl(225,100%,80%)]",
    },
    {
      icon: CheckCircle,
      step: "03",
      title: "Track & Pay Securely",
      description: "Track your helper's location in real-time, confirm completion, and pay securely through the app.",
      gradient: "from-[hsl(158,90%,54%)] via-[hsl(230,91%,54%)] to-[hsl(225,100%,40%)]",
      bgGradient: "from-[hsl(158,90%,97%)] via-[hsl(230,91%,98%)] to-[hsl(225,100%,97%)]",
      iconBg: "bg-gradient-to-br from-[hsl(225,100%,40%)] to-[hsl(230,91%,54%)]",
      accentColor: "text-[hsl(225,100%,40%)]",
      borderColor: "border-[hsl(158,90%,80%)]",
    },
  ]

  return (
    <section id="how-it-works" className="relative py-20 sm:py-28 overflow-hidden">
      {/*  Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(230,91%,97%)] via-white to-[hsl(158,90%,97%)]" />

      {/* Decorative Elements */}
      <div className="absolute top-20 -left-32 w-64 h-64 bg-gradient-to-br from-[hsl(230,91%,54%)]/10 to-[hsl(225,100%,40%)]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-32 w-80 h-80 bg-gradient-to-br from-[hsl(158,90%,54%)]/10 to-[hsl(225,100%,40%)]/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[hsl(225,100%,40%)]/10 to-[hsl(158,90%,54%)]/10 rounded-full blur-3xl" />

      {/* Floating Geometric Shapes */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-1/4 right-1/4 w-16 h-16 border-2 border-[hsl(230,91%,54%)]/20 rounded-lg"
      />
      <motion.div
        animate={{
          rotate: [360, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-gradient-to-br from-[hsl(158,90%,54%)]/20 to-[hsl(225,100%,40%)]/20 rounded-full"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[hsl(230,91%,54%)]/10 to-[hsl(225,100%,40%)]/10 text-[hsl(230,91%,54%)] px-4 py-2 rounded-full text-sm font-semibold border border-[hsl(230,91%,54%)]/20 backdrop-blur-sm mb-6"
          >
            <div className="w-2 h-2 bg-[hsl(230,91%,54%)] rounded-full animate-pulse" />
            Simple Process
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[hsl(229,89%,4%)] font-montserrat mb-6 leading-tight"
          >
            How the App
            <br />
            <span className="text-primary">
              Works
            </span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-xl text-[hsl(229,89%,20%)] max-w-2xl mx-auto leading-relaxed">
            Get help in three simple steps. Fast, secure, and designed for student life.
          </motion.p>
        </motion.div>

        <motion.div
          className="relative"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[hsl(230,91%,80%)] to-transparent transform -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div key={step.title} variants={fadeInUp} whileHover="hover">
                <motion.div variants={cardHover}>
                  <Card
                    className={`relative text-center p-8 h-full border-2 ${step.borderColor} bg-gradient-to-br ${step.bgGradient} backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group`}
                  >
                    {/* Card Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(229,89%,4%)]/5 to-transparent" />
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `radial-gradient(circle at 20% 80%, hsl(230,91%,54%,0.1) 0%, transparent 50%), 
                                           radial-gradient(circle at 80% 20%, hsl(158,90%,54%,0.1) 0%, transparent 50%)`,
                        }}
                      />
                    </div>

                    <CardContent className="relative pt-6 z-10">
                      {/* Step Number */}
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-[hsl(230,91%,90%)]">
                        <span className={`text-lg font-bold ${step.accentColor}`}>{step.step}</span>
                      </div>

                      {/* Icon Container */}
                      <div className="relative mb-8">
                        <div
                          className={`w-20 h-20 ${step.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300`}
                        >
                          <step.icon className="w-10 h-10 text-white" />
                        </div>

                        {/* Connecting Arrow for Desktop */}
                        {index < steps.length - 1 && (
                          <div className="hidden lg:block absolute top-10 -right-16 z-20">
                            <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-[hsl(230,91%,90%)]">
                              <ArrowRight className="w-5 h-5 text-[hsl(230,91%,54%)]" />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-[hsl(229,89%,4%)] mb-4 font-montserrat group-hover:text-[hsl(229,89%,20%)] transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-[hsl(229,89%,20%)] leading-relaxed text-lg">{step.description}</p>
                      </div>

                      {/* Decorative Bottom Element */}
                      <div
                        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-[hsl(230,91%,54%)] hover:bg-[hsl(225,100%,40%)] text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <span>Get Started Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <p className="text-sm text-[hsl(229,89%,20%)] mt-4">Join 50,000+ students already using GofaGuy</p>
        </motion.div>
      </div>
    </section>
  )
}
