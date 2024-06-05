"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "gtw-peer gtw-inline-flex gtw-h-6 gtw-w-11 gtw-shrink-0 gtw-cursor-pointer gtw-items-center gtw-rounded-full gtw-border-2 gtw-border-transparent gtw-transition-colors focus-visible:gtw-outline-none focus-visible:gtw-ring-2 focus-visible:gtw-ring-ring focus-visible:gtw-ring-offset-2 focus-visible:gtw-ring-offset-background disabled:gtw-cursor-not-allowed disabled:gtw-opacity-50 data-[state=checked]:gtw-bg-primary data-[state=unchecked]:gtw-bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "gtw-pointer-events-none gtw-block gtw-h-5 gtw-w-5 gtw-rounded-full gtw-bg-background gtw-shadow-lg gtw-ring-0 gtw-transition-transform data-[state=checked]:gtw-translate-x-5 data-[state=unchecked]:gtw-translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
