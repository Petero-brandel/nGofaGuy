"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-white rotate-45" />
            </div>
            <span className="text-xl font-bold text-gray-900 font-montserrat">GofaGuy</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="#services" className="text-gray-600 hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-primary transition-colors">
              About
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
