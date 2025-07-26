"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const footerLinks = [
  {
    title: "Company",
    links: [
      { text: "About Us", url: "#about" },
      { text: "How It Works", url: "#how-it-works" },
      { text: "Blog", url: "#" },
      { text: "Press Kit", url: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { text: "Help Center", url: "#" },
      { text: "Safety Guidelines", url: "#" },
      { text: "Community", url: "#" },
      { text: "FAQs", url: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { text: "Terms of Service", url: "#" },
      { text: "Privacy Policy", url: "#" },
      { text: "Cookie Policy", url: "#" },
      { text: "Student Agreement", url: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { text: "help@gofaguy.com", url: "mailto:help@gofaguy.com", icon: Mail },
      { text: "+234 704 668 6723", url: "tel:+2347046686723", icon: Phone },
      { text: "FUTMinna Campus", url: "#", icon: MapPin },
    ],
  },
]

const socialLinks = [
  { icon: Facebook, url: "#", label: "Facebook" },
  { icon: Twitter, url: "#", label: "Twitter" },
  { icon: Instagram, url: "#", label: "Instagram" },
  { icon: Linkedin, url: "#", label: "LinkedIn" },
]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-20 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-32 w-64 h-64 bg-purple-400/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-8 mb-10"
        >
          {/* Brand Section */}
          <motion.div variants={item} className="lg:col-span-2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <Link href="/" className="flex items-center space-x-2 group mb-4">
              <Image
                src="/logo-blue-white.svg"
                alt="GofaGuy Logo"
                width={130}
                height={130}
                className="w-32 h-auto"
                priority
              />
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-xs mx-auto lg:mx-0">
              Your trusted campus errand platform. Connecting students who need help with those who can provide it.
              <span className="text-white font-medium"> Built for students, by students.</span>
            </p>
            {/* Social Links */}
            <div className="flex gap-3 justify-center lg:justify-start">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-primary rounded-xl text-gray-400 hover:text-white transition-all duration-200 hover:scale-105"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              variants={item}
              className="lg:col-span-1 flex flex-col lg:items-start"
            >
              <h3 className="text-lg font-semibold mb-5 font-montserrat text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.url}
                      className="text-gray-400 hover:text-primary transition-colors duration-200 flex gap-2 group"
                    >
                      {link.icon && <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />}
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{link.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="pt-6 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-xs sm:text-sm text-center md:text-left">
              © {new Date().getFullYear()} GofaGuy Technologies Ltd. All rights reserved.
            </div>
          
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
