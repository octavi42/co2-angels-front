"use client";
import { CardStack } from "@/app/components/ui/card-stack";
import { cn } from "@/lib/utils";

export function CardStackDemo() {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full max-w-[28rem] mx-auto">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-orange-100 text-orange-700 dark:bg-orange-700/[0.2] dark:text-orange-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "ETH Cluj",
    designation: "Ethereum Think Tank",
    content: (
      <p>
        Announcing the next #Ethereum Think Tank on 2nd October, 7PM EEST. We welcome <Highlight>CO2 Angels team</Highlight>, winner of CASSINI hackathon, to present their innovative platform for the carbon credit market.
      </p>
    ),
    link: "https://x.com/ETHCluj/status/1839648044041539769?t=K4bk61gJ2Vvd28Xna5jzuQ&s=19"
  },
  {
    id: 1,
    name: "ESA Φ-lab",
    designation: "RUDEO Hackathon",
    content: (
      <p>
        The <Highlight>RUDEO Hackathon</Highlight>, funded by ESA Φ-lab and implemented by GMV, took place between 24-25 October 2024, in a hybrid format.
      </p>
    ),
    link: "https://philab.esa.int/rudeo-paving-the-way-for-a-sustainable-future-with-earth-observation-and-blockchain/"
  },
  {
    id: 2,
    name: "CS UBB Cluj",
    designation: "CASSINI Hackathon",
    content: (
      <p>
        <Highlight>CO2 Angels</Highlight> a câștigat hackathon-ul CASSINI în România cu o soluție inovatoare de monitorizare a proiectelor de carbon.
      </p>
    ),
    link: "https://www.cs.ubbcluj.ro/co2-angels-a-castigat-hackathon-ul-cassini-in-romania-cu-o-solutie-inovatoare-de-monitorizare-a-proiectelor-de-carbon/"
  },
];

