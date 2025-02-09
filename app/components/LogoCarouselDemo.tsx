"use client"

import { LogoCarousel } from "@/app/components/ui/logo-carousel"

const logos = [
  { id: 1, name: "Logo 1", src: "/path/to/logo1.png" },
  { id: 2, name: "Logo 2", src: "/path/to/logo2.png" },
  { id: 3, name: "Logo 3", src: "/path/to/logo3.png" },
  // Add more logo objects as needed
]

export function LogoCarouselDemo() {
  return (
    <div className="space-y-8 py-24">
      <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-300 mb-2">The best are already here</h2>
          <a href="https://www.newcult.co" target="_blank" rel="noopener noreferrer">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Join new cult
            </h2>
          </a>
        </div>

        <LogoCarousel columns={3} logos={logos} />
      </div>
    </div>
  )
}

