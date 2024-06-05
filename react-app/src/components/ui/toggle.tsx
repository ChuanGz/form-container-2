"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "gtw-inline-flex gtw-items-center gtw-justify-center gtw-rounded-md gtw-text-sm gtw-font-medium gtw-ring-offset-background gtw-transition-colors hover:gtw-bg-muted hover:gtw-text-muted-foreground focus-visible:gtw-outline-none focus-visible:gtw-ring-2 focus-visible:gtw-ring-ring focus-visible:gtw-ring-offset-2 disabled:gtw-pointer-events-none disabled:gtw-opacity-50 data-[state=on]:gtw-bg-accent data-[state=on]:gtw-text-accent-foreground",
  {
    variants: {
      variant: {
        default: "gtw-bg-transparent",
        outline:
          "gtw-border gtw-border-input gtw-bg-transparent hover:gtw-bg-accent hover:gtw-text-accent-foreground",
      },
      size: {
        default: "gtw-h-10 gtw-px-3",
        sm: "gtw-h-9 gtw-px-2.5",
        lg: "gtw-h-11 gtw-px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
