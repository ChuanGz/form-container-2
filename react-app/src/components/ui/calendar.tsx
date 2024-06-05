"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("gtw-p-3", className)}
      classNames={{
        months: "gtw-flex gtw-flex-col sm:gtw-flex-row gtw-space-y-4 sm:gtw-space-x-4 sm:gtw-space-y-0",
        month: "gtw-space-y-4",
        caption: "gtw-flex gtw-justify-center gtw-pt-1 gtw-relative gtw-items-center",
        caption_label: "gtw-text-sm gtw-font-medium",
        nav: "gtw-space-x-1 gtw-flex gtw-items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "gtw-h-7 gtw-w-7 gtw-bg-transparent gtw-p-0 gtw-opacity-50 hover:gtw-opacity-100"
        ),
        nav_button_previous: "gtw-absolute gtw-left-1",
        nav_button_next: "gtw-absolute gtw-right-1",
        table: "gtw-w-full gtw-border-collapse gtw-space-y-1",
        head_row: "gtw-flex",
        head_cell:
          "gtw-text-muted-foreground gtw-rounded-md gtw-w-9 gtw-font-normal gtw-text-[0.8rem]",
        row: "gtw-flex gtw-w-full gtw-mt-2",
        cell: "gtw-h-9 gtw-w-9 gtw-text-center gtw-text-sm gtw-p-0 gtw-relative [&:has([aria-selected].day-range-end)]:gtw-rounded-r-md [&:has([aria-selected].day-outside)]:gtw-bg-accent/50 [&:has([aria-selected])]:gtw-bg-accent first:[&:has([aria-selected])]:gtw-rounded-l-md last:[&:has([aria-selected])]:gtw-rounded-r-md focus-within:gtw-relative focus-within:gtw-z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "gtw-h-9 gtw-w-9 gtw-p-0 gtw-font-normal aria-selected:gtw-opacity-100"
        ),
        day_range_end: "gtw-day-range-end",
        day_selected:
          "gtw-bg-primary gtw-text-primary-foreground hover:gtw-bg-primary hover:gtw-text-primary-foreground focus:gtw-bg-primary focus:gtw-text-primary-foreground",
        day_today: "gtw-bg-accent gtw-text-accent-foreground",
        day_outside:
          "gtw-day-outside gtw-text-muted-foreground gtw-opacity-50 aria-selected:gtw-bg-accent/50 aria-selected:gtw-text-muted-foreground aria-selected:gtw-opacity-30",
        day_disabled: "gtw-text-muted-foreground gtw-opacity-50",
        day_range_middle:
          "aria-selected:gtw-bg-accent aria-selected:gtw-text-accent-foreground",
        day_hidden: "gtw-invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="gtw-h-4 gtw-w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="gtw-h-4 gtw-w-4" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
