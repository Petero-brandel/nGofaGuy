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

// Brand color classes (using Tailwind with custom colors or inline style as fallback)
const brand = {
  primary: "bg-[#1657FD] text-[#1657FD] border-[#1657FD]",
  primaryText: "text-[#1657FD]",
  primaryBg: "bg-[#1657FD]",
  primaryBorder: "border-[#1657FD]",
  primaryGradient: "bg-gradient-to-br from-[#1657FD] to-[#0033CD]",
  accent: "text-[#1FF3A5] bg-[#1FF3A5] border-[#1FF3A5]",
  accentText: "text-[#1FF3A5]",
  accentBg: "bg-[#1FF3A5]",
  accentBorder: "border-[#1FF3A5]",
  secondary: "bg-[#0033CD] text-[#0033CD] border-[#0033CD]",
  secondaryText: "text-[#0033CD]",
  secondaryBg: "bg-[#0033CD]",
  secondaryBorder: "border-[#0033CD]",
  dark: "bg-[#010411] text-[#010411] border-[#010411]",
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const cardHover = {
  hover: {
    y: -8,
    scale: 1.02,
    transition: { type: "spring", stiffness: 400, damping: 25 },
  },
}

const iconFloat = {
  animate: {
    y: [0, -4, 0],
    transition: {
      duration: 2.5,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

export function PopularServices() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const services = [
    {
      icon: Coffee,
      label: "Food & Drinks",
      description: "Meals, snacks & beverages delivered fresh to your dorm or study spot",
      gradient: brand.primaryGradient,
      bgColor: "bg-[#F5F8FF]", // subtle blue-tinted background
      iconBg: brand.primaryGradient,
      borderColor: brand.primaryBorder,
      popularity: "92%",
      count: "3.1k",
      trend: "+15%",
      avgTime: "12min",
      isPopular: true,
      button: brand.primaryGradient,
      buttonText: "text-white",
      trendColor: brand.accentText,
    },
    {
      icon: Package,
      label: "Delivery",
      description: "Packages, documents, and parcels delivered safely across campus",
      gradient: brand.secondaryBg,
      bgColor: "bg-[#F5F8FF]",
      iconBg: brand.secondaryBg,
      borderColor: brand.secondaryBorder,
      popularity: "95%",
      count: "2.8k",
      trend: "+22%",
      avgTime: "8min",
      isPopular: true,
      button: brand.secondaryBg,
      buttonText: "text-white",
      trendColor: brand.accentText,
    },
    {
      icon: Utensils,
      label: "Groceries",
      description: "Shopping for essentials, snacks, and daily necessities made easy",
      gradient: brand.accentBg,
      bgColor: "bg-[#F5FFF9]",
      iconBg: brand.accentBg,
      borderColor: brand.accentBorder,
      popularity: "88%",
      count: "2.2k",
      trend: "+18%",
      avgTime: "25min",
      isPopular: false,
      button: brand.accentBg,
      buttonText: "text-[#010411]",
      trendColor: brand.accentText,
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
    setCurrentIndex((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
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
      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100"
    >
      <div className={`w-12 h-12 rounded-xl ${brand.primaryBg} flex items-center justify-center mb-4`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )

  const ServiceCard = ({
    service,
    isActive,
  }: {
    service: (typeof services)[0]
    isActive: boolean
  }) => (
    <motion.div
      className={`flex-shrink-0 w-full max-w-md mx-auto transition-all duration-500 ${
        isActive ? "opacity-100 scale-100" : "opacity-60 scale-95"
      }`}
      whileHover="hover"
    >
      <motion.div variants={cardHover} className="h-full">
        <div
          className={`relative ${service.bgColor} rounded-3xl p-6 h-full border ${service.borderColor} shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group overflow-hidden`}
        >
          <div className="relative z-10 h-full flex flex-col">
            {/* Header Section */}
            <div className="flex items-start justify-between mb-6">
              <motion.div variants={iconFloat} className="relative">
                <div
                  className={`w-16 h-16 ${service.iconBg} rounded-xl flex items-center justify-center shadow-md`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </motion.div>

              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900 mb-1">{service.count}</div>
                <div className="text-xs text-gray-600 font-medium">monthly requests</div>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.label}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center bg-white/80 rounded-lg p-2 border border-gray-100">
                  <div className={`text-lg font-bold ${brand.primaryText}`}>{service.popularity}</div>
                  <div className="text-xs text-gray-500">Success</div>
                </div>
                <div className="text-center bg-white/80 rounded-lg p-2 border border-gray-100">
                  <div className={`text-lg font-bold ${service.trendColor}`}>{service.trend}</div>
                  <div className="text-xs text-gray-500">Growth</div>
                </div>
                <div className="text-center bg-white/80 rounded-lg p-2 border border-gray-100">
                  <div className={`text-lg font-bold ${brand.primaryText}`}>{service.avgTime}</div>
                  <div className="text-xs text-gray-500">Avg Time</div>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`mt-6 w-full ${service.button} ${service.buttonText} py-3 px-4 rounded-xl font-semibold text-sm shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2`}
            >
              <span>Browse {service.label}</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )

  return (
    <section id="services" className="relative py-16 overflow-hidden bg-gray-50">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.h2
            variants={fadeInUp}
            className={`text-3xl sm:text-4xl font-bold text-gray-900 mb-4`}
          >
            More than just services
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-gray-600 max-w-2xl mx-auto">
            From quick food runs to study materials - discover the most popular services on campus.
          </motion.p>
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
            description="Switch your app to the language you're most comfortable with."
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
                  <ServiceCard service={service} isActive={index === currentIndex} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200 hover:bg-gray-50 transition-all duration-200 z-10"
          >
            <ChevronLeft className={`w-5 h-5 ${brand.primaryText}`} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200 hover:bg-gray-50 transition-all duration-200 z-10"
          >
            <ChevronRight className={`w-5 h-5 ${brand.primaryText}`} />
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
                  index === currentIndex
                    ? "w-6 h-2 rounded-full"
                    : "w-2 h-2 rounded-full hover:bg-gray-400"
                } ${index === currentIndex ? brand.primaryBg : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center gap-2 ${brand.primaryBg} hover:bg-[#0033CD] text-white px-8 py-3 rounded-xl font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-300`}
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </section>
  )
}