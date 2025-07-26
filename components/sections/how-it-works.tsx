"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Zap, CheckCircle, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

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
    },
    {
      icon: Zap,
      step: "02",
      title: "Get Instant Matches",
      description: "Receive push notifications when nearby students offer to help. Chat in-app and choose your helper.",
    },
    {
      icon: CheckCircle,
      step: "03",
      title: "Track & Pay Securely",
      description: "Track your helper's location in real-time, confirm completion, and pay securely through the app.",
    },
  ]

  return (
    <section id="how-it-works" className="relative py-20 sm:py-28 overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background/50" />
      <div className="absolute top-20 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

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
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold border border-primary/20 mb-6"
          >
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Simple Process
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground font-montserrat mb-6 leading-tight"
          >
            How the App
            <br />
            <span className="text-primary">Works</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
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
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent transform -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div key={step.title} variants={fadeInUp} whileHover="hover">
                <motion.div variants={cardHover}>
                  <Card className="relative h-full border border-border bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all overflow-hidden group">
                    <CardContent className="relative pt-6 pb-8 px-6">
                      {/* Step Number */}
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-background rounded-full shadow-sm flex items-center justify-center border border-border">
                        <span className="text-lg font-bold text-primary">{step.step}</span>
                      </div>

                      {/* Icon Container */}
                      <div className="relative mb-8">
                        <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                          <step.icon className="w-10 h-10 text-primary" />
                        </div>

                        {/* Connecting Arrow */}
                        {index < steps.length - 1 && (
                          <div className="hidden lg:block absolute top-10 -right-16 z-20">
                            <div className="w-12 h-12 bg-background rounded-full shadow-sm flex items-center justify-center border border-border">
                              <ArrowRight className="w-5 h-5 text-primary" />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-foreground font-montserrat">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg transition-all"
          >
            Get Started Now <ArrowRight className="w-5 h-5 inline ml-2" />
          </motion.button>
          <p className="text-sm text-muted-foreground mt-4">Join 50,000+ students already using GofaGuy</p>
        </motion.div>
      </div>
    </section>
  )
}