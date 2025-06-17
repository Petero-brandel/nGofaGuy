"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Package, BookOpen, Shirt, Coffee, Car, Utensils } from "lucide-react"
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

export function PopularServices() {
  const services = [
    { icon: Package, label: "Delivery", color: "bg-blue-50 text-blue-600" },
    { icon: BookOpen, label: "Notes", color: "bg-green-50 text-green-600" },
    { icon: Shirt, label: "Laundry", color: "bg-purple-50 text-purple-600" },
    { icon: Coffee, label: "Food Run", color: "bg-orange-50 text-orange-600" },
    { icon: Car, label: "Rides", color: "bg-red-50 text-red-600" },
    { icon: Utensils, label: "Groceries", color: "bg-yellow-50 text-yellow-600" },
  ]

  return (
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
          {services.map((service) => (
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
  )
}
