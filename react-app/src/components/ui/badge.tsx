import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "gtw-inline-flex gtw-items-center gtw-rounded-full gtw-border gtw-px-2.5 gtw-py-0.5 gtw-text-xs gtw-font-semibold gtw-transition-colors focus:gtw-outline-none focus:gtw-ring-2 focus:gtw-ring-ring focus:gtw-ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "gtw-border-transparent gtw-bg-primary gtw-text-primary-foreground hover:gtw-bg-primary/80",
        secondary:
          "gtw-border-transparent gtw-bg-secondary gtw-text-secondary-foreground hover:gtw-bg-secondary/80",
        destructive:
          "gtw-border-transparent gtw-bg-destructive gtw-text-destructive-foreground hover:gtw-bg-destructive/80",
        outline: "gtw-text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
