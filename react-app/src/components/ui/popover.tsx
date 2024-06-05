"use client"

import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "gtw-z-50 gtw-w-72 gtw-rounded-md gtw-border gtw-bg-popover gtw-p-4 gtw-text-popover-foreground gtw-shadow-md gtw-outline-none data-[state=open]:gtw-animate-in data-[state=closed]:gtw-animate-out data-[state=closed]:gtw-fade-out-0 data-[state=open]:gtw-fade-in-0 data-[state=closed]:gtw-zoom-out-95 data-[state=open]:gtw-zoom-in-95 data-[side=bottom]:gtw-slide-in-from-top-2 data-[side=left]:gtw-slide-in-from-right-2 data-[side=right]:gtw-slide-in-from-left-2 data-[side=top]:gtw-slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent }
