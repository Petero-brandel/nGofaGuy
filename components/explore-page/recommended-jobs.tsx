"use client";

import { motion } from "framer-motion";
import { JobCard } from "./job-card";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

// Full Jobs Array
const jobs = [
  // Academic & Skill-Based Premium
  {
    id: 13,
    title: "Event Flyer Distribution Across Hostels",
    company: "GofaGuy FUTMINNA",
    location: "FUTMINNA",
    salary: "₦1,500 - ₦3,500 per campaign",
    logo: "/dp.jpg",
    color: "bg-blue-200",
  },
  {
    id: 2,
    title: "Research Paper / Data Collection Assistant",
    company: "GofaGuy FUTMINNA",
    location: "FUTMINNA",
    salary: "₦6,000 - ₦15,000 per project",
    logo: "/dp.jpg",
    color: "bg-indigo-100",
  },
  {
    id: 12,
    title: "Campus to Off-Campus Delivery",
    company: "GofaGuy FUTMINNA",
    location: "FUTMINNA",
    salary: "₦3,000 - ₦8,000 per run",
    logo: "/dp.jpg",
    color: "bg-gray-100",
  },
  {
    id: 4,
    title: "Portfolio Photography & Videography",
    company: "GofaGuy FUTMINNA",
    location: "FUTMINNA",
    salary: "₦5,000 - ₦15,000 per session",
    logo: "/dp.jpg",
    color: "bg-pink-100",
  },
  {
    id: 5,
    title: "Presentation / Slide Design Assistant",
    company: "GofaGuy FUTMINNA",
    location: "FUTMINNA",
    salary: "₦3,000 - ₦8,000 per project",
    logo: "/dp.jpg",
    color: "bg-blue-100",
  },
  // Event & Campus Management
  {
    id: 6,
    title: "Campus Event Coordinator",
    company: "GofaGuy FUTMINNA",
    location: "FUTMINNA",
    salary: "₦7,000 - ₦15,000 per event",
    logo: "/dp.jpg",
    color: "bg-purple-100",
  },
  {
    id: 7,
    title: "Event Photography / Videography",
    company: "GofaGuy FUTMINNA",
    location: "FUTMINNA",
    salary: "₦5,000 - ₦12,000 per event",
    logo: "/dp.jpg",
    color: "bg-pink-200",
  },
  {
    id: 8,
    title: "Event Marketing & Social Media Coverage",
    company: "GofaGuy FUTMINNA",
    location: "FUTMINNA",
    salary: "₦6,000 - ₦12,000 per campaign",
    logo: "/dp.jpg",
    color: "bg-teal-100",
  },
  {
    id: 9,
    title: "Workshop Facilitation / Training Support",
    company: "GofaGuy FUTMINNA",
    location: "FUTMINNA",
    salary: "₦5,000 - ₦12,000 per session",
    logo: "/dp.jpg",
    color: "bg-indigo-200",
  },
  // Logistics & High-Demand Campus Services
  {
    id: 10,
    title: "Food Delivery Across Hostels",
    company: "GofaGuy FUTMINNA",
    location: "FUTMINNA Campus",
    salary: "₦2,000 - ₦5,000 per delivery",
    logo: "/dp.jpg",
    color: "bg-orange-100",
  },
  {
    id: 11,
    title: "Inter-Hostel Errands",
    company: "GofaGuy FUTMINNA",
    location: "FUTMINNA",
    salary: "₦1,500 - ₦4,000 per task",
    logo: "/dp.jpg",
    color: "bg-red-100",
  },
  {
    id: 3,
    title: "Proofreading & Academic Editing",
    company: "GofaGuy FUTMINNA",
    location: "FUTMINNA",
    salary: "₦3,500 - ₦10,000 per document",
    logo: "/dp.jpg",
    color: "bg-yellow-100",
  },
];

export function RecommendedJobs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll listener to update active pagination
  const handleScroll = () => {
    if (!containerRef.current) return;
    const scrollLeft = containerRef.current.scrollLeft;
    const cardWidth = containerRef.current.scrollWidth / jobs.length;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) container.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!containerRef.current) return;
      const cardWidth = containerRef.current.scrollWidth / jobs.length;
      const nextIndex = (activeIndex + 1) % jobs.length;

      containerRef.current.scrollTo({
        left: cardWidth * nextIndex,
        behavior: "smooth",
      });

      setActiveIndex(nextIndex);
    }, 4000); // autoplay delay (4s)

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      className="mt-8 md:mt-12 px-4 md:px-0"
    >
      {/* s */}
      <div>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6">
          Recommended for you
        </h2>

        {/* 
        <div>
          <Link href="/Post-a-task">
            <button className="bg-primary px-6 py-2 rounded-lg text-white shadow-xl">
              Post
            </button>
          </Link>
        </div> */}
      </div>

      {/* Carousel */}
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
      >
        {jobs.map((job, index) => (
          <motion.div
            key={job.id}
            className="flex-shrink-0 w-72 sm:w-80 snap-center cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <JobCard job={job} index={index} />
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        {jobs.map((_, index) => (
          <motion.div
            key={index}
            className="h-2 rounded-full cursor-pointer"
            style={{ width: activeIndex === index ? "30px" : "10px" }}
            animate={{
              backgroundColor: activeIndex === index ? "#1FF3A5" : "#D1D5DB",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={() => {
              if (!containerRef.current) return;
              const cardWidth = containerRef.current.scrollWidth / jobs.length;
              containerRef.current.scrollTo({
                left: cardWidth * index,
                behavior: "smooth",
              });
              setActiveIndex(index);
            }}
          />
        ))}
      </div>
    </motion.section>
  );
}
