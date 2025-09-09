"use client"

import { motion } from "framer-motion"

interface JobDetailHeroProps {
  job: {
    title: string
    company: string
    location: string
    type: string
    remote: string
    posted: string
  }
}

export function JobDetailHero({ job }: JobDetailHeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gradient-to-r from-green-400 via-yellow-400 to-orange-500 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{job.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-lg">
            <span>{job.company}</span>
            <span>•</span>
            <span>{job.location}</span>
            <span>•</span>
            <span>{job.type}</span>
            <span>•</span>
            <span>{job.remote}</span>
            <span>•</span>
            <span>{job.posted}</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
