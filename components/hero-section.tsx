"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function HeroSection() {
  const [email, setEmail] = useState("")

  return (
    <section className="relative min-h-[600px] overflow-hidden">
      {/* Video Background */}
      <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover">
        <source src="/cleaning-video.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />

      {/* Content */}
      <div className="relative container mx-auto px-4 py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Sustainable Solution
            <span className="block text-blue-400">For the modern business</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Professional cleaning services that care for your space and the environment.
          </p>
          <div className="mt-10 flex max-w-md gap-x-4">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your business email"
              className="bg-white/10 text-white placeholder:text-gray-400"
              aria-label="Business email"
            />
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

