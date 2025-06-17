"use client"

import { Card, CardContent } from "@/components/ui/card"
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

export function AppFeatures() {
  const features = [
    {
      icon: "🔔",
      title: "Push Notifications",
      description: "Get instant alerts when someone wants to help with your task",
    },
    {
      icon: "📍",
      title: "Real-time Tracking",
      description: "Track your helper's location and estimated arrival time",
    },
    {
      icon: "💬",
      title: "In-app Chat",
      description: "Communicate safely with helpers without sharing personal info",
    },
    {
      icon: "💳",
      title: "Secure Payments",
      description: "Pay safely through the app with multiple payment options",
    },
    {
      icon: "⭐",
      title: "Rating System",
      description: "Rate and review helpers to build a trusted community",
    },
    {
      icon: "🎓",
      title: "Student Verified",
      description: "All users verified with university email addresses",
    },
    {
      icon: "📱",
      title: "Offline Mode",
      description: "View your task history and messages even without internet",
    },
    {
      icon: "🔒",
      title: "Privacy First",
      description: "Your personal information stays private and secure",
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-montserrat">Powerful App Features</h2>
          <p className="mt-4 text-xl text-gray-600">Everything you need in one simple app</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={fadeInUp}>
              <Card className="text-center p-6 h-full hover:shadow-lg transition-all hover:scale-105">
                <CardContent className="pt-4">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2 font-montserrat">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
