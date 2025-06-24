"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FAQ = { q: string; a: string; };

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
    a: "Click “Get Started” on the page, sign up, and choose to either post or run errands — or both!"
  }
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 px-6 bg-gray-50 text-gray-800">
      <h2 className="text-3xl font-semibold text-center mb-8">Frequently Asked Questions</h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((item, idx) => (
          <div key={idx} className="border-b border-gray-200 pb-4">
            <button
              className="w-full flex justify-between items-center text-left text-lg md:text-xl font-medium focus:outline-none"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              {item.q}
              <span className="transform transition-transform" style={{ rotate: openIndex === idx ? "180deg" : "0deg" }}>
                ▼
              </span>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-2 text-gray-700 text-base"
                >
                  {item.a}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
