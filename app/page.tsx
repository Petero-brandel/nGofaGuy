"use client"

import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { HowItWorks } from "@/components/sections/how-it-works"
import { PopularServices } from "@/components/sections/popular-services"
import { WalletPayment } from "@/components/sections/wallet-payment"
import { WhyGofaGuy } from "@/components/sections/why-gofaguy"
import { PostExamples } from "@/components/sections/post-examples"
import { CallToAction } from "@/components/sections/call-to-action"
import { FAQAccordion } from "@/components/sections/FAQAccordion"
import { Footer } from "@/components/sections/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero  />
      <About />
      <WalletPayment />
      <HowItWorks />
      <PopularServices />
      <WhyGofaGuy />
      <FAQAccordion />
      <CallToAction />
      <Footer />
    </div>
  )
}
