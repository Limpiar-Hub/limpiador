"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const steps = [
  {
    number: 1,
    title: "Book a Call",
    description: "Schedule a consultation to discuss your property's unique needs.",
  },
  {
    number: 2,
    title: "Service Selection",
    description: "Choose the services that best suit your property and budget.",
  },
  {
    number: 3,
    title: "Account Setup & Team Onboarding",
    description: "Set up your account and introduce our vetted team to your property.",
  },
]

export function GetStartedSteps() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Get started with <span className="bg-blue-100 px-2 py-1 rounded">Limpiar</span> in three easy steps
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-xl font-bold text-blue-600">
                  {step.number}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
            <Image
              src="/logo.png"
              alt="Happy team members celebrating success"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

