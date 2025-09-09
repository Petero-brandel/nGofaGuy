"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function JobDetailHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border-b border-gray-200 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="p-2">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="font-semibold text-gray-900">Acme</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Feed
            </Link>
            <Link href="/contacts" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contacts
            </Link>
            <Link href="/jobs" className="text-orange-500 font-medium">
              Jobs
            </Link>
            <Link href="/messages" className="text-gray-600 hover:text-gray-900 transition-colors">
              Messages
            </Link>
            <Link href="/updates" className="text-gray-600 hover:text-gray-900 transition-colors">
              Updates
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="p-2">
              <Bell className="h-5 w-5" />
            </Button>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
