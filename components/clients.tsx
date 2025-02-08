"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const clients = [
  { name: "WE", logo: "/placeholder.svg?height=40&width=80" },
  { name: "AMC", logo: "/placeholder.svg?height=40&width=80" },
  { name: "CVS", logo: "/placeholder.svg?height=40&width=80" },
  { name: "CBRE", logo: "/placeholder.svg?height=40&width=80" },
  { name: "Target", logo: "/placeholder.svg?height=40&width=80" },
]

export function Clients() {
  return (
    <section className="py-12 border-t border-b bg-gray-50">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={`${client.name} logo`}
                width={80}
                height={40}
                className="h-10 w-auto grayscale transition-all hover:grayscale-0"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

