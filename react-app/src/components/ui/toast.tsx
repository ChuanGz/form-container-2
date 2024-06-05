"use client"

import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "gtw-fixed gtw-top-0 gtw-z-[100] gtw-flex gtw-max-h-screen gtw-w-full gtw-flex-col-reverse gtw-p-4 sm:gtw-bottom-0 sm:gtw-right-0 sm:gtw-top-auto sm:gtw-flex-col md:gtw-max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "gtw-group gtw-pointer-events-auto gtw-relative gtw-flex gtw-w-full gtw-items-center gtw-justify-between gtw-space-x-4 gtw-overflow-hidden gtw-rounded-md gtw-border gtw-p-6 gtw-pr-8 gtw-shadow-lg gtw-transition-all data-[swipe=cancel]:gtw-translate-x-0 data-[swipe=end]:gtw-translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:gtw-translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:gtw-transition-none data-[state=open]:gtw-animate-in data-[state=closed]:gtw-animate-out data-[swipe=end]:gtw-animate-out data-[state=closed]:gtw-fade-out-80 data-[state=closed]:gtw-slide-out-to-right-full data-[state=open]:gtw-slide-in-from-top-full data-[state=open]:sm:gtw-slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "gtw-border gtw-bg-background gtw-text-foreground",
        destructive:
          "gtw-destructive gtw-group gtw-border-destructive gtw-bg-destructive gtw-text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "gtw-inline-flex gtw-h-8 gtw-shrink-0 gtw-items-center gtw-justify-center gtw-rounded-md gtw-border gtw-bg-transparent gtw-px-3 gtw-text-sm gtw-font-medium gtw-ring-offset-background gtw-transition-colors hover:gtw-bg-secondary focus:gtw-outline-none focus:gtw-ring-2 focus:gtw-ring-ring focus:gtw-ring-offset-2 disabled:gtw-pointer-events-none disabled:gtw-opacity-50 group-[.destructive]:gtw-border-muted/40 group-[.destructive]:hover:gtw-border-destructive/30 group-[.destructive]:hover:gtw-bg-destructive group-[.destructive]:hover:gtw-text-destructive-foreground group-[.destructive]:focus:gtw-ring-destructive",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "gtw-absolute gtw-right-2 gtw-top-2 gtw-rounded-md gtw-p-1 gtw-text-foreground/50 gtw-opacity-0 gtw-transition-opacity hover:gtw-text-foreground focus:gtw-opacity-100 focus:gtw-outline-none focus:gtw-ring-2 group-hover:gtw-opacity-100 group-[.destructive]:gtw-text-red-300 group-[.destructive]:hover:gtw-text-red-50 group-[.destructive]:focus:gtw-ring-red-400 group-[.destructive]:focus:gtw-ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="gtw-h-4 gtw-w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("gtw-text-sm gtw-font-semibold", className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("gtw-text-sm gtw-opacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
