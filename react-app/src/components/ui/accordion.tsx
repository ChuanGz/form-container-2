"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("gtw-border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="gtw-flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "gtw-flex gtw-flex-1 gtw-items-center gtw-justify-between gtw-py-4 gtw-font-medium gtw-transition-all hover:gtw-underline [&[data-state=open]>svg]:gtw-rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="gtw-h-4 gtw-w-4 gtw-shrink-0 gtw-transition-transform gtw-duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="gtw-overflow-hidden gtw-text-sm gtw-transition-all data-[state=closed]:gtw-animate-accordion-up data-[state=open]:gtw-animate-accordion-down"
    {...props}
  >
    <div className={cn("gtw-pb-4 gtw-pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
