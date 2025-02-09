import { Navbar } from "@/app/components/Navbar"
import { Hero } from "@/app/components/Hero"
import { VideoSection } from "@/app/components/VideoSection"
import { HeroScrollDemo } from "@/app/components/HeroScrollDemo"
import { CardStackDemo } from "@/app/components/CardStackDemo"
import { FeatureStepsDemo } from "@/app/components/FeatureStepsDemo"
import { Footer } from "@/app/components/Footer"
import { StarBorder } from "@/app/components/ui/star-border"
import Link from "next/link"

export default function Home() {
  return (
    <main className="text-white">
      <Navbar />
      <Hero />
      <VideoSection />
      <HeroScrollDemo />
      <FeatureStepsDemo />
      <section className="h-screen flex flex-col justify-between bg-black text-white">
        <div className="container mx-auto px-4 pt-20">
          <h2 className="text-3xl font-semibold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            In the News
          </h2>
          <CardStackDemo />
        </div>
      </section>
      <section className="py-20 bg-black h-screen text-white">
        <div className="container mx-auto px-4">
          <div className="bg-black rounded-lg shadow-2xl p-8 md:p-12">
            <h1 className="text-center max-w-4xl mx-auto text-white italic text-xl md:text-2xl lg:text-3xl font-light leading-relaxed">
              For agribusiness building sustainable practices championing responsible sourcing, every choice matters.
              Together, let's shape a greener, resilient future.
            </h1>
            <div className="mt-8 text-center">
              <StarBorder as={Link} href="/contact" color="hsl(24, 100%, 50%)" className="text-white">
                Contact Us
              </StarBorder>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

