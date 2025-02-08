"use client"

import { motion } from "framer-motion"
import { Building2, Leaf, Shield, Users } from "lucide-react"

const features = [
  {
    title: "Centralized Management",
    description: "Streamline your cleaning operations with our centralized management system.",
    icon: Building2,
  },
  {
    title: "Eco-Friendly Services",
    description: "We use sustainable cleaning products that are safe for the environment.",
    icon: Leaf,
  },
  {
    title: "Enhanced Security",
    description: "All our staff are thoroughly vetted and trained for your peace of mind.",
    icon: Shield,
  },
  {
    title: "Dedicated Teams",
    description: "Consistent service delivery from dedicated cleaning professionals.",
    icon: Users,
  },
]

export function Features() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 rounded-lg bg-blue-100 p-3">
                <feature.icon className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

