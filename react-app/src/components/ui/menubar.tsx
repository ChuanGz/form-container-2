"use client"

import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const MenubarMenu = MenubarPrimitive.Menu

const MenubarGroup = MenubarPrimitive.Group

const MenubarPortal = MenubarPrimitive.Portal

const MenubarSub = MenubarPrimitive.Sub

const MenubarRadioGroup = MenubarPrimitive.RadioGroup

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      "gtw-flex gtw-h-10 gtw-items-center gtw-space-x-1 gtw-rounded-md gtw-border gtw-bg-background gtw-p-1",
      className
    )}
    {...props}
  />
))
Menubar.displayName = MenubarPrimitive.Root.displayName

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "gtw-flex gtw-cursor-default gtw-select-none gtw-items-center gtw-rounded-sm gtw-px-3 gtw-py-1.5 gtw-text-sm gtw-font-medium gtw-outline-none focus:gtw-bg-accent focus:gtw-text-accent-foreground data-[state=open]:gtw-bg-accent data-[state=open]:gtw-text-accent-foreground",
      className
    )}
    {...props}
  />
))
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
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
  </MenubarPrimitive.SubTrigger>
))
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "gtw-z-50 gtw-min-w-[8rem] gtw-overflow-hidden gtw-rounded-md gtw-border gtw-bg-popover gtw-p-1 gtw-text-popover-foreground data-[state=open]:gtw-animate-in data-[state=closed]:gtw-animate-out data-[state=closed]:gtw-fade-out-0 data-[state=open]:gtw-fade-in-0 data-[state=closed]:gtw-zoom-out-95 data-[state=open]:gtw-zoom-in-95 data-[side=bottom]:gtw-slide-in-from-top-2 data-[side=left]:gtw-slide-in-from-right-2 data-[side=right]:gtw-slide-in-from-left-2 data-[side=top]:gtw-slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
  (
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
    ref
  ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "gtw-z-50 gtw-min-w-[12rem] gtw-overflow-hidden gtw-rounded-md gtw-border gtw-bg-popover gtw-p-1 gtw-text-popover-foreground gtw-shadow-md data-[state=open]:gtw-animate-in data-[state=closed]:gtw-fade-out-0 data-[state=open]:gtw-fade-in-0 data-[state=closed]:gtw-zoom-out-95 data-[state=open]:gtw-zoom-in-95 data-[side=bottom]:gtw-slide-in-from-top-2 data-[side=left]:gtw-slide-in-from-right-2 data-[side=right]:gtw-slide-in-from-left-2 data-[side=top]:gtw-slide-in-from-bottom-2",
          className
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  )
)
MenubarContent.displayName = MenubarPrimitive.Content.displayName

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "gtw-relative gtw-flex gtw-cursor-default gtw-select-none gtw-items-center gtw-rounded-sm gtw-px-2 gtw-py-1.5 gtw-text-sm gtw-outline-none focus:gtw-bg-accent focus:gtw-text-accent-foreground data-[disabled]:gtw-pointer-events-none data-[disabled]:gtw-opacity-50",
      inset && "gtw-pl-8",
      className
    )}
    {...props}
  />
))
MenubarItem.displayName = MenubarPrimitive.Item.displayName

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "gtw-relative gtw-flex gtw-cursor-default gtw-select-none gtw-items-center gtw-rounded-sm gtw-py-1.5 gtw-pl-8 gtw-pr-2 gtw-text-sm gtw-outline-none focus:gtw-bg-accent focus:gtw-text-accent-foreground data-[disabled]:gtw-pointer-events-none data-[disabled]:gtw-opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="gtw-absolute gtw-left-2 gtw-flex gtw-h-3.5 gtw-w-3.5 gtw-items-center gtw-justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="gtw-h-4 gtw-w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
))
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "gtw-relative gtw-flex gtw-cursor-default gtw-select-none gtw-items-center gtw-rounded-sm gtw-py-1.5 gtw-pl-8 gtw-pr-2 gtw-text-sm gtw-outline-none focus:gtw-bg-accent focus:gtw-text-accent-foreground data-[disabled]:gtw-pointer-events-none data-[disabled]:gtw-opacity-50",
      className
    )}
    {...props}
  >
    <span className="gtw-absolute gtw-left-2 gtw-flex gtw-h-3.5 gtw-w-3.5 gtw-items-center gtw-justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="gtw-h-2 gtw-w-2 gtw-fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
))
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(
      "gtw-px-2 gtw-py-1.5 gtw-text-sm gtw-font-semibold",
      inset && "gtw-pl-8",
      className
    )}
    {...props}
  />
))
MenubarLabel.displayName = MenubarPrimitive.Label.displayName

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn("gtw--mx-1 gtw-my-1 gtw-h-px gtw-bg-muted", className)}
    {...props}
  />
))
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName

const MenubarShortcut = ({
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
MenubarShortcut.displayname = "MenubarShortcut"

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
}
