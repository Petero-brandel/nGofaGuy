"use client"

import { Badge } from "@/components/ui/badge"
import { Clock, Users, Shield, Zap, Star, CheckCircle } from "lucide-react"
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
    y: -12,
    scale: 1.03,
    transition: { type: "spring", stiffness: 400, damping: 25 },
  },
}

const iconPulse = {
  animate: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

export function WhyGofaGuy() {
  const benefits = [
    {
      icon: Clock,
      badge: "Lightning Fast",
      title: "Instant Connections",
      description: "Push notifications and location-based matching connect you with nearby helpers in seconds, not hours.",
      stats: "< 30 seconds",
      feature: "Real-time matching",
    },
    {
      icon: Users,
      badge: "Student-Focused",
      title: "Made for Campus Life",
      description: "Designed specifically for university students with features like dorm delivery and student pricing.",
      stats: "50+ campuses",
      feature: "Student verification",
    },
    {
      icon: Shield,
      badge: "Safe & Secure",
      title: "Built-in Safety",
      description: "Real-time tracking, in-app messaging, secure payments, and university verification keep everyone protected.",
      stats: "99.9% secure",
      feature: "End-to-end encryption",
    },
  ]

  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background/50" />
      <div className="absolute top-20 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

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
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold border border-border mb-6"
          >
            <Star className="w-4 h-4" />
            Why Choose Us
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground font-montserrat mb-6 leading-tight"
          >
            Why Choose the
            <br />
            <span className="text-primary">GofaGuy App?</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The smartest way to get campus tasks done. Built by students, for students.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 lg:gap-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {benefits.map((benefit) => (
            <motion.div key={benefit.title} variants={fadeInUp} whileHover="hover">
              <motion.div variants={cardHover} className="h-full">
                <div className="relative h-full border border-border bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-500 rounded-3xl group overflow-hidden p-8">
                  {/* Badge */}
                  <div className="mb-8">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                      <benefit.icon className="w-4 h-4 mr-2" />
                      {benefit.badge}
                    </Badge>
                  </div>

                  {/* Icon */}
                  <motion.div variants={iconPulse} className="relative mb-8">
                    <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto shadow-sm">
                      <benefit.icon className="w-12 h-12 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-background rounded-full px-3 py-1 shadow-sm border border-border">
                      <span className="text-xs font-bold text-primary">{benefit.stats}</span>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    <div className="flex items-center justify-center gap-2 pt-4">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-sm font-semibold text-primary">{benefit.feature}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 shadow-sm border border-border max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "50k+", label: "Active Students" },
                { value: "99.8%", label: "Satisfaction Rate" },
                { value: "24/7", label: "Support Available" },
                { value: "15s", label: "Avg Response Time" },
              ].map((stat) => (
                <div key={stat.label} className="space-y-2">
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-12">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-2xl font-semibold text-lg shadow-lg transition-all">
              Experience the Difference <Zap className="w-5 h-5 inline ml-2" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}