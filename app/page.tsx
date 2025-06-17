"use client"

import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { HowItWorks } from "@/components/sections/how-it-works"
import { PopularServices } from "@/components/sections/popular-services"
import { AppFeatures } from "@/components/sections/app-features"
import { WhyGofaGuy } from "@/components/sections/why-gofaguy"
import { CallToAction } from "@/components/sections/call-to-action"
import { Footer } from "@/components/sections/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <HowItWorks />
      <PopularServices />
      <AppFeatures />
      <WhyGofaGuy />
      <CallToAction />
      <Footer />
    </div>
  )
}
