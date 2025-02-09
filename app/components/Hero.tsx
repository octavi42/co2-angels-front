import { Globe } from "@/app/components/Globe"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col md:grid md:grid-cols-2 items-center overflow-hidden bg-black py-16 md:py-24">
      <div className="container relative z-10 mx-auto px-4 md:px-8 lg:px-12 text-left md:order-1 flex flex-col justify-center h-full space-y-6 md:space-y-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 leading-tight">
          CO2 Angels
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300">Accessible solutions for Sustainable action</p>
        <div className="mb-8">
          <p className="text-base md:text-lg text-gray-400 max-w-xl">
            Be part of a movement for impactful, sustainable farming. Whether you're a farm, retailer, producer or
            exporter, your actions can shape a better world.
          </p>
        </div>
        <div className="pt-4">
          <Link
            href="/contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-medium py-3 px-8 rounded-full transition-colors text-base md:text-lg"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="relative w-full h-full flex items-center justify-center md:order-2 mt-12 md:mt-0">
        <div className="w-full max-w-[600px] aspect-square">
          <Globe />
        </div>
      </div>
    </section>
  )
}

