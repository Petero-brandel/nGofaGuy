"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
}

const phoneVariant = {
  hidden: { x: 40, opacity: 0, scale: 0.9 },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 20, delay: 0.3 },
  },
}

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Grid Pattern Overlay */}
      <div className="hero-grid-pattern" />

      {/* Enhanced Background Blur Elements */}
      <div className="absolute top-10 -left-40 w-80 h-80 bg-gradient-to-br from-primary/12 to-blue-400/8 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-300/6 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -left-32 w-72 h-72 bg-gradient-to-br from-accent-green/8 to-emerald-400/6 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-48 w-64 h-64 bg-gradient-to-br from-accent-yellow/10 to-orange-300/6 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-br from-indigo-400/6 to-purple-300/4 rounded-full blur-3xl" />
      <div className="absolute top-20 right-1/3 w-56 h-56 bg-gradient-to-br from-cyan-400/8 to-blue-300/6 rounded-full blur-3xl" />

      {/* Enhanced Animated Floating Elements */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/2 w-32 h-32 bg-gradient-to-br from-primary/6 to-purple-400/4 rounded-full blur-2xl"
      />

      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, 15, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-gradient-to-br from-accent-green/6 to-teal-300/4 rounded-full blur-2xl"
      />

      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute top-3/4 left-1/3 w-24 h-24 bg-gradient-to-br from-accent-yellow/8 to-amber-300/6 rounded-full blur-2xl"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left order-1"
          >
            {/* Improved Badge */}
            <motion.div variants={item} className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/8 to-purple-500/8 text-primary px-5 py-2.5 rounded-full text-sm font-semibold border border-primary/15 backdrop-blur-sm shadow-lg">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Now Live on Campus 🎓
              </div>
            </motion.div>

            {/* Enhanced Main Headline */}
            <motion.div variants={item} className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 leading-tight font-montserrat">
                Focus on what
                <br />
                <span>
                  matters most
                </span>
              </h1>
            </motion.div>

            {/* Enhanced Subtitle */}
            <motion.p
              variants={item}
              className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Let verified students handle your campus errands while you focus on academics.
              <span className="text-gray-900 font-semibold block mt-2">
                Fast, reliable, and built for student life.
              </span>
            </motion.p>

            {/* Enhanced Social Proof */}
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 py-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {/* Enhanced Real African Student Profile Pictures */}
                  <motion.div
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    className="w-11 h-11 rounded-full border-3 border-white shadow-lg overflow-hidden"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=face"
                      alt="Student testimonial"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    className="w-11 h-11 rounded-full border-3 border-white shadow-lg overflow-hidden"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                      alt="Student testimonial"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    className="w-11 h-11 rounded-full border-3 border-white shadow-lg overflow-hidden"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                      alt="Student testimonial"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Enhanced +2k indicator */}
                  <div className="w-11 h-11 rounded-full bg-[#010411] border-3 border-white flex items-center justify-center text-white text-xs font-semibold shadow-lg">
                    +2k
                  </div>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    <span className="text-2xl font-bold text-gray-900">4.9</span>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <motion.svg
                          key={i}
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 20 20"
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </motion.svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">from 2,345+ students</p>
                </div>
              </div>

              <div className="h-6 w-px bg-gray-200 hidden sm:block" />

              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gray-900">50k+</div>
                <p className="text-sm text-gray-500">Downloads</p>
              </div>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3.5 rounded-xl flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold backdrop-blur-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gray-900 hover:bg-black text-white px-6 py-3.5 rounded-xl flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold backdrop-blur-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </motion.button>
            </motion.div>

            {/* Enhanced Trust Indicators */}
            <motion.div
              variants={item}
              className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-sm text-gray-500"
            >
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">Free to download</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">Student verified</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">Secure payments</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Right Content - Phone Mockup */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={phoneVariant}
            className="lg:col-span-5 flex justify-center lg:justify-end order-2"
          >
            <div className="relative">
              {/* Enhanced Floating Elements around Phone */}
              <motion.div
                animate={{ y: [-8, 8, -8], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-primary/15 to-purple-500/10 rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-xl"
              >
                <span className="text-3xl"></span>
              </motion.div>

              <motion.div
                animate={{ y: [8, -8, 8], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -right-6 w-18 h-18 bg-gradient-to-br from-accent-green/15 to-accent-yellow/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-xl"
              >
                <span className="text-2xl"></span>
              </motion.div>

              <motion.div
                animate={{ x: [-5, 5, -5], y: [-3, 3, -3] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-br from-cyan-400/10 to-blue-300/8 rounded-full backdrop-blur-sm border border-white/15 flex items-center justify-center shadow-lg"
              >
                <span className="text-lg"></span>
              </motion.div>

              <motion.div
                animate={{ x: [5, -5, 5], y: [3, -3, 3] }}
                transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 3 }}
                className="absolute top-1/4 -right-8 w-14 h-14 bg-gradient-to-br from-pink-400/10 to-purple-300/8 rounded-xl backdrop-blur-sm border border-white/15 flex items-center justify-center shadow-lg"
              >
                <span className="text-xl"></span>
              </motion.div>
              
              <div className="w-[380px]">
                <Image
                  src="/delivery3.png"
                  alt="GofaGuy app on phone"
                  width={10}
                  height={10}
                  className="w-full rounded-sm mr-8 shadow-lg"
                />
              </div>
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
