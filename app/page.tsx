"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Users,
  Zap,
  Shield,
  Package,
  BookOpen,
  Shirt,
  Coffee,
  Car,
  Utensils,
  CheckCircle,
  Clock,
} from "lucide-react"
import Link from "next/link"
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

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-white rotate-45" />
              </div>
              <span className="text-xl font-bold text-gray-900 font-montserrat">GofaGuy</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors">
                How It Works
              </Link>
              <Link href="#services" className="text-gray-600 hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="#about" className="text-gray-600 hover:text-primary transition-colors">
                About
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="hidden sm:inline-flex">
                Sign In
              </Button>
              <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center" initial="initial" animate="animate" variants={staggerContainer}>
            <motion.div className="mb-6" variants={fadeInUp}>
              <Badge className="bg-primary/10 text-primary px-4 py-2 text-sm font-medium">
                📱 Now Available on Mobile
              </Badge>
            </motion.div>
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 font-montserrat"
              variants={fadeInUp}
            >
              Campus Tasks Made Simple. <span className="text-primary">Right in Your Pocket.</span>
            </motion.h1>
            <motion.p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto" variants={fadeInUp}>
              Download the GofaGuy app and connect instantly with fellow students for deliveries, notes, rides, and more
              — all from your phone.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={fadeInUp}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-black hover:bg-gray-800 text-white px-6 py-3 text-base font-semibold transition-all hover:scale-105 flex items-center"
                >
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  App Store
                </Button>
                <Button
                  size="lg"
                  className="bg-black hover:bg-gray-800 text-white px-6 py-3 text-base font-semibold transition-all hover:scale-105 flex items-center"
                >
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  Google Play
                </Button>
              </div>
            </motion.div>
            <motion.p className="mt-4 text-sm text-gray-500" variants={fadeInUp}>
              Free download • Available for iOS and Android
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
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
            <motion.div variants={fadeInUp}>
              <Card className="text-center p-8 h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 font-montserrat">1. Post Your Task</h3>
                  <p className="text-gray-600">
                    Open the app, describe what you need, set your budget, and post it instantly to nearby students.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="text-center p-8 h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-accent-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-8 h-8 text-accent-yellow" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 font-montserrat">2. Get Instant Matches</h3>
                  <p className="text-gray-600">
                    Receive push notifications when nearby students offer to help. Chat in-app and choose your helper.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="text-center p-8 h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-accent-green" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 font-montserrat">3. Track & Pay</h3>
                  <p className="text-gray-600">
                    Track your helper's location in real-time, confirm completion, and pay securely through the app.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Popular Services */}
      <section id="services" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-montserrat">Popular Services</h2>
            <p className="mt-4 text-xl text-gray-600">What can your fellow students help you with?</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { icon: Package, label: "Delivery", color: "bg-blue-50 text-blue-600" },
              { icon: BookOpen, label: "Notes", color: "bg-green-50 text-green-600" },
              { icon: Shirt, label: "Laundry", color: "bg-purple-50 text-purple-600" },
              { icon: Coffee, label: "Food Run", color: "bg-orange-50 text-orange-600" },
              { icon: Car, label: "Rides", color: "bg-red-50 text-red-600" },
              { icon: Utensils, label: "Groceries", color: "bg-yellow-50 text-yellow-600" },
            ].map((service, index) => (
              <motion.div key={service.label} variants={fadeInUp}>
                <Card className="text-center p-6 hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
                  <CardContent className="pt-4">
                    <div
                      className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mx-auto mb-4`}
                    >
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-gray-900">{service.label}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* App Features */}
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
            {[
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
            ].map((feature, index) => (
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

      {/* Why GofaGuy */}
      <section id="about" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-montserrat">
              Why Choose the GofaGuy App?
            </h2>
            <p className="mt-4 text-xl text-gray-600">The smartest way to get campus tasks done</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="text-center" variants={fadeInUp}>
              <Badge className="bg-primary/10 text-primary hover:bg-primary/10 mb-4 px-4 py-2">
                <Clock className="w-4 h-4 mr-2" />
                Lightning Fast
              </Badge>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-montserrat">Instant Connections</h3>
              <p className="text-gray-600">
                Push notifications and location-based matching connect you with nearby helpers in seconds, not hours.
              </p>
            </motion.div>

            <motion.div className="text-center" variants={fadeInUp}>
              <Badge className="bg-accent-green/10 text-accent-green hover:bg-accent-green/10 mb-4 px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                Student-Focused
              </Badge>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-montserrat">Made for Campus Life</h3>
              <p className="text-gray-600">
                Designed specifically for university students with features like dorm delivery, class schedules, and
                student pricing.
              </p>
            </motion.div>

            <motion.div className="text-center" variants={fadeInUp}>
              <Badge className="bg-accent-yellow/10 text-accent-yellow hover:bg-accent-yellow/10 mb-4 px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                Safe & Secure
              </Badge>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-montserrat">Built-in Safety</h3>
              <p className="text-gray-600">
                Real-time tracking, in-app messaging, secure payments, and university verification keep everyone
                protected.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 className="text-3xl sm:text-4xl font-bold text-white font-montserrat" variants={fadeInUp}>
              Download GofaGuy Today
            </motion.h2>
            <motion.p className="mt-4 text-xl text-blue-100" variants={fadeInUp}>
              Join thousands of students already making campus life easier with the GofaGuy app.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={fadeInUp}
            >
              <Button
                size="lg"
                className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 text-lg font-semibold transition-all hover:scale-105 flex items-center"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download for iOS
              </Button>
              <Button
                size="lg"
                className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 text-lg font-semibold transition-all hover:scale-105 flex items-center"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Download for Android
              </Button>
            </motion.div>
            <motion.p className="mt-6 text-sm text-blue-200" variants={fadeInUp}>
              Free download • No subscription fees • Pay only when you use it
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-white rotate-45" />
              </div>
              <span className="text-xl font-bold text-gray-900 font-montserrat">GofaGuy</span>
            </div>
            <nav className="flex flex-wrap justify-center md:justify-end space-x-8">
              <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                Contact
              </Link>
              <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </nav>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-500">
              © {new Date().getFullYear()} GofaGuy. Made with ❤️ for students, by students.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
