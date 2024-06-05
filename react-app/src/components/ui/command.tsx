"use client"

import * as React from "react"
import { type DialogProps } from "@radix-ui/react-dialog"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "gtw-flex gtw-h-full gtw-w-full gtw-flex-col gtw-overflow-hidden gtw-rounded-md gtw-bg-popover gtw-text-popover-foreground",
      className
    )}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="gtw-overflow-hidden gtw-p-0 gtw-shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:gtw-px-2 [&_[cmdk-group-heading]]:gtw-font-medium [&_[cmdk-group-heading]]:gtw-text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:gtw-pt-0 [&_[cmdk-group]]:gtw-px-2 [&_[cmdk-input-wrapper]_svg]:gtw-h-5 [&_[cmdk-input-wrapper]_svg]:gtw-w-5 [&_[cmdk-input]]:gtw-h-12 [&_[cmdk-item]]:gtw-px-2 [&_[cmdk-item]]:gtw-py-3 [&_[cmdk-item]_svg]:gtw-h-5 [&_[cmdk-item]_svg]:gtw-w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="gtw-flex gtw-items-center gtw-border-b gtw-px-3" cmdk-input-wrapper="">
    <Search className="gtw-mr-2 gtw-h-4 gtw-w-4 gtw-shrink-0 gtw-opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "gtw-flex gtw-h-11 gtw-w-full gtw-rounded-md gtw-bg-transparent gtw-py-3 gtw-text-sm gtw-outline-none placeholder:gtw-text-muted-foreground disabled:gtw-cursor-not-allowed disabled:gtw-opacity-50",
        className
      )}
      {...props}
    />
  </div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("gtw-max-h-[300px] gtw-overflow-y-auto gtw-overflow-x-hidden", className)}
    {...props}
  />
))

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="gtw-py-6 gtw-text-center gtw-text-sm"
    {...props}
  />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "gtw-overflow-hidden gtw-p-1 gtw-text-foreground [&_[cmdk-group-heading]]:gtw-px-2 [&_[cmdk-group-heading]]:gtw-py-1.5 [&_[cmdk-group-heading]]:gtw-text-xs [&_[cmdk-group-heading]]:gtw-font-medium [&_[cmdk-group-heading]]:gtw-text-muted-foreground",
      className
    )}
    {...props}
  />
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("gtw--mx-1 gtw-h-px gtw-bg-border", className)}
    {...props}
  />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "gtw-relative gtw-flex gtw-cursor-default gtw-select-none gtw-items-center gtw-rounded-sm gtw-px-2 gtw-py-1.5 gtw-text-sm gtw-outline-none data-[disabled=true]:gtw-pointer-events-none data-[selected=true]:gtw-bg-accent data-[selected=true]:gtw-text-accent-foreground data-[disabled=true]:gtw-opacity-50",
      className
    )}
    {...props}
  />
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({
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
CommandShortcut.displayName = "CommandShortcut"

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
