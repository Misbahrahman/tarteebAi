"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { DemoRequestModal } from "./demo-request-modal"

export default function Hero() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features")
    if (featuresSection) {
      const yOffset = -70 // Adjust this value based on your navbar height
      const y = featuresSection.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
      <div className="space-y-4">
        <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          Unlock Your Data's Potential
          <br />
          with Tarteeb AI
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Connect your enterprise data to powerful LLMs and get instant insights through natural language queries.
          Transform the way you interact with your business data.
        </p>
      </div>
      <div className="flex gap-4">
        <DemoRequestModal />
        <Button variant="outline" size="lg" onClick={scrollToFeatures}>
          Get Started
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}

