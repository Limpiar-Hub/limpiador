"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

const features = [
  {
    id: "transparency",
    title: "Start building stronger firstparty relationships",
    description:
      "I'm a paragraph. Click here to add your text and edit me. It's easy. I'm a paragraph. Click here to add your text and edit me. It's easy.",
    image: "/logo.png",
  },
  {
    id: "efficiency",
    title: "Smart Scheduling Assistant",
    description:
      "Effortlessly create, adjust, and manage requests with our intuitive scheduling assistant. Select dates, times, and services in just a few clicks, ensuring every request is timely and tailored to your needs.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Q8x4vTFcsDAGaXXUPuTfty0d9ADHvY.png",
  },
  {
    id: "cost",
    title: "Track and Control Costs with Ease",
    description:
      "Get complete visibility into your payments, invoices, and outstanding balances. Our cost management dashboard simplifies billing, helping you stay on budget and control your property expenses.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mixSAHdMoXdT8GytG9wMrn6AZJmIwl.png",
  },
  {
    id: "on-demand",
    title: "When You Need It, On Your Schedule",
    description:
      "Say goodbye to long waits for service requests. With on-demand scheduling, our providers are available same-day or last-minute to keep your business running smoothly.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-x25wiXhPNqIYqGcU0EUj1Tnzoild00.png",
  },
  {
    id: "aggregate",
    title: "Simplify Operations, Manage Multiple Properties with Ease",
    description:
      "Effortlessly manage all your properties under one platform. Our tools help you streamline operations, aggregate property data, and centralize scheduling, making it easier to oversee and optimize your portfolio.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6gCuTzmaQucTfgaJo3sKtToTkPivwU.png",
  },
]

export function FeaturesSection() {
  const [activeTab, setActiveTab] = useState("transparency")

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-24">
      <div className="container mx-auto px-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="w-full justify-center">
            {features.map((feature) => (
              <TabsTrigger key={feature.id} value={feature.id} className="px-8 py-2.5 text-base capitalize">
                {feature.id}
              </TabsTrigger>
            ))}
          </TabsList>

          <AnimatePresence mode="wait">
            {features.map((feature) => (
              <TabsContent key={feature.id} value={feature.id} className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 gap-8 items-center"
                >
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight">{feature.title}</h2>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    <Button size="lg">Get Started</Button>
                  </div>
                  <div className="relative h-[400px] rounded-xl overflow-hidden">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  )
}

