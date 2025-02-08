import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"
import { Suspense } from "react"
import { Analytics } from "@vercel/analytics/react"
import type React from "react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LoadingSpinner } from "@/components/loading-spinner"
import { Toaster } from "@/components/ui/toaster"

import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://limpiador.online"),
  title: {
    default: "Limpiar - Professional Cleaning Services",
    template: "%s | Limpiar",
  },
  description:
    "Sustainable cleaning solutions for modern businesses. Professional, eco-friendly, and efficient cleaning services.",
  keywords: [
    "cleaning services",
    "office cleaning",
    "sustainable cleaning",
    "professional cleaning",
    "eco-friendly cleaning",
  ],
  authors: [{ name: "Limpiar" }],
  creator: "Limpiar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://limpiador.online",
    siteName: "Limpiar",
    title: "Limpiar - Professional Cleaning Services",
    description: "Sustainable cleaning solutions for modern businesses",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Limpiar Cleaning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Limpiar - Professional Cleaning Services",
    description: "Sustainable cleaning solutions for modern businesses",
    images: [
      "/logo.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen bg-background">
        <Navbar />
        <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
        <Footer />
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}

