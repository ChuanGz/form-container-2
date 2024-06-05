"use client"

import { GripVertical } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "@/lib/utils"

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      "gtw-flex gtw-h-full gtw-w-full data-[panel-group-direction=vertical]:gtw-flex-col",
      className
    )}
    {...props}
  />
)

const ResizablePanel = ResizablePrimitive.Panel

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      "gtw-relative gtw-flex gtw-w-px gtw-items-center gtw-justify-center gtw-bg-border after:gtw-absolute after:gtw-inset-y-0 after:gtw-left-1/2 after:gtw-w-1 after:gtw--translate-x-1/2 focus-visible:gtw-outline-none focus-visible:gtw-ring-1 focus-visible:gtw-ring-ring focus-visible:gtw-ring-offset-1 data-[panel-group-direction=vertical]:gtw-h-px data-[panel-group-direction=vertical]:gtw-w-full data-[panel-group-direction=vertical]:after:gtw-left-0 data-[panel-group-direction=vertical]:after:gtw-h-1 data-[panel-group-direction=vertical]:after:gtw-w-full data-[panel-group-direction=vertical]:after:gtw--translate-y-1/2 data-[panel-group-direction=vertical]:after:gtw-translate-x-0 [&[data-panel-group-direction=vertical]>div]:gtw-rotate-90",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="gtw-z-10 gtw-flex gtw-h-4 gtw-w-3 gtw-items-center gtw-justify-center gtw-rounded-sm gtw-border gtw-bg-border">
        <GripVertical className="gtw-h-2.5 gtw-w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
