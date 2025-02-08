'use client'

import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const stats = [
  {
    value: 30,
    suffix: '%',
    label: 'Cost Savings',
    description: 'Average reduction in cleaning costs'
  },
  {
    value: 10000,
    label: 'Property Managers',
    description: 'Satisfied customers using our services'
  },
  {
    value: 336,
    label: 'Hours Saved',
    description: 'Average time saved per property manager'
  },
]

export function StatsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="py-24 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl font-bold mb-2">
                <CountUp
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={2.5}
                  separator=","
                  start={inView ? 0 : undefined}
                />
              </div>
              <div className="text-xl mb-2">{stat.label}</div>
              <div className="text-blue-100">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

