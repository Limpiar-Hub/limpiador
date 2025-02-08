'use client'

import { motion } from 'framer-motion'
import { Building2, Users, Zap, Cpu, Clock, Leaf } from 'lucide-react'

const features = [
  {
    title: 'Centralized Management',
    description: 'Streamline operations with our centralized system',
    icon: Building2,
  },
  {
    title: 'Streamlined Property Management',
    description: 'Efficient property management solutions',
    icon: Users,
  },
  {
    title: 'Rapid Deployment',
    description: 'Quick and efficient service deployment',
    icon: Zap,
  },
  {
    title: 'Advanced Technology',
    description: 'Cutting-edge cleaning technology',
    icon: Cpu,
  },
  {
    title: 'On-Demand Solutions',
    description: 'Flexible cleaning solutions when you need them',
    icon: Clock,
  },
  {
    title: 'Eco-Friendly Services',
    description: 'Sustainable and environmentally conscious cleaning',
    icon: Leaf,
  },
]

export function FeaturesGrid() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-blue-500 rounded-lg opacity-0 group-hover:opacity-5 transition-opacity" />
              <div className="relative p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <feature.icon className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

