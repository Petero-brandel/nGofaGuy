"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Zap, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export function HowItWorks() {
  const steps = [
    {
      icon: Users,
      title: "1. Post Your Task",
      description: "Open the app, describe what you need, set your budget, and post it instantly to nearby students.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Zap,
      title: "2. Get Instant Matches",
      description: "Receive push notifications when nearby students offer to help. Chat in-app and choose your helper.",
      color: "bg-accent-yellow/10 text-accent-yellow",
    },
    {
      icon: CheckCircle,
      title: "3. Track & Pay",
      description: "Track your helper's location in real-time, confirm completion, and pay securely through the app.",
      color: "bg-accent-green/10 text-accent-green",
    },
  ]

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-montserrat">How the App Works</h2>
          <p className="mt-4 text-xl text-gray-600">Get help in three simple taps</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {steps.map((step, index) => (
            <motion.div key={step.title} variants={fadeInUp}>
              <Card className="text-center p-8 h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 font-montserrat">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
