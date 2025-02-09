"use client"
import { ContainerScroll } from "@/app/components/ui/container-scroll-animation"
import Image from "next/image"

export function HeroScrollDemo() {
  return (
    <section className="h-screen flex flex-col bg-black overflow-hidden">
      <div className="container mx-auto px-4 pt-20">
        <h2 className="text-3xl font-semibold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          Our Dashboard
        </h2>
      </div>
      <div className="flex-grow">
        <ContainerScroll>
          <div className="h-full w-full flex items-center justify-center">
            <Image
              src="https://sjc.microlink.io/nb-EzTxVRv8NGkFXrnipH06q9N0qie2vJ5vnSZug6TgnnU2xNvhejy5uWdghtZMTsYFc7vVfTp8CytVjV_JULQ.jpeg"
              alt="CO2 Angels Dashboard"
              width={1400}
              height={720}
              className="rounded-2xl object-cover max-h-[80vh] w-auto"
              draggable={false}
            />
          </div>
        </ContainerScroll>
      </div>
    </section>
  )
}

