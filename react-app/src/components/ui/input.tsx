import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "gtw-flex gtw-h-10 gtw-w-full gtw-rounded-md gtw-border gtw-border-input gtw-bg-background gtw-px-3 gtw-py-2 gtw-text-sm gtw-ring-offset-background file:gtw-border-0 file:gtw-bg-transparent file:gtw-text-sm file:gtw-font-medium placeholder:gtw-text-muted-foreground focus-visible:gtw-outline-none focus-visible:gtw-ring-2 focus-visible:gtw-ring-ring focus-visible:gtw-ring-offset-2 disabled:gtw-cursor-not-allowed disabled:gtw-opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
