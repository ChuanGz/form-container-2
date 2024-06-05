"use client"

import * as React from "react"
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const ContextMenu = ContextMenuPrimitive.Root

const ContextMenuTrigger = ContextMenuPrimitive.Trigger

const ContextMenuGroup = ContextMenuPrimitive.Group

const ContextMenuPortal = ContextMenuPrimitive.Portal

const ContextMenuSub = ContextMenuPrimitive.Sub

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "gtw-flex gtw-cursor-default gtw-select-none gtw-items-center gtw-rounded-sm gtw-px-2 gtw-py-1.5 gtw-text-sm gtw-outline-none focus:gtw-bg-accent focus:gtw-text-accent-foreground data-[state=open]:gtw-bg-accent data-[state=open]:gtw-text-accent-foreground",
      inset && "gtw-pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="gtw-ml-auto gtw-h-4 gtw-w-4" />
  </ContextMenuPrimitive.SubTrigger>
))
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "gtw-z-50 gtw-min-w-[8rem] gtw-overflow-hidden gtw-rounded-md gtw-border gtw-bg-popover gtw-p-1 gtw-text-popover-foreground gtw-shadow-md data-[state=open]:gtw-animate-in data-[state=closed]:gtw-animate-out data-[state=closed]:gtw-fade-out-0 data-[state=open]:gtw-fade-in-0 data-[state=closed]:gtw-zoom-out-95 data-[state=open]:gtw-zoom-in-95 data-[side=bottom]:gtw-slide-in-from-top-2 data-[side=left]:gtw-slide-in-from-right-2 data-[side=right]:gtw-slide-in-from-left-2 data-[side=top]:gtw-slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        "gtw-z-50 gtw-min-w-[8rem] gtw-overflow-hidden gtw-rounded-md gtw-border gtw-bg-popover gtw-p-1 gtw-text-popover-foreground gtw-shadow-md gtw-animate-in gtw-fade-in-80 data-[state=open]:gtw-animate-in data-[state=closed]:gtw-animate-out data-[state=closed]:gtw-fade-out-0 data-[state=open]:gtw-fade-in-0 data-[state=closed]:gtw-zoom-out-95 data-[state=open]:gtw-zoom-in-95 data-[side=bottom]:gtw-slide-in-from-top-2 data-[side=left]:gtw-slide-in-from-right-2 data-[side=right]:gtw-slide-in-from-left-2 data-[side=top]:gtw-slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
))
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      "gtw-relative gtw-flex gtw-cursor-default gtw-select-none gtw-items-center gtw-rounded-sm gtw-px-2 gtw-py-1.5 gtw-text-sm gtw-outline-none focus:gtw-bg-accent focus:gtw-text-accent-foreground data-[disabled]:gtw-pointer-events-none data-[disabled]:gtw-opacity-50",
      inset && "gtw-pl-8",
      className
    )}
    {...props}
  />
))
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "gtw-relative gtw-flex gtw-cursor-default gtw-select-none gtw-items-center gtw-rounded-sm gtw-py-1.5 gtw-pl-8 gtw-pr-2 gtw-text-sm gtw-outline-none focus:gtw-bg-accent focus:gtw-text-accent-foreground data-[disabled]:gtw-pointer-events-none data-[disabled]:gtw-opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="gtw-absolute gtw-left-2 gtw-flex gtw-h-3.5 gtw-w-3.5 gtw-items-center gtw-justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="gtw-h-4 gtw-w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
))
ContextMenuCheckboxItem.displayName =
  ContextMenuPrimitive.CheckboxItem.displayName

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "gtw-relative gtw-flex gtw-cursor-default gtw-select-none gtw-items-center gtw-rounded-sm gtw-py-1.5 gtw-pl-8 gtw-pr-2 gtw-text-sm gtw-outline-none focus:gtw-bg-accent focus:gtw-text-accent-foreground data-[disabled]:gtw-pointer-events-none data-[disabled]:gtw-opacity-50",
      className
    )}
    {...props}
  >
    <span className="gtw-absolute gtw-left-2 gtw-flex gtw-h-3.5 gtw-w-3.5 gtw-items-center gtw-justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="gtw-h-2 gtw-w-2 gtw-fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
))
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn(
      "gtw-px-2 gtw-py-1.5 gtw-text-sm gtw-font-semibold gtw-text-foreground",
      inset && "gtw-pl-8",
      className
    )}
    {...props}
  />
))
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cn("gtw--mx-1 gtw-my-1 gtw-h-px gtw-bg-border", className)}
    {...props}
  />
))
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName

const ContextMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "gtw-ml-auto gtw-text-xs gtw-tracking-widest gtw-text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
ContextMenuShortcut.displayName = "ContextMenuShortcut"

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}
