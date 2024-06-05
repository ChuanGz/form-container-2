"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "gtw-fixed gtw-inset-0 gtw-z-50 gtw-bg-black/80 gtw- data-[state=open]:gtw-animate-in data-[state=closed]:gtw-animate-out data-[state=closed]:gtw-fade-out-0 data-[state=open]:gtw-fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
  "gtw-fixed gtw-z-50 gtw-gap-4 gtw-bg-background gtw-p-6 gtw-shadow-lg gtw-transition gtw-ease-in-out data-[state=open]:gtw-animate-in data-[state=closed]:gtw-animate-out data-[state=closed]:gtw-duration-300 data-[state=open]:gtw-duration-500",
  {
    variants: {
      side: {
        top: "gtw-inset-x-0 gtw-top-0 gtw-border-b data-[state=closed]:gtw-slide-out-to-top data-[state=open]:gtw-slide-in-from-top",
        bottom:
          "gtw-inset-x-0 gtw-bottom-0 gtw-border-t data-[state=closed]:gtw-slide-out-to-bottom data-[state=open]:gtw-slide-in-from-bottom",
        left: "gtw-inset-y-0 gtw-left-0 gtw-h-full gtw-w-3/4 gtw-border-r data-[state=closed]:gtw-slide-out-to-left data-[state=open]:gtw-slide-in-from-left sm:gtw-max-w-sm",
        right:
          "gtw-inset-y-0 gtw-right-0 gtw-h-full gtw-w-3/4 gtw- gtw-border-l data-[state=closed]:gtw-slide-out-to-right data-[state=open]:gtw-slide-in-from-right sm:gtw-max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="gtw-absolute gtw-right-4 gtw-top-4 gtw-rounded-sm gtw-opacity-70 gtw-ring-offset-background gtw-transition-opacity hover:gtw-opacity-100 focus:gtw-outline-none focus:gtw-ring-2 focus:gtw-ring-ring focus:gtw-ring-offset-2 disabled:gtw-pointer-events-none data-[state=open]:gtw-bg-secondary">
        <X className="gtw-h-4 gtw-w-4" />
        <span className="gtw-sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "gtw-flex gtw-flex-col gtw-space-y-2 gtw-text-center sm:gtw-text-left",
      className
    )}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "gtw-flex gtw-flex-col-reverse sm:gtw-flex-row sm:gtw-justify-end sm:gtw-space-x-2",
      className
    )}
    {...props}
  />
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("gtw-text-lg gtw-font-semibold gtw-text-foreground", className)}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("gtw-text-sm gtw-text-muted-foreground", className)}
    {...props}
  />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
