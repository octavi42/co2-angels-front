"use client";

import DisplayCards from "@/app/components/ui/display-cards";
import { Newspaper, Star, TrendingUp } from 'lucide-react';

const newsCards = [
  {
    icon: <Newspaper className="size-4 text-orange-300" />,
    title: "Latest News",
    description: "CO2 Angels expands to South America",
    date: "Just now",
    iconClassName: "text-orange-500",
    titleClassName: "text-orange-500",
    className: "z-30 hover:-translate-y-2 transition-all duration-300",
  },
  {
    icon: <TrendingUp className="size-4 text-orange-300" />,
    title: "Trending",
    description: "Carbon credit market sees 30% growth",
    date: "2 days ago",
    iconClassName: "text-orange-500",
    titleClassName: "text-orange-500",
    className: "z-20 translate-x-8 translate-y-4 hover:-translate-y-1 transition-all duration-300",
  },
  {
    icon: <Star className="size-4 text-orange-300" />,
    title: "Featured",
    description: "Success story: Farm reduces emissions by 50%",
    date: "1 week ago",
    iconClassName: "text-orange-500",
    titleClassName: "text-orange-500",
    className: "z-10 translate-x-16 translate-y-8 hover:translate-y-6 transition-all duration-300",
  },
];

export function NewsSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          Latest News
        </h2>
        <div className="flex min-h-[400px] w-full items-center justify-center">
          <div className="w-full max-w-3xl">
            <DisplayCards cards={newsCards} />
          </div>
        </div>
      </div>
    </section>
  );
}

