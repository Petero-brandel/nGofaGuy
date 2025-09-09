"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

interface Job {
  id: number
  title: string
  company: string
  location: string
  salary: string
  logo: string
  color: string
}

interface JobCardProps {
  job: Job
  index: number
}

export function JobCard({ job, index }: JobCardProps) {
  return (
    <Link href={`/job/${job.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
      >
        <div className="flex items-center space-x-3 mb-3 md:mb-4">
          <div
            className={`w-10 md:w-12 h-10 md:h-12 rounded-lg md:rounded-xl ${job.color} flex items-center justify-center`}
          >
            <Avatar className="w-6 md:w-8 h-6 md:h-8">
              <AvatarImage src={job.logo || "/placeholder.svg"} alt={job.company} />
              <AvatarFallback className="text-xs font-bold">{job.company.charAt(0)}</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <h3 className="font-semibold text-gray-900 mb-2 text-balance leading-tight text-sm md:text-base">
          {job.title}
        </h3>

        <p className="text-xs md:text-sm text-gray-600 mb-1">
          {job.location} • {job.company}
        </p>

        <p className="text-xs md:text-sm font-medium text-gray-900">{job.salary}</p>
      </motion.div>
    </Link>
  )
}
