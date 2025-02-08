'use client'

import { motion } from 'framer-motion'
import { Phone, ClipboardList, Users } from 'lucide-react'

const steps = [
  {
    number: 1,
    title: 'Book a Call',
    description: 'Schedule a consultation to discuss your needs',
    icon: Phone,
  },
  {
    number: 2,
    title: 'Service Selection',
    description: 'Choose the perfect service package for your property',
    icon: ClipboardList,
  },
  {
    number: 3,
    title: 'Account Setup & Team Onboarding',
    description: 'Quick and seamless onboarding process',
    icon: Users,
  },
]

export function StepsSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Get started with Limpiar in three easy steps
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-blue-200" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

