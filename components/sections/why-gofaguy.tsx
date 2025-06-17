"use client"

import { Badge } from "@/components/ui/badge"
import { Clock, Users, Shield } from "lucide-react"
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

export function WhyGofaGuy() {
  const benefits = [
    {
      icon: Clock,
      badge: "Lightning Fast",
      title: "Instant Connections",
      description:
        "Push notifications and location-based matching connect you with nearby helpers in seconds, not hours.",
      badgeColor: "bg-primary/10 text-primary hover:bg-primary/10",
    },
    {
      icon: Users,
      badge: "Student-Focused",
      title: "Made for Campus Life",
      description:
        "Designed specifically for university students with features like dorm delivery, class schedules, and student pricing.",
      badgeColor: "bg-accent-green/10 text-accent-green hover:bg-accent-green/10",
    },
    {
      icon: Shield,
      badge: "Safe & Secure",
      title: "Built-in Safety",
      description:
        "Real-time tracking, in-app messaging, secure payments, and university verification keep everyone protected.",
      badgeColor: "bg-accent-yellow/10 text-accent-yellow hover:bg-accent-yellow/10",
    },
  ]

  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-montserrat">Why Choose the GofaGuy App?</h2>
          <p className="mt-4 text-xl text-gray-600">The smartest way to get campus tasks done</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {benefits.map((benefit) => (
            <motion.div key={benefit.title} className="text-center" variants={fadeInUp}>
              <Badge className={`${benefit.badgeColor} mb-4 px-4 py-2`}>
                <benefit.icon className="w-4 h-4 mr-2" />
                {benefit.badge}
              </Badge>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-montserrat">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
