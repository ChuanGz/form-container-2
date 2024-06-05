"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "gtw-z-50 gtw-overflow-hidden gtw-rounded-md gtw-border gtw-bg-popover gtw-px-3 gtw-py-1.5 gtw-text-sm gtw-text-popover-foreground gtw-shadow-md gtw-animate-in gtw-fade-in-0 gtw-zoom-in-95 data-[state=closed]:gtw-animate-out data-[state=closed]:gtw-fade-out-0 data-[state=closed]:gtw-zoom-out-95 data-[side=bottom]:gtw-slide-in-from-top-2 data-[side=left]:gtw-slide-in-from-right-2 data-[side=right]:gtw-slide-in-from-left-2 data-[side=top]:gtw-slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
