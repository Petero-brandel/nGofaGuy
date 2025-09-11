"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

type FAQ = { 
  q: string
  a: string 
}

const faqs: FAQ[] = [
  {
    q: "What is GofaGuy?",
    a: "GofaGuy is a campus-based platform where students can post errands and other students can accept and complete them to earn money."
  },
  {
    q: "Who can use GofaGuy?",
    a: "Any student or staff of the university can post errands. Students can register as runners to earn money."
  },
  {
    q: "Is GofaGuy safe to use?",
    a: "Yes. We verify users with school details, and every task is rated to maintain trust and accountability."
  },
  {
    q: "What happens if an errand goes wrong?",
    a: "We hold payments in escrow, and have support + dispute resolution policies to handle any issues."
  },
  {
    q: "Can staff use GofaGuy too?",
    a: "Absolutely! Both staff and students can post tasks. Only students (verified) can run errands."
  },
  {
    q: "How do I get started?",
    a: "Click 'Get Started' on the page, sign up, and choose to either post or run errands — or both!"
  }
]

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-16 px-4 sm:px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>
        
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="border-b border-border pb-4"
            >
              <motion.button
                className="w-full flex justify-between items-center text-left text-lg md:text-xl font-medium focus:outline-none group"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                whileHover={{ x: 4 }}
              >
                <span className="text-foreground group-hover:text-primary transition-colors">
                  {item.q}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.span>
              </motion.button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: { duration: 0.3 },
                        opacity: { duration: 0.2, delay: 0.1 }
                      }
                    }}
                    exit={{ 
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.2 },
                        opacity: { duration: 0.1 }
                      }
                    }}
                    className="overflow-hidden"
                  >
                    <p className="pt-2 text-muted-foreground">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}