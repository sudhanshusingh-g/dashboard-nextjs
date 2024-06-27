import * as React from "react"

import { cn } from "@/lib/utils"
import { useState, useEffect } from "react";


const Table = React.forwardRef(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-x-scroll">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props} />
  </div>
))
Table.displayName = "Table"

const TableHeader = React.forwardRef(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
))
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props} />
))
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className)}
    {...props} />
))
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    )}
    {...props} />
))
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef(({ className, ...props }, ref) => {
  const [animate, setAnimate] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 200); 

    return () => clearTimeout(timer);
  }, []);
  return (
    <th
      ref={ref}
      className={cn(
        "h-8 px-4 text-left whitespace-nowrap overflow-hidden align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
        { "animate-bounce": animate },
        className
      )}
      {...props}
    />
  );
});

TableHead.displayName = "TableHead"

const TableCell = React.forwardRef(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "whitespace-nowrap overflow-hidden p-4 align-middle [&:has([role=checkbox])]:pr-0 ",
      className
    )}
    {...props}
  />
));
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-xs text-muted-foreground", className)}
    {...props} />
))
TableCaption.displayName = "TableCaption"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
