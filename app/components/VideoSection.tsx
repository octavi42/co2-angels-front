import { HeroVideoDialog } from "@/app/components/ui/hero-video-dialog"

export function VideoSection() {
  return (
    <section className="h-screen flex flex-col bg-black">
      <div className="container mx-auto px-4 pt-20">
        <h2 className="text-3xl font-semibold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          How It Works
        </h2>
        <div className="flex-grow flex items-center justify-center">
          <div className="max-w-3xl w-full">
            <HeroVideoDialog
              animationStyle="from-center"
              videoSrc="https://hw1n1ilk86i7fenz.public.blob.vercel-storage.com/demo-q9ubT62fhoM0uZLLVM0Fkdk0bRhSJO.mp4"
              thumbnailSrc="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=1080&q=80"
              thumbnailAlt="CO2 Angels Intro Video"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

