"use client";

import { Navbar } from "@/app/components/Navbar"
import { Footer } from "@/app/components/Footer"
import { PatternCard, PatternCardBody } from "@/app/components/ui/card-with-ellipsis-pattern"
import { LogoCarouselDemo } from "@/app/components/LogoCarouselDemo"
import { Card, CardContent } from "@/app/components/ui/card"
import { Leaf, ShieldCheck, TrendingUp } from 'lucide-react'
import Image from "next/image"


export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            How CO2 Angels Works
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <PatternCard className="bg-black border-gray-700 transform hover:scale-105 transition-transform duration-300">
              <PatternCardBody>
                <div className="flex items-center mb-4">
                  <Leaf className="w-8 h-8 text-green-500 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Precision Insights for Farms</h3>
                </div>
                <p className="text-gray-300 text-lg">
                  Powered by satellite and AI-driven analytics, we empower farmers to make informed, sustainable choices that enhance their carbon stocks, improving soil health, reducing emissions, and optimizing yield.
                </p>
              </PatternCardBody>
            </PatternCard>
            <PatternCard className="bg-black border-gray-700 transform hover:scale-105 transition-transform duration-300">
              <PatternCardBody>
                <div className="flex items-center mb-4">
                  <ShieldCheck className="w-8 h-8 text-blue-500 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Verified Impact for Retailers</h3>
                </div>
                <p className="text-gray-300 text-lg">
                  Transparent, blockchain-secured data lets retailers, producers, and exporters confidently source from sustainable farms, strengthening consumer trust and brand integrity.
                </p>
              </PatternCardBody>
            </PatternCard>
            <PatternCard className="bg-black border-gray-700 transform hover:scale-105 transition-transform duration-300">
              <PatternCardBody>
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 text-orange-500 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Aligned Growth</h3>
                </div>
                <p className="text-gray-300 text-lg">
                  Helping both farms and retailers/producers/exporters thrive sustainably, our platform fosters partnerships that align with global sustainability goals.
                </p>
              </PatternCardBody>
            </PatternCard>
          </div>
          
          <div className="mb-16">
            <PatternCard className="bg-black border-gray-700 w-full">
              <PatternCardBody>
                <h3 className="text-3xl font-bold mb-6 text-white text-center">Revolutionizing Sustainable Agriculture</h3>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Our platform empowers sustainable farming with data-backed tracking and reporting tools. Leveraging satellite and AI technology, our models provide farmers and retailers with verifiable insights into their carbon stocks, supporting real, measurable progress toward resilience and sustainability.
                    </p>
                  </div>
                  <div className="md:w-1/2">
                    <Image
                      src="https://i.pinimg.com/736x/da/4c/c8/da4cc84e4aba23138da71ae896b78b29.jpg"
                      alt="Sustainable Agriculture Visualization"
                      width={500}
                      height={300}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </PatternCardBody>
            </PatternCard>
          </div>
          
          <LogoCarouselDemo />
        </div>
      </section>
      <Footer />
    </main>
  )
}

