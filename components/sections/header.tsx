"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { Download, ChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showDownloadOptions, setShowDownloadOptions] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  // Define dropdown items for each nav link
  const navItems = [
    {
      title: "How It Works",
      dropdown: [
        { title: "Overview", href: "#overview" },
        { title: "Step-by-Step Guide", href: "#step-by-step" },
        { title: "Video Tutorial", href: "#video-tutorial" }
      ]
    },
    {
      title: "Services",
      dropdown: [
        { title: "All Services", href: "#all-services" },
        { title: "Popular Services", href: "#popular-services" },
        { title: "Special Offers", href: "#special-offers" }
      ]
    },
    {
      title: "About",
      dropdown: [
        { title: "Our Story", href: "#our-story" },
        { title: "Team", href: "#team" },
        { title: "Testimonials", href: "#testimonials" }
      ]
    }
  ]

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Image
              src="/logo.svg"
              alt="GofaGuy Logo"
              width={150}  
              height={150}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <div 
                key={item.title}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={`#${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-gray-600 hover:text-primary transition-colors relative group text-sm font-medium flex items-center gap-1"
                >
                  {item.title}
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.title ? "rotate-180" : ""}`} />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>

                {/* Dropdown Menu */}
                {activeDropdown === item.title && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50"
                  >
                    <div className="py-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.title}
                          href={dropdownItem.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          {dropdownItem.title}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Download Button */}
          <div className="hidden md:block relative">
            <div className="flex gap-10">
          <div className="relative group">
            <Button
              variant="ghost"
              className="text-primary hover:bg-transparent hover:text-primary text-sm font-medium flex items-center gap-1 px-0"
              onClick={() => setActiveDropdown(activeDropdown === "Sign In As" ? null : "Sign In As")}
              type="button"
            >
              Sign In
              <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "Sign In As" ? "rotate-180" : ""}`} />
            </Button>
            {activeDropdown === "Sign In As" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50"
              >
                <div className="py-1">
                  <Link
                    href="/signin?seller=1"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Sign In as Seller
                  </Link>
                  <Link
                    href="/signin?buyer=1"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Sign In as Buyer
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
            <Button
              onClick={() => setShowDownloadOptions(!showDownloadOptions)}
              className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-xl font-medium text-sm transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              <Download className="w-4 h-4" />
              Download App
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${showDownloadOptions ? "rotate-180" : ""}`}
              />
            </Button>
            </div>

            {/* Download Options Dropdown */}
            {showDownloadOptions && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50"
              >
                <div className="py-1">
                  <a
                    href="#"
                    className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    Google Play
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    App Store
                  </a>
                  <div className="border-t border-gray-100 my-1"></div>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                      />
                    </svg>
                    Share App
                  </a>
                </div>
              </motion.div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-gray-100"
          onClick={(e) => {
            // Close dropdown if clicking outside of it
            if (e.target === e.currentTarget) {
              setShowDownloadOptions(false)
            }
          }}
        >
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.title} className="relative">
                <button
                  className="w-full flex justify-between items-center py-2 text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                >
                  {item.title}
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.title ? "rotate-180" : ""}`} />
                </button>
                
                {/* Mobile Dropdown Menu */}
                {activeDropdown === item.title && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden pl-4"
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.title}
                        href={dropdownItem.href}
                        className="block py-2 text-sm text-gray-600 hover:text-primary transition-colors"
                        onClick={() => {
                          setActiveDropdown(null)
                          setMobileMenuOpen(false)
                        }}
                      >
                        {dropdownItem.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
            <div className="pt-4 pb-2">
              <div className="relative">
                <Button
                  onClick={() => setShowDownloadOptions(!showDownloadOptions)}
                  className="w-full bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-xl font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download App
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${showDownloadOptions ? "rotate-180" : ""}`}
                  />
                </Button>

                {/* Mobile Download Options Dropdown */}
                {showDownloadOptions && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50"
                  >
                    <div className="py-1">
                      <a
                        href="#"
                        className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        onClick={() => {
                          setShowDownloadOptions(false)
                          setMobileMenuOpen(false)
                        }}
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                        </svg>
                        Google Play
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        onClick={() => {
                          setShowDownloadOptions(false)
                          setMobileMenuOpen(false)
                        }}
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                        </svg>
                        App Store
                      </a>
                      <div className="border-t border-gray-100 my-1"></div>
                      <a
                        href="#"
                        className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        onClick={() => {
                          setShowDownloadOptions(false)
                          setMobileMenuOpen(false)
                        }}
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                          />
                        </svg>
                        Share App
                      </a>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}