"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import {
  Package,
  BookOpen,
  Shirt,
  Coffee,
  Car,
  Utensils,
  ArrowRight,
  TrendingUp,
  Users,
  Clock,
  ChevronLeft,
  ChevronRight,
  Globe,
  PieChart,
} from "lucide-react"

const springTransition = {
  type: "spring",
  stiffness: 400,
  damping: 30
}

export function PopularServices() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const services = [
    {
      icon: Coffee,
      label: "Food & Drinks",
      description: "Meals, snacks & beverages delivered fresh to your dorm or study spot",
      popularity: "92%",
      count: "3.1k",
      trend: "+15%",
      avgTime: "12min",
    },
    {
      icon: Package,
      label: "Delivery",
      description: "Packages, documents, and parcels delivered safely across campus",
      popularity: "95%",
      count: "2.8k",
      trend: "+22%",
      avgTime: "8min",
    },
    {
      icon: Utensils,
      label: "Groceries",
      description: "Shopping for essentials, snacks, and daily necessities made easy",
      popularity: "88%",
      count: "2.2k",
      trend: "+18%",
      avgTime: "25min",
    },
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPlaying, services.length])

  const nextSlide = () => {
    setIsPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % services.length)
    setTimeout(() => setIsPlaying(true), 5000)
  }

  const prevSlide = () => {
    setIsPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)
    setTimeout(() => setIsPlaying(true), 5000)
  }

  const goToSlide = (index: number) => {
    setIsPlaying(false)
    setCurrentIndex(index)
    setTimeout(() => setIsPlaying(true), 5000)
  }

  const FeatureCard = ({
    title,
    description,
    icon: Icon,
  }: {
    title: string
    description: string
    icon: any
  }) => (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-background rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-border"
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  )

  return (
    <section id="services" className="relative py-16 overflow-hidden bg-background/50">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            More than just services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From quick food runs to study materials - discover the most popular services on campus.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <FeatureCard
            title="Inclusive App"
            description="Everyone can use GofaGuy, Post errands or run them for cash."
            icon={Globe}
          />
          <FeatureCard
            title="Expense Management"
            description="Track your expenses to better understand your spending habits."
            icon={PieChart}
          />
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Carousel */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {services.map((service, index) => (
                <div key={service.label} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    className={`flex-shrink-0 w-full max-w-md mx-auto transition-all duration-500 ${
                      index === currentIndex ? "opacity-100 scale-100" : "opacity-60 scale-95"
                    }`}
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative bg-card rounded-3xl p-6 h-full border border-border shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group overflow-hidden">
                      <div className="relative z-10 h-full flex flex-col">
                        {/* Header Section */}
                        <div className="flex items-start justify-between mb-6">
                          <motion.div 
                            animate={{
                              y: [0, -4, 0],
                              transition: {
                                duration: 2.5,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                              },
                            }} 
                            className="relative"
                          >
                            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center shadow-sm">
                              <service.icon className="w-8 h-8 text-primary" />
                            </div>
                          </motion.div>

                          <div className="text-right">
                            <div className="text-2xl font-bold text-foreground mb-1">{service.count}</div>
                            <div className="text-xs text-muted-foreground font-medium">monthly requests</div>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="flex-1 space-y-4">
                          <div>
                            <h3 className="text-2xl font-bold text-foreground mb-2">{service.label}</h3>
                            <p className="text-muted-foreground text-sm">{service.description}</p>
                          </div>

                          {/* Stats Grid */}
                          <div className="grid grid-cols-3 gap-3">
                            <div className="text-center bg-background rounded-lg p-2 border border-border">
                              <div className="text-lg font-bold text-primary">{service.popularity}</div>
                              <div className="text-xs text-muted-foreground">Success</div>
                            </div>
                            <div className="text-center bg-background rounded-lg p-2 border border-border">
                              <div className="text-lg font-bold text-accent">{service.trend}</div>
                              <div className="text-xs text-muted-foreground">Growth</div>
                            </div>
                            <div className="text-center bg-background rounded-lg p-2 border border-border">
                              <div className="text-lg font-bold text-primary">{service.avgTime}</div>
                              <div className="text-xs text-muted-foreground">Avg Time</div>
                            </div>
                          </div>
                        </div>

                        {/* Action Button */}
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="mt-6 w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-4 rounded-xl font-semibold text-sm shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2"
                        >
                          <span>Browse {service.label}</span>
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-background rounded-full flex items-center justify-center shadow-sm border border-border hover:bg-accent/10 transition-all duration-200 z-10"
          >
            <ChevronLeft className="w-5 h-5 text-primary" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-background rounded-full flex items-center justify-center shadow-sm border border-border hover:bg-accent/10 transition-all duration-200 z-10"
          >
            <ChevronRight className="w-5 h-5 text-primary" />
          </motion.button>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {services.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex ? "w-6 h-2 rounded-full" : "w-2 h-2 rounded-full"
                } ${index === currentIndex ? "bg-primary" : "bg-border"}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-300"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}