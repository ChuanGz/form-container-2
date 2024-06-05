import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("gtw-animate-pulse gtw-rounded-md gtw-bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
