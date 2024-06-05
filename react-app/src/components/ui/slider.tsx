"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "gtw-relative gtw-flex gtw-w-full gtw-touch-none gtw-select-none gtw-items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="gtw-relative gtw-h-2 gtw-w-full gtw-grow gtw-overflow-hidden gtw-rounded-full gtw-bg-secondary">
      <SliderPrimitive.Range className="gtw-absolute gtw-h-full gtw-bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="gtw-block gtw-h-5 gtw-w-5 gtw-rounded-full gtw-border-2 gtw-border-primary gtw-bg-background gtw-ring-offset-background gtw-transition-colors focus-visible:gtw-outline-none focus-visible:gtw-ring-2 focus-visible:gtw-ring-ring focus-visible:gtw-ring-offset-2 disabled:gtw-pointer-events-none disabled:gtw-opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
