"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "Chris Jones",
    role: "Property Manager",
    image: "/logo.png",
    quote:
      "Working with Limpiar has been great! Their team is super reliable, and the eco-friendly cleaning options have been a big plus for us. They&quotve made it easy to keep our properties looking great without breaking the budget. I also like that they keep us in the loop with updates and metrics—it really shows they care about doing a good job.",
  },
  {
    id: 2,
    name: "Sarah Miller",
    role: "Facility Director",
    image: "/placeholder.svg?height=600&width=400",
    quote:
      "The attention to detail and consistency of service has been outstanding. Their team is always professional and responsive to our needs.",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Operations Manager",
    image: "/placeholder.svg?height=600&width=400",
    quote:
      "Switching to Limpiar was one of the best decisions we made. Their innovative approach to cleaning and property management has streamlined our operations significantly.",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % testimonials.length)
    }, 5000) // Change testimonial every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Why Managers Love Limpiar
        </motion.h2>

        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {testimonials.map(
              (testimonial, index) =>
                index === currentIndex && (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-2 gap-8 items-center"
                  >
                    <div className="order-2 md:order-1">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-4"
                      >
                        <h3 className="text-4xl font-light italic text-blue-600">{testimonial.name}</h3>
                        <p className="text-xl text-gray-600">{testimonial.role}</p>
                        <blockquote className="text-lg text-gray-700 leading-relaxed">{testimonial.quote}</blockquote>
                      </motion.div>
                    </div>
                    <div className="order-1 md:order-2">
                      <div className="relative h-[400px] md:h-[600px] rounded-xl overflow-hidden">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority
                        />
                      </div>
                    </div>
                  </motion.div>
                ),
            )}
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

