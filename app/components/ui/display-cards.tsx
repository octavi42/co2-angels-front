"use client";

import { cn } from "@/lib/utils";
import { Sparkles } from 'lucide-react';

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
}

function DisplayCard({
  className,
  icon = <Sparkles className="size-4 text-orange-300" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconClassName = "text-orange-500",
  titleClassName = "text-orange-500",
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-36 w-[22rem] select-none flex-col justify-between rounded-xl border-2 bg-gray-800/70 backdrop-blur-sm px-4 py-3 transition-all duration-700 hover:border-orange-500/50 hover:bg-gray-700 [&>*]:flex [&>*]:items-center [&>*]:gap-2",
        className
      )}
    >
      <div>
        <span className="relative inline-block rounded-full bg-orange-800 p-1">
          {icon}
        </span>
        <p className={cn("text-lg font-medium", titleClassName)}>{title}</p>
      </div>
      <p className="whitespace-nowrap text-lg text-gray-300">{description}</p>
      <p className="text-gray-400">{date}</p>
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards = [
    {
      className: "z-30 hover:-translate-y-2 transition-all duration-300",
    },
    {
      className: "z-20 translate-x-8 translate-y-4 hover:-translate-y-1 transition-all duration-300",
    },
    {
      className: "z-10 translate-x-16 translate-y-8 hover:translate-y-6 transition-all duration-300",
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700">
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}

