"use client";

import { Header } from "@/components/HomeSections/header";
import { Hero } from "@/components/HomeSections/hero";
import { About } from "@/components/HomeSections/about";
import { HowItWorks } from "@/components/HomeSections/how-it-works";
import { PopularServices } from "@/components/HomeSections/popular-services";
import { WalletPayment } from "@/components/HomeSections/wallet-payment";
import { WhyGofaGuy } from "@/components/HomeSections/why-gofaguy";
import { CallToAction } from "@/components/HomeSections/call-to-action";
import { FAQAccordion } from "@/components/HomeSections/FAQAccordion";
import { Footer } from "@/components/HomeSections/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <WalletPayment />
      <HowItWorks />
      <PopularServices />
      <WhyGofaGuy />
      <FAQAccordion />
      <CallToAction />
      <Footer />
    </div>
  );
}
