"use client"

import { motion } from "framer-motion"
import { MapPin, DollarSign, Clock, Users, Building, Bookmark, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface JobDetailSidebarProps {
  job: {
    salary: string
    location: string
    type: string
    remote: string
    applicants: string
    benefits: string[]
  }
}

export function JobDetailSidebar({ job }: JobDetailSidebarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 }}
      className="space-y-6"
    >
      {/* Job Details Card */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Job Details</h3>

        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <DollarSign className="h-5 w-5 text-green-500" />
            <div>
              <p className="font-semibold text-gray-900">{job.salary}</p>
              <p className="text-sm text-gray-600">Annual salary</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-blue-500" />
            <div>
              <p className="font-semibold text-gray-900">{job.location}</p>
              <p className="text-sm text-gray-600">{job.remote}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Clock className="h-5 w-5 text-orange-500" />
            <div>
              <p className="font-semibold text-gray-900">{job.type}</p>
              <p className="text-sm text-gray-600">Employment type</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Users className="h-5 w-5 text-purple-500" />
            <div>
              <p className="font-semibold text-gray-900">{job.applicants}</p>
              <p className="text-sm text-gray-600">Applied so far</p>
            </div>
          </div>
        </div>

        <div className="space-y-3 mt-6">
          <Button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold py-3">
            Apply Now
          </Button>

          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="flex-1 bg-transparent">
              <Bookmark className="h-4 w-4 mr-2" />
              Save Job
            </Button>
            <Button variant="outline" size="sm" className="flex-1 bg-transparent">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </div>

      {/* Benefits Card */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Benefits</h3>
        <ul className="space-y-2">
          {job.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700 text-sm">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Company Card */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-4">About Company</h3>
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-400 rounded-lg flex items-center justify-center">
            <Building className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="font-semibold text-gray-900">Acme Corp</p>
            <p className="text-sm text-gray-600">Technology Company</p>
          </div>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed">
          Leading technology company focused on innovative solutions and exceptional customer service. We're committed
          to creating a diverse and inclusive workplace.
        </p>

        <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-100">
          <div className="text-center">
            <p className="font-semibold text-gray-900">500+</p>
            <p className="text-xs text-gray-600">Employees</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-gray-900">2015</p>
            <p className="text-xs text-gray-600">Founded</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
