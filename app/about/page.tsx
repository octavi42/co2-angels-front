import { Navbar } from "@/app/components/Navbar"
import { Footer } from "@/app/components/Footer"
import { PatternCard, PatternCardBody } from "@/app/components/ui/card-with-ellipsis-pattern"
import { AnimatedTestimonialsDemo } from "@/app/components/AnimatedTestimonialsDemo"

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-semibold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            About CO2 Angels
          </h1>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PatternCard className="bg-black border-gray-700">
                <PatternCardBody>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    Our Mission
                  </h3>
                  <p className="text-wrap text-base text-gray-400 leading-relaxed mb-4">
                    Our mission is to help agribusiness value chain companies monitor and report their carbon sequestration projects with a more proactive, affordable, and secure tool.
                  </p>
                  <p className="text-wrap text-base text-gray-400 leading-relaxed">
                    We recognized that sustainable farming practices have the potential to drive real environmental impact, yet farmers face significant challenges in achieving transparency and efficiency. This realization inspired us to harness satellite and AI-driven technology to create a solution that empowers farms and strengthens the entire agricultural ecosystem.
                  </p>
                </PatternCardBody>
              </PatternCard>

              <PatternCard className="bg-black border-gray-700">
                <PatternCardBody>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    Our Vision
                  </h3>
                  <p className="text-wrap text-base text-gray-400 leading-relaxed mb-4">
                    We see a future where every farming choice contributes to a healthier planet and a sustainable agricultural ecosystem.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Set the global standard for sustainable agriculture insights</li>
                    <li>Provide actionable, near-real-time data for transparent farm-to-retailer reporting</li>
                    <li>Earn EU recognition for our advanced satellite and AI-driven methodology</li>
                    <li>Become the most trusted platform for sustainable agriculture verification worldwide</li>
                  </ul>
                </PatternCardBody>
              </PatternCard>
            </div>
          </div>
        </div>
      </section>
      <AnimatedTestimonialsDemo />
      <Footer />
    </main>
  )
}

