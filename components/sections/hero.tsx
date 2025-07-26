"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Search, Sun, Moon, Contrast } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  const [activeTab, setActiveTab] = useState("Find runners");
  const [theme, setTheme] = useState<"light" | "dark" | "contrast">("dark");

  useEffect(() => {
    // Apply theme class to document
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === "dark") return "light";
      if (prev === "light") return "contrast";
      return "dark";
    });
  };

  // Theme-specific styles
  const themeStyles = {
    dark: {
      bgImage: "brightness(0.2) saturate(1.2) blur(1.5px)",
      overlay: "linear-gradient(120deg, rgba(1,4,17,0.95) 0%, rgba(0,0,5,0.65) 60%, rgba(0,0,0,0.7) 100%)",
      textColor: "text-white",
      tabBg: "bg-white/10",
      tabBorder: "border-white/20",
      inputBg: "bg-white/10",
      inputBorder: "border-white/20",
      placeholder: "placeholder-[#e0e0e0]",
    },
    light: {
      bgImage: "brightness(0.7) saturate(1.1) blur(0.5px)",
      overlay: "linear-gradient(120deg, rgba(255,255,255,0.9) 0%, rgba(245,245,255,0.8) 60%, rgba(240,240,255,0.85) 100%)",
      textColor: "text-gray-900",
      tabBg: "bg-black/10",
      tabBorder: "border-black/20",
      inputBg: "bg-black/10",
      inputBorder: "border-black/20",
      placeholder: "placeholder-[#555555]",
    },
    contrast: {
      bgImage: "brightness(0.3) saturate(1.5) contrast(1.5)",
      overlay: "linear-gradient(120deg, rgba(0,0,0,0.95) 0%, rgba(10,10,20,0.9) 60%, rgba(20,20,30,0.9) 100%)",
      textColor: "text-white",
      tabBg: "bg-white/20",
      tabBorder: "border-yellow-400/50",
      inputBg: "bg-white/20",
      inputBorder: "border-yellow-400/50",
      placeholder: "placeholder-[#ffff00]",
    },
  };

  const currentTheme = themeStyles[theme];

  return (
    <section className="relative min-h-[600px] w-[95%] rounded-md mx-auto my-8 flex items-center justify-center overflow-hidden">
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/20 dark:bg-white/20 contrast:bg-yellow-500/50 backdrop-blur-md border border-white/30 dark:border-black/30 contrast:border-yellow-400 text-white dark:text-black contrast:text-yellow-400 hover:scale-110 transition-all duration-200 shadow-lg"
        aria-label="Toggle theme"
      >
        {theme === "dark" && <Moon size={20} />}
        {theme === "light" && <Sun size={20} />}
        {theme === "contrast" && <Contrast size={20} />}
      </button>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/girl1.png"
          alt="Background"
          fill
          priority
          className="object-cover object-center w-full h-full"
          style={{ filter: currentTheme.bgImage }}
        />
      </div>

      {/* Modern Glassmorphism Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            background: currentTheme.overlay,
            backdropFilter: "blur(10px) saturate(1.3) contrast(1.2)",
            WebkitBackdropFilter: "blur(10px) saturate(1.3) contrast(1.2)",
            mixBlendMode: theme === "light" ? "normal" : "multiply",
          }}
        />
      </div>

      {/* Animated Effects */}
      <motion.div
        className={`absolute -top-32 -left-32 w-[300px] h-[300px] rounded-full ${
          theme === "contrast" ? "bg-[#ffff00]/30" : "bg-[#1FF3A5]/30"
        } blur-3xl z-0`}
        animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute bottom-0 right-0 w-[200px] h-[200px] rounded-full ${
          theme === "contrast" ? "bg-[#ff0000]/30" : "bg-[#1657FB]/30"
        } blur-2xl z-0`}
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
          {/* Heading */}
          <motion.h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold ${currentTheme.textColor} mb-8 leading-tight drop-shadow-xl`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, type: "spring" }}
          >
            Connecting students in need to runners who deliver
          </motion.h1>

          {/* Tabs */}
          <motion.div
            className={`flex ${currentTheme.tabBg} backdrop-blur-md rounded-full p-1 mb-6 max-w-md shadow-xl border ${currentTheme.tabBorder}`}
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
                    : `${currentTheme.textColor}/80 hover:text-[#1FF3A5]`
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

          {/* Search */}
          <motion.div
            className={`flex ${currentTheme.inputBg} backdrop-blur-2xl rounded-full shadow-2xl overflow-hidden max-w-2xl border ${currentTheme.inputBorder}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <input
              type="text"
              placeholder="Search by task type, skills, or location"
              className={`flex-1 px-6 py-4 ${currentTheme.textColor} ${currentTheme.placeholder} bg-transparent focus:outline-none text-lg`}
            />
            <Button className={`bg-[#1657FB] hover:bg-[#0033CD] my-auto mr-4 text-white px-8 py-4 rounded-full flex items-center gap-2 text-lg font-medium shadow-lg transition-all duration-200 ${
              theme === "contrast" ? "ring-2 ring-yellow-400" : ""
            }`}>
              <Search className="w-5 h-5" />
              Search
            </Button>
          </motion.div>

          {/* Logos */}
          <motion.div
            className="flex items-center gap-8 mt-12 opacity-90"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <span className={`${currentTheme.textColor} text-sm font-medium`}>
              Trusted by:
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}