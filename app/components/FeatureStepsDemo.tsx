import { FeatureSteps } from "@/app/components/ui/feature-steps"

const challenges = [
  { 
    step: 'Challenge 1', 
    title: 'Environmental Degradation',
    content: `Soils have lost 116 billion tons of organic carbon, roughly one quarter of all carbon emitted by humans since the Industrial Revolution.`, 
    image: 'https://i.pinimg.com/736x/47/ff/06/47ff06c4c5e005d72862c86c1e008803.jpg'
  },
  { 
    step: 'Challenge 2',
    title: 'Economic Barriers',
    content: `High implementation costs, delayed returns, and market uncertainty create a daunting path for small and medium-sized farms, slowing their shift to sustainable practices.`,
    image: 'https://i.pinimg.com/736x/a5/7f/2d/a57f2d06fc35c9ee2fe0b76065f730ee.jpg'
  },
  { 
    step: 'Challenge 3',
    title: 'Greenhouse Gas Emissions',
    content: `From livestock methane to fertilizer emissions, agriculture's impact on the climate is substantial, intensifying the urgency for sustainable solutions.`,
    image: 'https://i.pinimg.com/736x/23/f8/b8/23f8b81a67454bc7d73bd0548e4164c4.jpg'
  },
]

const solutions = [
  {
    step: 'Digital Carbon Mapping',
    content: 'Uncover a comprehensive view of your farm\'s carbon stocks, grounded in widely-used standardized protocols and powered by AI-driven satellite',
    image: 'https://i.pinimg.com/736x/62/ca/b7/62cab73ee3b5fd53c46299bc5b316ba1.jpg'
  },
  {
    step: 'Pathway to Progress',
    content: 'Receive tailored, data-driven guidance, refining your practices and amplifying your farm\'s impact in line with global standards.',
    image: 'https://i.pinimg.com/736x/bf/62/ba/bf62bac2e4735885178584c57f233afc.jpg'
  },
  {
    step: 'Proof of Progress',
    content: 'Each step toward sustainability is securely preserved, offering an irrefutable trail of impact and building confidence with those who matter most.',
    image: 'https://i.pinimg.com/736x/39/ae/31/39ae310760719759d4932989a85b7e5a.jpg'
  }
]

export function FeatureStepsDemo() {
  return (
    <section className="min-h-screen flex flex-col bg-black">
      <div className="container mx-auto px-4 pt-20">
        <h2 className="text-3xl font-semibold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          Challenges We Address
        </h2>
      </div>
      <div className="flex-grow">
        <FeatureSteps 
          features={challenges}
          autoPlayInterval={6000}
          className="h-full"
        />
      </div>
      <div className="container mx-auto px-4 pt-20">
        <h2 className="text-3xl font-semibold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          Our Solutions
        </h2>
      </div>
      <div className="flex-grow">
        <FeatureSteps 
          features={solutions}
          autoPlayInterval={6000}
          className="h-full"
        />
      </div>
    </section>
  )
}

