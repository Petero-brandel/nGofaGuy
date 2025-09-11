import { motion } from "framer-motion"
import {
  Package,
  Car,
  ShoppingCart,
  Laptop2,
} from "lucide-react"

// GofaGuy NG Brand Colors
const colors = {
  primary: "hsl(230,91%,54%)",           // #1657FD
  primaryDark: "hsl(229,89%,4%)",        // #010411
  secondary: "hsl(225,100%,40%)",        // #0033CD
  accent: "hsl(158,90%,54%)",            // #1FF3A5
}

const stats = [
  { number: "5,000+", label: "Happy Students" },
  { number: "15,000+", label: "Errands Completed" },
  { number: "200+", label: "Verified Helpers" }
];

export function About() {
  return (
    <section style={{ backgroundColor: colors.primaryDark }}>
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 mt-5 mb-10 py-10 md:py-16 oneside-rounded">
        {/* Left Side */}
        <motion.div
          className="px-6 md:ml-8 md:w-[40%] flex flex-col justify-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="font-bold py-3 md:py-5 text-3xl md:text-4xl"
            style={{ color: colors.primary }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            GofaGuy
          </motion.h1>
          <motion.p
            className="text-base md:text-lg"
            style={{ color: "white" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            GofaGuy provides a fast, reliable, and affordable way for students to get errands done through a peer-to-peer platform. By turning everyday campus tasks into earning opportunities, we not only help users save time and effort, but also enable others to earn on their own terms — all within a safe, student-friendly environment.
          </motion.p>
          <motion.button
            className="bg-transparent border-2 py-2 px-6 mt-6 md:mt-8 rounded-lg hover:text-white transition-colors duration-200 w-max"
            style={{
              borderColor: '#1FF3A5',
              color: '#1FF3A5',
              backgroundColor: "transparent"
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.08,
              backgroundColor: '#1FF3A5',
              color: "#1FF3A5"
            }}
            whileTap={{ scale: 0.97 }}
          >
            Download App
          </motion.button>
        </motion.div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row justify-between mt-20 gap-6 md:gap-8 md:w-auto px-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              className="bg-white/10 h-[120px] rounded-lg p-6 flex flex-col items-center text-center shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
            >
              <span
                className="font-extrabold text-3xl md:text-4xl"
                style={{ color: '#fff '}}
              >
                {stat.number}
              </span>
              <span
                className="text-base md:text-lg mt-2 text-center"
                style={{ color: '#1FF3A5' }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
