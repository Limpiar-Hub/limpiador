import { Suspense } from "react"
import { HeroSection } from "@/components/hero-section"
import { PartnerLogos } from "@/components/partner-logos"
import { ServicesNavigation } from "@/components/services-navigation"
import { FeaturesSection } from "@/components/features-section"
import { Testimonials } from "@/components/testimonials"
import { GetStartedSteps } from "@/components/get-started-steps"
import { LoadingSpinner } from "@/components/loading-spinner"

// Add JSON-LD Schema
export const metadata = {
  other: {
    "script:ld+json": {
      "@context": "https://schema.org",
      "@type": "CleaningService",
      name: "Limpiar",
      description:
        "Professional cleaning services for modern businesses. Sustainable solutions that care for your space and the environment.",
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Cleaning Services",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Office Cleaning",
            description: "Professional cleaning services for office spaces",
          },
          {
            "@type": "OfferCatalog",
            name: "Healthcare Facility Cleaning",
            description: "Specialized cleaning for healthcare facilities",
          },
        ],
      },
    },
  },
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PartnerLogos />
      <ServicesNavigation />
      <Suspense fallback={<LoadingSpinner />}>
        <FeaturesSection />
        <Testimonials />
        <GetStartedSteps />
      </Suspense>
    </main>
  )
}

