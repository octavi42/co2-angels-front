"use client";

import { useState, useEffect } from "react";
import { AnimatedTestimonials } from "@/app/components/ui/animated-testimonials";

// Shuffle function
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function AnimatedTestimonialsDemo() {
  const [shuffledTestimonials, setShuffledTestimonials] = useState<typeof testimonials>([]);

  useEffect(() => {
    setShuffledTestimonials(shuffleArray(testimonials));
  }, []);

  return <AnimatedTestimonials testimonials={shuffledTestimonials} />;
}

const testimonials = [
  {
    quote:
      "Leads product and technology development UBB Computer Science Student",
    name: "David Seu",
    designation: "co-CEO/CTO",
    src: "https://co2angels.com/images/david.jpeg",
  },
  {
    quote:
      "Drives company strategy and oversees business operations UBB Computer Science Student",
    name: "Erik Maidik",
    designation: "co-CEO/CFO",
    src: "https://co2angels.com/images/erik.jpeg",
  },
  {
    quote:
      "Leads technical innovation on satellite data and AI UBB Computer Science Student",
    name: "Dan Goia",
    designation: "Lead ML Engineer",
    src: "https://co2angels.com/images/dan.jpeg",
  },
  {
    quote:
      "Drives marketing efforts and establishes branding PR&Advertising Student",
    name: "Miruna Maidik",
    designation: "Lead Marketing Specialist",
    src: "https://co2angels.com/images/miru.jpeg",
  },
  {
    quote:
      "Optimizes satellite data processing workflows Geography Student",
    name: "Gabriel Cioltea",
    designation: "Lead Data Engineer",
    src: "https://co2angels.com/images/gabi.jpg",
  },
  {
    quote:
      "Designs and refines validated-driven UX Computer Science Student",
    name: "Cristea Octavian",
    designation: "Lead UI/UX Developer",
    src: "https://co2angels.com/images/octa.jpeg",
  }
];

