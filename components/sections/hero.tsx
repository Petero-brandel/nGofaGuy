"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Search } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"


export function Hero() {
  const [activeTab, setActiveTab] = useState("Find runners")

  return (
    <section className="relative min-h-[600px] w-[95%] rounded-md mx-auto my-8 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/girl1.png')",
          filter: "brightness(0.2 saturate(1.2) blur(1.5px)",
        }}
      />

      {/* Modern Glassmorphism Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(120deg, rgba(1,4,17,0.95) 0%, rgba(0,0,5,0.65) 60%, rgba(0,0,0,0.7) 100%)",
            backdropFilter: "blur(10px) saturate(1.3) contrast(1.2)",
            WebkitBackdropFilter: "blur(10px) saturate(1.3) contrast(1.2)",
            mixBlendMode: "multiply",
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      {/* Subtle Animated Graphics Effects */}
      <motion.div
        className="absolute -top-32 -left-32 w-[300px] h-[300px] rounded-full bg-[#1FF3A5]/30 blur-3xl z-0"
        animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[200px] h-[200px] rounded-full bg-[#1657FB]/30 blur-2xl z-0"
        animate={{ scale: [1, 1.03, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
        >
          {/* Main Heading */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, type: "spring" }}
          >
            Connecting students in need to runners who deliver
          </motion.h1>

          {/* Tab Buttons */}
          <motion.div
            className="flex bg-white/10 backdrop-blur-md rounded-full p-1 mb-6 max-w-md shadow-xl border border-white/20"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {["Find runners", "Post tasks"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-[#1657FB] text-white shadow-lg"
                    : "text-white/80 hover:text-[#1FF3A5]"
                }`}
                style={{
                  position: "relative",
                  zIndex: 1,
                  overflow: "hidden",
                }}
              >
                {activeTab === tab && (
                  <motion.span
                    layoutId="tab-bg"
                    className="absolute inset-0 rounded-full bg-[#1657FB] z-[-1]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                {tab}
              </button>
            ))}
          </motion.div>

          {/* Search Bar */}
          <motion.div
            className="flex bg-white/40 backdrop-blur-2xl rounded-full shadow-2xl overflow-hidden max-w-2xl border border-white/30"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <input
              type="text"
              placeholder="Search by task type, skills, or location"
              className="flex-1 px-6 py-4 text-[#fff] placeholder-[#c2c1c1] bg-transparent focus:outline-none text-lg"
            />
            <Button className="bg-[#1657FB] hover:bg-[#0033CD] my-auto mr-4 text-white px-8 py-4 rounded-full flex items-center gap-2 text-lg font-medium shadow-lg transition-all duration-200">
              <Search className="w-5 h-5" />
              Search
            </Button>
          </motion.div>

          {/* Company Logos */}
          <motion.div
            className="flex items-center gap-8 mt-12 opacity-90"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <span className="text-white text-sm font-medium">Trusted by:</span>
            {/* Microsoft Logo */}
            <div className="flex items-center">
              <svg width="108" height="23" viewBox="0 0 108 23" fill="none" className="text-white">
                {/* ...paths unchanged... */}
                <path
                  d="M44.836 4.6v13.8h-2.4V7.583L38.119 18.4h-1.588L32.142 7.583V18.4h-2.4V4.6h2.4l4.704 11.893L41.548 4.6h3.288zm8.064 14.2c-1.588 0-2.823-.529-3.706-1.588-.882-1.058-1.323-2.47-1.323-4.235V8.9c0-1.764.441-3.176 1.323-4.235.883-1.058 2.118-1.588 3.706-1.588s2.823.53 3.706 1.588c.882 1.059 1.323 2.471 1.323 4.235v4.077c0 1.765-.441 3.177-1.323 4.235-.883 1.059-2.118 1.588-3.706 1.588zm0-2.117c.794 0 1.412-.265 1.853-.794.441-.529.662-1.235.662-2.117V8.9c0-.883-.221-1.588-.662-2.118-.441-.529-1.059-.794-1.853-.794s-1.412.265-1.853.794-.441.53-.662 1.235-.662 2.118v4.872c0 .882.221 1.588.662 2.117.441.529 1.059.794 1.853.794zm8.4 1.764V4.6h2.4v13.847h-2.4zm8.753.353c-1.588 0-2.824-.529-3.706-1.588-.883-1.058-1.324-2.47-1.324-4.235V8.9c0-1.764.441-3.176 1.324-4.235.882-1.058 2.118-1.588 3.706-1.588 1.588 0 2.823.53 3.705 1.588.883 1.059 1.324 2.471 1.324 4.235v4.077c0 1.765-.441 3.177-1.324 4.235-.882 1.059-2.117 1.588-3.705 1.588zm0-2.117c.794 0 1.412-.265 1.853-.794.441-.529.662-1.235.662-2.117V8.9c0-.883-.221-1.588-.662-2.118-.441-.529-1.059-.794-1.853-.794-.794 0-1.412.265-1.853.794-.441.53-.662 1.235-.662 2.118v4.872c0 .882.221 1.588.662 2.117.441.529 1.059.794 1.853.794zm15.017 1.764c-.353 0-.706-.088-1.059-.265-.353-.176-.618-.441-.794-.794l-3.353-7.412h-.353v8.471h-2.4V4.6h4.518c1.412 0 2.47.353 3.176 1.059.706.706 1.059 1.647 1.059 2.823 0 .883-.221 1.647-.662 2.294-.441.647-1.059 1.118-1.853 1.412l3.706 8.212h-2.985zm-5.559-10.588h2.118c.529 0 .941-.176 1.235-.529.294-.353.441-.794.441-1.323 0-.529-.147-.97-.441-1.323-.294-.353-.706-.529-1.235-.529h-2.118v3.704zm11.394 10.588c-1.588 0-2.824-.529-3.706-1.588-.883-1.058-1.324-2.47-1.324-4.235V8.9c0-1.764.441-3.176 1.324-4.235.882-1.058 2.118-1.588 3.706-1.588 1.588 0 2.823.53 3.705 1.588.883 1.059 1.324 2.471 1.324 4.235v4.077c0 1.765-.441 3.177-1.324 4.235-.882 1.059-2.117 1.588-3.705 1.588zm0-2.117c.794 0 1.412-.265 1.853-.794.441-.529.662-1.235.662-2.117V8.9c0-.883-.221-1.588-.662-2.118-.441-.529-1.059-.794-1.853-.794-.794 0-1.412.265-1.853.794-.441.53-.662 1.235-.662 2.118v4.872c0 .882.221 1.588.662 2.117.441.529 1.059.794 1.853.794zm10.812 1.764c-.706 0-1.323-.176-1.853-.529-.529-.353-.882-.882-1.059-1.588l2.118-.706c.088.353.265.618.529.794.265.176.618.265 1.059.265.441 0 .794-.088 1.059-.265.265-.176.397-.441.397-.794 0-.353-.132-.618-.397-.794-.265-.176-.706-.353-1.323-.529-.882-.265-1.529-.618-1.941-1.059-.412-.441-.618-1.059-.618-1.853 0-.794.265-1.412.794-1.853.529-.441 1.235-.662 2.118-.662.706 0 1.323.176 1.853.529.529.353.882.882 1.059 1.588l-2.118.706c-.088-.353-.265-.618-.529-.794-.265-.176-.618-.265-1.059-.265-.441 0-.794.088-1.059.265-.265.176-.397.441-.397.794 0 .353.132.618.397.794.265.176.706.353 1.323.529.882.265 1.529.618 1.941 1.059.412.441.618 1.059.618 1.853 0 .794-.265 1.412-.794 1.853-.529.441-1.235.662-2.118.662zm8.047.353c-1.588 0-2.824-.529-3.706-1.588-.883-1.058-1.324-2.47-1.324-4.235V8.9c0-1.764.441-3.176 1.324-4.235.882-1.058 2.118-1.588 3.706-1.588 1.588 0 2.823.53 3.705 1.588.883 1.059 1.324 2.471 1.324 4.235v4.077c0 1.765-.441 3.177-1.324 4.235-.882 1.059-2.117 1.588-3.705 1.588zm0-2.117c.794 0 1.412-.265 1.853-.794.441-.529.662-1.235.662-2.117V8.9c0-.883-.221-1.588-.662-2.118-.441-.529-1.059-.794-1.853-.794-.794 0-1.412.265-1.853.794-.441.53-.662 1.235-.662 2.118v4.872c0 .882.221 1.588.662 2.117.441.529 1.059.794 1.853.794zm8.4 1.764V7.054h-3.176V4.6h8.753v2.454h-3.177v11.393h-2.4zm8.047.353c-.706 0-1.323-.176-1.853-.529-.529-.353-.882-.882-1.059-1.588l2.118-.706c.088.353.265.618.529.794.265.176.618.265 1.059.265.441 0 .794-.088 1.059-.265.265-.176.397-.441.397-.794 0-.353-.132-.618-.397-.794-.265-.176-.706-.353-1.323-.529-.882-.265-1.529-.618-1.941-1.059-.412-.441-.618-1.059-.618-1.853 0-.794.265-1.412.794-1.853.529-.441 1.235-.662 2.118-.662.706 0 1.323.176 1.853.529.529.353.882.882 1.059 1.588l-2.118.706c-.088-.353-.265-.618-.529-.794-.265-.176-.618-.265-1.059-.265-.441 0-.794.088-1.059.265-.265.176-.397.441-.397.794 0 .353.132.618.397.794.265.176.706.353 1.323.529.882.265 1.529.618 1.941 1.059.412.441.618 1.059.618 1.853 0 .794-.265 1.412-.794 1.853-.529.441-1.235.662-2.118.662z"
                  fill="currentColor"
                />
                <path
                  d="M0 0h10.8v10.8H0V0zm12.15 0H22.95v10.8H12.15V0zM0 12.15h10.8V22.95H0V12.15zm12.15 0H22.95V22.95H12.15V12.15z"
                  fill="currentColor"
                />
              </svg>
            </div>
            {/* Airbnb Logo */}
            <div className="flex items-center">
              <svg width="102" height="32" viewBox="0 0 102 32" fill="none" className="text-white">
                <path
                  d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 29C8.82 29 3 23.18 3 16S8.82 3 16 3s13 5.82 13 13-5.82 13-13 13z"
                  fill="currentColor"
                />
                <path
                  d="M16 8c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 13c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"
                  fill="currentColor"
                />
                <path
                  d="M45.5 8.5h3v15h-3v-15zm8.5 0h3v15h-3v-15zm8.5 0h3v15h-3v-15zm8.5 0h3v15h-3v-15zm8.5 0h3v15h-3v-15zm8.5 0h3v15h-3v-15z"
                  fill="currentColor"
                />
              </svg>
            </div>
            {/* Glassdoor Logo */}
            <div className="flex items-center">
              <svg width="120" height="24" viewBox="0 0 120 24" fill="none" className="text-white">
                <path
                  d="M8.4 4.8c2.4 0 4.32 1.92 4.32 4.32v9.6c0 .48-.384.864-.864.864H3.264c-.48 0-.864-.384-.864-.864V9.12c0-2.4 1.92-4.32 4.32-4.32H8.4zm0 1.728H6.72c-1.44 0-2.592 1.152-2.592 2.592v8.736h8.736V9.12c0-1.44-1.152-2.592-2.592-2.592H8.4z"
                  fill="currentColor"
                />
                <path
                  d="M20.4 4.8h7.2v1.728h-5.472v4.32h4.8v1.728h-4.8v4.32h5.472v1.728h-7.2V4.8zm12 0h1.728v9.6c0 2.4-1.92 4.32-4.32 4.32h-1.68V16.8h1.68c1.44 0 2.592-1.152 2.592-2.592V4.8zm6 0h1.728v13.824H38.4V4.8zm6 0h1.728v4.32h4.32V4.8h1.728v13.824h-1.728v-7.776h-4.32v7.776H44.4V4.8zm12 0h1.728v4.32h4.32V4.8h1.728v13.824h-1.728v-7.776h-4.32v7.776H56.4V4.8zm12 0h7.2v1.728h-5.472v4.32h4.8v1.728h-4.8v4.32h5.472v1.728h-7.2V4.8zm12 0h1.728v12.096h5.472v1.728h-7.2V4.8zm12 0h1.728v13.824H92.4V4.8zm6 0h7.2v1.728h-5.472v4.32h4.8v1.728h-4.8v4.32h5.472v1.728h-7.2V4.8z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
