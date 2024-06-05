"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "gtw-flex gtw-h-10 gtw-w-full gtw-items-center gtw-justify-between gtw-rounded-md gtw-border gtw-border-input gtw-bg-background gtw-px-3 gtw-py-2 gtw-text-sm gtw-ring-offset-background placeholder:gtw-text-muted-foreground focus:gtw-outline-none focus:gtw-ring-2 focus:gtw-ring-ring focus:gtw-ring-offset-2 disabled:gtw-cursor-not-allowed disabled:gtw-opacity-50 [&>span]:gtw-line-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="gtw-h-4 gtw-w-4 gtw-opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "gtw-flex gtw-cursor-default gtw-items-center gtw-justify-center gtw-py-1",
      className
    )}
    {...props}
  >
    <ChevronUp className="gtw-h-4 gtw-w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "gtw-flex gtw-cursor-default gtw-items-center gtw-justify-center gtw-py-1",
      className
    )}
    {...props}
  >
    <ChevronDown className="gtw-h-4 gtw-w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "gtw-relative gtw-z-50 gtw-max-h-96 gtw-min-w-[8rem] gtw-overflow-hidden gtw-rounded-md gtw-border gtw-bg-popover gtw-text-popover-foreground gtw-shadow-md data-[state=open]:gtw-animate-in data-[state=closed]:gtw-animate-out data-[state=closed]:gtw-fade-out-0 data-[state=open]:gtw-fade-in-0 data-[state=closed]:gtw-zoom-out-95 data-[state=open]:gtw-zoom-in-95 data-[side=bottom]:gtw-slide-in-from-top-2 data-[side=left]:gtw-slide-in-from-right-2 data-[side=right]:gtw-slide-in-from-left-2 data-[side=top]:gtw-slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:gtw-translate-y-1 data-[side=left]:gtw--translate-x-1 data-[side=right]:gtw-translate-x-1 data-[side=top]:gtw--translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "gtw-p-1",
          position === "popper" &&
            "gtw-h-[var(--radix-select-trigger-height)] gtw-w-full gtw-min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("gtw-py-1.5 gtw-pl-8 gtw-pr-2 gtw-text-sm gtw-font-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "gtw-relative gtw-flex gtw-w-full gtw-cursor-default gtw-select-none gtw-items-center gtw-rounded-sm gtw-py-1.5 gtw-pl-8 gtw-pr-2 gtw-text-sm gtw-outline-none focus:gtw-bg-accent focus:gtw-text-accent-foreground data-[disabled]:gtw-pointer-events-none data-[disabled]:gtw-opacity-50",
      className
    )}
    {...props}
  >
    <span className="gtw-absolute gtw-left-2 gtw-flex gtw-h-3.5 gtw-w-3.5 gtw-items-center gtw-justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="gtw-h-4 gtw-w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("gtw--mx-1 gtw-my-1 gtw-h-px gtw-bg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
