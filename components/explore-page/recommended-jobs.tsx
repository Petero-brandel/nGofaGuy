"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ArrowRight, Star } from "lucide-react";

// Full Jobs Array
const jobs = [
  { id: 13, title: "Flyer Distribution", price: "₦3,500", premium: false },
  { id: 2, title: "Data Collection Asst.", price: "₦15,000", premium: true },
  { id: 12, title: "Urgent Campus Delivery", price: "₦3,000", premium: false },
  { id: 4, title: "Portfolio Photography", price: "₦10,000", premium: true },
];

export function RecommendedJobs() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Simple auto-cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % jobs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const activeJob = jobs[activeIndex];

  return (
    <motion.section
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="px-0 md:px-0"
    >
      {/* Compact Ticker Style Card */}
      <div className="bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 border border-brand-primary/20 rounded-xl p-3 flex items-center justify-between relative overflow-hidden">

        {/* Decorative */}
        <div className="absolute -right-4 -top-4 w-16 h-16 bg-brand-primary/10 rounded-full blur-xl" />

        <div className="flex items-center gap-3 z-10 w-full overflow-hidden">
          <div className="bg-brand-primary text-white p-1.5 rounded-lg shrink-0">
            <Star className="w-4 h-4 fill-white" />
          </div>

          <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-3">
            <span className="text-[10px] font-bold text-brand-primary uppercase tracking-wider shrink-0">Recommended</span>
            <motion.div
              key={activeJob.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-2 truncate"
            >
              <span className="font-bold text-gray-900 dark:text-gray-100 text-sm truncate">{activeJob.title}</span>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-gray-300" />
              <span className="text-sm font-extrabold text-brand-secondary">{activeJob.price}</span>
            </motion.div>
          </div>

          <Link href={`/job/${activeJob.id}`}>
            <button className="whitespace-nowrap bg-white dark:bg-card hover:bg-gray-50 text-brand-primary text-xs font-bold px-3 py-1.5 rounded-lg border border-brand-primary/20 shadow-sm transition-all hover:shadow-md flex items-center gap-1 z-10">
              View <ArrowRight className="w-3 h-3" />
            </button>
          </Link>
        </div>
      </div>

      {/* Pagination Dots (Optional, minimal) */}
      <div className="flex justify-center mt-2 gap-1.5">
        {jobs.map((_, idx) => (
          <div
            key={idx}
            className={`h-1 rounded-full transition-all duration-300 ${idx === activeIndex ? "w-4 bg-brand-primary" : "w-1 bg-gray-300"}`}
          />
        ))}
      </div>

    </motion.section>
  );
}
