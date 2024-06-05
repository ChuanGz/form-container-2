"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "gtw-fixed gtw-inset-0 gtw-z-50 gtw-bg-black/80 gtw- data-[state=open]:gtw-animate-in data-[state=closed]:gtw-animate-out data-[state=closed]:gtw-fade-out-0 data-[state=open]:gtw-fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "gtw-fixed gtw-left-[50%] gtw-top-[50%] gtw-z-50 gtw-grid gtw-w-full gtw-max-w-lg gtw-translate-x-[-50%] gtw-translate-y-[-50%] gtw-gap-4 gtw-border gtw-bg-background gtw-p-6 gtw-shadow-lg gtw-duration-200 data-[state=open]:gtw-animate-in data-[state=closed]:gtw-animate-out data-[state=closed]:gtw-fade-out-0 data-[state=open]:gtw-fade-in-0 data-[state=closed]:gtw-zoom-out-95 data-[state=open]:gtw-zoom-in-95 data-[state=closed]:gtw-slide-out-to-left-1/2 data-[state=closed]:gtw-slide-out-to-top-[48%] data-[state=open]:gtw-slide-in-from-left-1/2 data-[state=open]:gtw-slide-in-from-top-[48%] sm:gtw-rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="gtw-absolute gtw-right-4 gtw-top-4 gtw-rounded-sm gtw-opacity-70 gtw-ring-offset-background gtw-transition-opacity hover:gtw-opacity-100 focus:gtw-outline-none focus:gtw-ring-2 focus:gtw-ring-ring focus:gtw-ring-offset-2 disabled:gtw-pointer-events-none data-[state=open]:gtw-bg-accent data-[state=open]:gtw-text-muted-foreground">
        <X className="gtw-h-4 gtw-w-4" />
        <span className="gtw-sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "gtw-flex gtw-flex-col gtw-space-y-1.5 gtw-text-center sm:gtw-text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
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
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "gtw-text-lg gtw-font-semibold gtw-leading-none gtw-tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("gtw-text-sm gtw-text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
