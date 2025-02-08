"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Limpiar Logo"
              width={140}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/commerce-spaces" className="text-sm font-medium text-gray-700 hover:text-blue-600">
              Commerce Spaces
            </Link>
            <Link href="/limpiador" className="text-sm font-medium text-gray-700 hover:text-blue-600">
              Limpiador
            </Link>
            <Link href="/waste-management" className="text-sm font-medium text-gray-700 hover:text-blue-600">
              Waste Management
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-blue-600">
              About Us
            </Link>
            <Link href="/social-impact" className="text-sm font-medium text-gray-700 hover:text-blue-600">
              Social Impact
            </Link>
          </nav>

          <Button className="hidden md:inline-flex">Get Started</Button>

          <Button variant="ghost" className="md:hidden">
            <span className="sr-only">Open menu</span>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  )
}

