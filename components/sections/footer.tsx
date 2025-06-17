"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-white rotate-45" />
            </div>
            <span className="text-xl font-bold text-gray-900 font-montserrat">GofaGuy</span>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end space-x-8">
            <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500">© {new Date().getFullYear()} GofaGuy. Made with ❤️ for students, by students.</p>
        </div>
      </div>
    </footer>
  )
}
