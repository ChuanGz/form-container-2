import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "gtw-flex gtw-min-h-[80px] gtw-w-full gtw-rounded-md gtw-border gtw-border-input gtw-bg-background gtw-px-3 gtw-py-2 gtw-text-sm gtw-ring-offset-background placeholder:gtw-text-muted-foreground focus-visible:gtw-outline-none focus-visible:gtw-ring-2 focus-visible:gtw-ring-ring focus-visible:gtw-ring-offset-2 disabled:gtw-cursor-not-allowed disabled:gtw-opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
