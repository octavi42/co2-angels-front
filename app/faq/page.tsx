'use client';

import { Navbar } from "@/app/components/Navbar"
import { Footer } from "@/app/components/Footer"
import { Accordion, Accordions } from "@/app/components/ui/accordion"
import { StarBorder } from "@/app/components/ui/star-border"
import Link from 'next/link'

export default function FAQ() {
  const faqs = [
    {
      id: "co2-angels-purpose",
      question: "What does CO2 Angels do?",
      answer: "CO2 Angels empowers sustainable agriculture by providing data-backed insights and secure tracking tools. We support farmers, retailers, producers and exporters in making impactful, sustainable choices that build resilience and accountability across the agricultural ecosystem."
    },
    {
      id: "satellite-ai-tech",
      question: "How do satellite and AI technologies support sustainable farming?",
      answer: "Our platform uses satellite imagery and AI to monitor key metrics like soil health, carbon sequestration, in near real-time. This provides farmers and retailers with actionable insights to make informed decisions and optimize sustainability practices."
    },
    {
      id: "data-security",
      question: "How does CO2 Angels ensure data security and accuracy?",
      answer: "We use advanced technologies, including blockchain, to securely record and verify every action and metric that validates it. This creates an immutable record of sustainability practices, ensuring both transparency and trust for all stakeholders."
    },
    {
      id: "unique-features",
      question: "What makes CO2 Angels different from other sustainability platforms?",
      answer: "CO2 Angels combines satellite data, AI-driven insights, and blockchain verification to deliver precise, reliable tracking of agricultural practices. Our approach separates itself from competition by offering a low-cost, easy-to-use, MRV tool that helps in achieving measurable sustainability goals."
    },
    {
      id: "farmer-benefits",
      question: "How can farmers benefit from using CO2 Angels?",
      answer: "Farmers gain access to actionable insights that help optimize practices, improve soil health, and reduce emissions. Our easy-to-use platform supports farms of all sizes in adopting sustainable practices that align with evolving market and regulatory demands."
    },
    {
      id: "retailer-benefits",
      question: "What benefits does CO2 Angels offer to retailers, producers, exporters?",
      answer: "Retailers, producers and exporters can verify sustainable sourcing through our secure platform, which provides detailed reporting on farm-level actions. This builds accountability and trust, helping brands meet their sustainability commitments with confidence."
    },
    {
      id: "supported-practices",
      question: "What types of agricultural practices does CO2 Angels support?",
      answer: "We support a wide range of sustainable practices, including regenerative farming, precision agriculture, and carbon sequestration initiatives. All practices are monitored and verified to ensure environmental impact and progress."
    },
    {
      id: "measurement-tools",
      question: "What measurement tools and technologies do you use?",
      answer: "We use a combination of satellite imagery, AI algorithms, and blockchain technology to accurately track and verify sustainable practices. For further details, please contact us at carbon.co2angels@gmail.com or request a demo from our landing page."
    },
    {
      id: "beneficiaries",
      question: "Who can benefit from CO2 Angels?",
      answer: "Farmers, retailers, producers and exporters can all benefit. Farmers receive insights and tools to improve sustainability, while retailers gain verifiable data on farm practices. Together, they support a transparent and accountable agricultural supply chain."
    }
  ]

  return (
    <main className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <section className="flex-grow flex items-center justify-center bg-black py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-semibold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Frequently Asked Questions
          </h1>
          <div className="max-w-3xl mx-auto">
            <Accordions className="bg-black border-gray-700">
              {faqs.map((faq) => (
                <Accordion key={faq.id} id={faq.id} title={faq.question} className="border-gray-700">
                  <div className="text-gray-300">{faq.answer}</div>
                </Accordion>
              ))}
            </Accordions>
            <div className="mt-12 text-center">
              <StarBorder 
                as={Link} 
                href="/contact" 
                color="hsl(24, 100%, 50%)" 
                className="text-white inline-block transition-transform hover:scale-105"
                innerClassName="bg-gradient-to-r from-orange-600 to-orange-700 border-orange-500 py-3 px-6 text-sm font-medium"
              >
                Still have questions? Contact us
              </StarBorder>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

