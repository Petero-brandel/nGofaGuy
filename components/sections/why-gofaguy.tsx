"use client"

import { Badge } from "@/components/ui/badge"
import { Clock, Users, Shield, Zap, Star, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

// GofaGuy NG Brand Colors (Tailwind HSL format)
const BRAND_PRIMARY = "from-[hsl(230,91%,54%)] to-[hsl(225,100%,40%)]"
const BRAND_PRIMARY_BG = "from-[hsl(230,91%,97%)] to-[hsl(225,100%,98%)]"
const BRAND_ICON_BG = "bg-gradient-to-br from-[hsl(230,91%,54%)] to-[hsl(225,100%,40%)]"
const BRAND_BADGE_GRADIENT = "from-[hsl(230,91%,54%)/10] to-[hsl(225,100%,40%)/10]"
const BRAND_BORDER_COLOR = "border-[hsl(230,91%,54%)/30]"
const BRAND_ACCENT_COLOR = "text-[hsl(230,91%,54%)]"
const BRAND_TEXT_GRADIENT = "bg-gradient-to-r from-[hsl(230,91%,54%)] to-[hsl(158,90%,54%)]"
const BRAND_ACCENT_GRADIENT = "from-[hsl(230,91%,54%)] to-[hsl(158,90%,54%)]"

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
      description:
        "Push notifications and location-based matching connect you with nearby helpers in seconds, not hours. Get help when you need it most.",
      gradient: BRAND_PRIMARY,
      bgGradient: BRAND_PRIMARY_BG,
      iconBg: BRAND_ICON_BG,
      badgeGradient: BRAND_BADGE_GRADIENT,
      borderColor: BRAND_BORDER_COLOR,
      accentColor: BRAND_ACCENT_COLOR,
      stats: "< 30 seconds",
      feature: "Real-time matching",
    },
    {
      icon: Users,
      badge: "Student-Focused",
      title: "Made for Campus Life",
      description:
        "Designed specifically for university students with features like dorm delivery, class schedules, and student pricing that fits your budget.",
      gradient: BRAND_PRIMARY,
      bgGradient: BRAND_PRIMARY_BG,
      iconBg: BRAND_ICON_BG,
      badgeGradient: BRAND_BADGE_GRADIENT,
      borderColor: BRAND_BORDER_COLOR,
      accentColor: BRAND_ACCENT_COLOR,
      stats: "50+ campuses",
      feature: "Student verification",
    },
    {
      icon: Shield,
      badge: "Safe & Secure",
      title: "Built-in Safety",
      description:
        "Real-time tracking, in-app messaging, secure payments, and university verification keep everyone protected throughout the process.",
      gradient: BRAND_PRIMARY,
      bgGradient: BRAND_PRIMARY_BG,
      iconBg: BRAND_ICON_BG,
      badgeGradient: BRAND_BADGE_GRADIENT,
      borderColor: BRAND_BORDER_COLOR,
      accentColor: BRAND_ACCENT_COLOR,
      stats: "99.9% secure",
      feature: "End-to-end encryption",
    },
  ]

  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Enhanced Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${BRAND_PRIMARY_BG}`} />

      {/* Decorative Elements */}
      <div className={`absolute top-20 -left-40 w-80 h-80 bg-gradient-to-br ${BRAND_PRIMARY} opacity-10 rounded-full blur-3xl`} />
      <div className={`absolute bottom-20 -right-40 w-96 h-96 bg-gradient-to-br ${BRAND_PRIMARY} opacity-10 rounded-full blur-3xl`} />
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-gradient-to-br ${BRAND_PRIMARY} opacity-5 rounded-full blur-3xl`} />

      {/* Floating Geometric Shapes */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className={`absolute top-1/4 right-1/4 w-24 h-24 border-2 border-[hsl(230,91%,54%)/30] rounded-3xl`}
      />
      <motion.div
        animate={{
          y: [0, -40, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className={`absolute bottom-1/4 left-1/4 w-20 h-20 bg-gradient-to-br ${BRAND_PRIMARY} opacity-20 rounded-2xl`}
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
            className={`inline-flex items-center gap-2 bg-gradient-to-r ${BRAND_BADGE_GRADIENT} ${BRAND_ACCENT_COLOR} px-4 py-2 rounded-full text-sm font-semibold border ${BRAND_BORDER_COLOR} backdrop-blur-sm mb-6`}
          >
            <Star className="w-4 h-4" />
            Why Choose Us
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 font-montserrat mb-6 leading-tight"
          >
            Why Choose the
            <br />
            <span className='text-primary'>
              GofaGuy App?
            </span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The smartest way to get campus tasks done. Built by students, for students, with features that actually
            matter.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 lg:gap-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {benefits.map((benefit, index) => (
            <motion.div key={benefit.title} variants={fadeInUp} whileHover="hover">
              <motion.div variants={cardHover} className="h-full">
                <div
                  className={`relative text-center p-8 h-full border-2 ${benefit.borderColor} bg-gradient-to-br ${benefit.bgGradient} backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl group overflow-hidden`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `radial-gradient(circle at 25% 75%, hsl(230,91%,54%,0.15) 0%, transparent 50%), 
                                         radial-gradient(circle at 75% 25%, hsl(158,90%,54%,0.15) 0%, transparent 50%),
                                         radial-gradient(circle at 50% 50%, hsl(225,100%,40%,0.1) 0%, transparent 50%)`,
                      }}
                    />
                  </div>

                  {/* Top Badge */}
                  <motion.div variants={fadeInUp} className="mb-8 text-white">
                    <Badge
                      className={`bg-gradient-to-r ${benefit.badgeGradient} ${benefit.accentColor}  text-white border-0 px-4 py-2 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      <benefit.icon className="w-4 h-4 mr-2 text-white" />
                      {benefit.badge}
                    </Badge>
                  </motion.div>

                  {/* Icon Container */}
                  <motion.div variants={iconPulse} className="relative mb-8">
                    <div
                      className={`w-24 h-24 ${benefit.iconBg} rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:shadow-3xl transition-all duration-500`}
                    >
                      <benefit.icon className="w-12 h-12 text-white" />
                    </div>

                    {/* Glow Effect */}
                    <div
                      className={`absolute inset-0 w-24 h-24 mx-auto bg-gradient-to-r ${benefit.gradient} rounded-3xl opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500`}
                    />

                    {/* Stats Badge */}
                    <div className="absolute -top-2 -right-2 bg-white rounded-full px-3 py-1 shadow-lg border border-gray-100">
                      <span className={`text-xs font-bold ${benefit.accentColor}`}>{benefit.stats}</span>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-6 relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat group-hover:text-gray-800 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{benefit.description}</p>

                    {/* Feature Highlight */}
                    <div className="flex items-center justify-center gap-2 pt-4">
                      <CheckCircle className={`w-5 h-5 ${benefit.accentColor}`} />
                      <span className={`text-sm font-semibold ${benefit.accentColor}`}>{benefit.feature}</span>
                    </div>
                  </div>

                  {/* Bottom Gradient Bar */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${benefit.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-b-3xl`}
                  />

                  {/* Corner Accent */}
                  <div
                    className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${benefit.gradient} opacity-10 rounded-bl-3xl rounded-tr-3xl`}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100/50 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="space-y-2">
                <div className={`text-3xl font-bold text-primary bg-clip-text text-transparent`}>
                  50k+
                </div>
                <div className="text-sm text-gray-600 font-medium">Active Students</div>
              </div>
              <div className="space-y-2">
                <div className={`text-3xl font-bold text-primary bg-clip-text text-transparent`}>
                  99.8%
                </div>
                <div className="text-sm text-gray-600 font-medium">Satisfaction Rate</div>
              </div>
              <div className="space-y-2">
                <div className={`text-3xl font-bold text-primary bg-clip-text text-transparent`}>
                  24/7
                </div>
                <div className="text-sm text-gray-600 font-medium">Support Available</div>
              </div>
              <div className="space-y-2">
                <div className={`text-3xl font-bold text-primary bg-clip-text text-transparent`}>
                  15s
                </div>
                <div className="text-sm text-gray-600 font-medium">Avg Response Time</div>
              </div>
            </div>
          </div>

          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="mt-12">
            <button className={`inline-flex items-center gap-3 bg-primary hover:from-[hsl(230,91%,54%)/90] hover:to-[hsl(158,90%,54%)/90] text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300`}>
              <span>Experience the Difference</span>
              <Zap className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
