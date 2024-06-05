import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "gtw-inline-flex gtw-items-center gtw-justify-center gtw-whitespace-nowrap gtw-rounded-md gtw-text-sm gtw-font-medium gtw-ring-offset-background gtw-transition-colors focus-visible:gtw-outline-none focus-visible:gtw-ring-2 focus-visible:gtw-ring-ring focus-visible:gtw-ring-offset-2 disabled:gtw-pointer-events-none disabled:gtw-opacity-50",
  {
    variants: {
      variant: {
        default: "gtw-bg-primary gtw-text-primary-foreground hover:gtw-bg-primary/90",
        destructive:
          "gtw-bg-destructive gtw-text-destructive-foreground hover:gtw-bg-destructive/90",
        outline:
          "gtw-border gtw-border-input gtw-bg-background hover:gtw-bg-accent hover:gtw-text-accent-foreground",
        secondary:
          "gtw-bg-secondary gtw-text-secondary-foreground hover:gtw-bg-secondary/80",
        ghost: "hover:gtw-bg-accent hover:gtw-text-accent-foreground",
        link: "gtw-text-primary gtw-underline-offset-4 hover:gtw-underline",
      },
      size: {
        default: "gtw-h-10 gtw-px-4 gtw-py-2",
        sm: "gtw-h-9 gtw-rounded-md gtw-px-3",
        lg: "gtw-h-11 gtw-rounded-md gtw-px-8",
        icon: "gtw-h-10 gtw-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
