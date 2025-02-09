import { Navbar } from "@/app/components/Navbar"
import { Footer } from "@/app/components/Footer"
import { Contact } from "@/app/components/Contact"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="py-20 mt-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
          <Contact />
        </div>
      </section>
      <Footer />
    </main>
  )
}

