'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronRight } from 'lucide-react';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

export const Accordions = forwardRef<
  HTMLDivElement,
  | Omit<AccordionPrimitive.AccordionSingleProps, 'value' | 'onValueChange'>
  | Omit<AccordionPrimitive.AccordionMultipleProps, 'value' | 'onValueChange'>
>(({ type = 'single', className, ...props }, ref) => {
  return (
    <AccordionPrimitive.Root
      type={type}
      ref={ref}
      collapsible={type === 'single' ? true : undefined}
      className={cn(
        'divide-y divide-gray-700 overflow-hidden rounded-lg border border-gray-700 bg-black',
        className
      )}
      {...props}
    />
  );
});

Accordions.displayName = 'Accordions';

export const Accordion = forwardRef<
  HTMLDivElement,
  Omit<ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>, 'value'> & {
    title: string;
  }
>(({ title, className, id, children, ...props }, ref) => {
  return (
    <AccordionPrimitive.Item
      ref={ref}
      value={id ?? title}
      className={cn('group/accordion relative scroll-m-20', className)}
      {...props}
    >
      <AccordionPrimitive.Header
        className="not-prose flex flex-row items-center font-medium text-white"
      >
        <AccordionPrimitive.Trigger 
          className="flex flex-1 items-center gap-3 py-4 px-6 text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 text-base font-medium text-gray-300"
        >
          <ChevronRight 
            className="h-4 w-4 shrink-0 text-gray-500 transition-transform duration-200 group-data-[state=open]/accordion:rotate-90" 
          />
          {title}
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
      <AccordionPrimitive.Content 
        className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      >
        <div className="text-gray-400 p-6 pt-2 prose-no-margin text-sm leading-relaxed">{children}</div>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  );
});

Accordion.displayName = 'Accordion';

