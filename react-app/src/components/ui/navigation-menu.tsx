import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "gtw-relative gtw-z-10 gtw-flex gtw-max-w-max gtw-flex-1 gtw-items-center gtw-justify-center",
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "gtw-group gtw-flex gtw-flex-1 gtw-list-none gtw-items-center gtw-justify-center gtw-space-x-1",
      className
    )}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(
  "gtw-group gtw-inline-flex gtw-h-10 gtw-w-max gtw-items-center gtw-justify-center gtw-rounded-md gtw-bg-background gtw-px-4 gtw-py-2 gtw-text-sm gtw-font-medium gtw-transition-colors hover:gtw-bg-accent hover:gtw-text-accent-foreground focus:gtw-bg-accent focus:gtw-text-accent-foreground focus:gtw-outline-none disabled:gtw-pointer-events-none disabled:gtw-opacity-50 data-[active]:gtw-bg-accent/50 data-[state=open]:gtw-bg-accent/50"
)

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "gtw-group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="gtw-relative gtw-top-[1px] gtw-ml-1 gtw-h-3 gtw-w-3 gtw-transition gtw-duration-200 group-data-[state=open]:gtw-rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "gtw-left-0 gtw-top-0 gtw-w-full data-[motion^=from-]:gtw-animate-in data-[motion^=to-]:gtw-animate-out data-[motion^=from-]:gtw-fade-in data-[motion^=to-]:gtw-fade-out data-[motion=from-end]:gtw-slide-in-from-right-52 data-[motion=from-start]:gtw-slide-in-from-left-52 data-[motion=to-end]:gtw-slide-out-to-right-52 data-[motion=to-start]:gtw-slide-out-to-left-52 md:gtw-absolute md:gtw-w-auto gtw-",
      className
    )}
    {...props}
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("gtw-absolute gtw-left-0 gtw-top-full gtw-flex gtw-justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "gtw-origin-top-center gtw-relative gtw-mt-1.5 gtw-h-[var(--radix-navigation-menu-viewport-height)] gtw-w-full gtw-overflow-hidden gtw-rounded-md gtw-border gtw-bg-popover gtw-text-popover-foreground gtw-shadow-lg data-[state=open]:gtw-animate-in data-[state=closed]:gtw-animate-out data-[state=closed]:gtw-zoom-out-95 data-[state=open]:gtw-zoom-in-90 md:gtw-w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
))
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "gtw-top-full gtw-z-[1] gtw-flex gtw-h-1.5 gtw-items-end gtw-justify-center gtw-overflow-hidden data-[state=visible]:gtw-animate-in data-[state=hidden]:gtw-animate-out data-[state=hidden]:gtw-fade-out data-[state=visible]:gtw-fade-in",
      className
    )}
    {...props}
  >
    <div className="gtw-relative gtw-top-[60%] gtw-h-2 gtw-w-2 gtw-rotate-45 gtw-rounded-tl-sm gtw-bg-border gtw-shadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}
