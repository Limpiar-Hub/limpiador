"use client"

import { motion } from "framer-motion"

const stats = [
  { value: "30%", label: "Cost Savings" },
  { value: "10k", label: "Satisfied Property Managers" },
  { value: "336", label: "Hours saved for property managers" },
]

export function Stats() {
  return (
    <section className="py-24 bg-blue-500 text-white">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold">{stat.value}</div>
              <div className="mt-2 text-sm opacity-90">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

