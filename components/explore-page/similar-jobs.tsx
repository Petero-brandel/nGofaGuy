"use client"

import { motion } from "framer-motion"
import { MapPin, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const similarJobs = [
  {
    id: "2",
    title: "Sales Representative",
    company: "TechCorp",
    location: "San Francisco, CA",
    salary: "$95,000",
    logo: "T",
    type: "Full-time",
    remote: "Remote",
  },
  {
    id: "3",
    title: "Business Development Manager",
    company: "InnovateCo",
    location: "Austin, TX",
    salary: "$115,000",
    logo: "I",
    type: "Full-time",
    remote: "Hybrid",
  },
  {
    id: "4",
    title: "Account Executive",
    company: "GrowthLabs",
    location: "Chicago, IL",
    salary: "$105,000",
    logo: "G",
    type: "Full-time",
    remote: "On-site",
  },
]

export function SimilarJobs() {
  return (
    <section className="bg-white py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-gray-900 mb-8"
        >
          Similar jobs you may be interested in
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {similarJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">{job.logo}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-balance leading-tight">{job.title}</h3>
                    <p className="text-gray-600 text-sm">{job.company}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{job.location}</span>
                  <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">{job.remote}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <DollarSign className="h-4 w-4" />
                  <span className="text-sm font-medium">{job.salary}</span>
                  <span className="text-xs text-gray-500">• {job.type}</span>
                </div>
              </div>

              <Link href={`/explore/${job.id}`}>
                <Button variant="outline" className="w-full bg-transparent hover:bg-gray-100">
                  View Details
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
