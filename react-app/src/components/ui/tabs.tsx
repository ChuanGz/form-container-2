"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "gtw-inline-flex gtw-h-10 gtw-items-center gtw-justify-center gtw-rounded-md gtw-bg-muted gtw-p-1 gtw-text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "gtw-inline-flex gtw-items-center gtw-justify-center gtw-whitespace-nowrap gtw-rounded-sm gtw-px-3 gtw-py-1.5 gtw-text-sm gtw-font-medium gtw-ring-offset-background gtw-transition-all focus-visible:gtw-outline-none focus-visible:gtw-ring-2 focus-visible:gtw-ring-ring focus-visible:gtw-ring-offset-2 disabled:gtw-pointer-events-none disabled:gtw-opacity-50 data-[state=active]:gtw-bg-background data-[state=active]:gtw-text-foreground data-[state=active]:gtw-shadow-sm",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "gtw-mt-2 gtw-ring-offset-background focus-visible:gtw-outline-none focus-visible:gtw-ring-2 focus-visible:gtw-ring-ring focus-visible:gtw-ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
