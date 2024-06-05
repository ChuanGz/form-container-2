import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "gtw-relative gtw-w-full gtw-rounded-lg gtw-border gtw-p-4 [&>svg~*]:gtw-pl-7 [&>svg+div]:gtw-translate-y-[-3px] [&>svg]:gtw-absolute [&>svg]:gtw-left-4 [&>svg]:gtw-top-4 [&>svg]:gtw-text-foreground",
  {
    variants: {
      variant: {
        default: "gtw-bg-background gtw-text-foreground",
        destructive:
          "gtw-border-destructive/50 gtw-text-destructive dark:gtw-border-destructive [&>svg]:gtw-text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("gtw-mb-1 gtw-font-medium gtw-leading-none gtw-tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("gtw-text-sm [&_p]:gtw-leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
