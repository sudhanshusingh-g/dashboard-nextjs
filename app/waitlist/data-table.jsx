"use client";
import {
  useReactTable,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  SortingState,
  getSortedRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar as C } from "@/components/ui/calendar";
import { Calendar, Columns2, FilterIcon, Gift, User2Icon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function DataTable({ columns, data }) {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});
  const [schedule, setSchedule] = useState(true);
  const [people, setPeople] = useState(false);
  const [service, setService] = useState(false);
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();

  const table = useReactTable({
    data: data,
    columns: columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting: sorting,
      columnFilters: columnFilters,
      columnVisibility: columnVisibility,
      rowSelection: rowSelection,
    },
  });

  const handleScheduleClick = () => {
    setSchedule(true);
    setPeople(false);
    setService(false);
  };

  const handlePeopleClick = () => {
    setSchedule(false);
    setPeople(true);
    setService(false);
  };

  const handleServiceClick = () => {
    setSchedule(false);
    setPeople(false);
    setService(true);
  };

  return (
    <div>
      <h2 className=" font-bold text-3xl">Waitlist</h2>
      <div></div>
      <div className="flex justify-between gap-8 py-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              <FilterIcon size={16} />
              Add Filter
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-fit h-80">
            <div className="flex gap-2 h-full">
              <div className="bg-slate-100 h-full">
                <div
                  className={
                    schedule
                      ? `bg-slate-400 text-white rounded-sm flex gap-2 items-center p-2 cursor-pointer`
                      : `flex gap-2 items-center p-2 cursor-pointer`
                  }
                  onClick={handleScheduleClick}
                >
                  <Calendar size={14} /> Scheduled Date
                </div>
                <div
                  className={
                    people
                      ? `bg-slate-400 text-white rounded-sm flex gap-2 items-center p-2 cursor-pointer`
                      : `flex gap-2 items-center p-2 cursor-pointer`
                  }
                  onClick={handlePeopleClick}
                >
                  <User2Icon size={14} /> People
                </div>
                <div
                  className={
                    service
                      ? `bg-slate-400 text-white rounded-sm flex gap-2 items-center p-2 cursor-pointer`
                      : `flex gap-2 items-center p-2 cursor-pointer`
                  }
                  onClick={handleServiceClick}
                >
                  <Gift size={14} /> Services/Products
                </div>
              </div>
              <div>
                {schedule && (
                  <div>
                    <div>
                      <Label>Show orders for</Label>
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="All Time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All</SelectItem>
                          <SelectItem value="custom">Custom</SelectItem>
                          <SelectItem value="last30">Last 30 days</SelectItem>
                          <SelectItem value="thismonth">This month</SelectItem>
                          <SelectItem value="lastmonth">Last month</SelectItem>
                          <SelectItem value="quarter">This quarter</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <div className="flex flex-col mt-4 gap-1">
                        <Label>From</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-[280px] justify-start text-left font-normal",
                                !fromDate && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {fromDate ? (
                                format(fromDate, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <C
                              mode="single"
                              selected={fromDate}
                              onSelect={setFromDate}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>

                      <div className="flex flex-col mt-4 gap-1">
                        <Label>To</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-[280px] justify-start text-left font-normal",
                                !toDate && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {toDate ? (
                                format(toDate, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <C
                              mode="single"
                              selected={toDate}
                              onSelect={setToDate}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                  </div>
                )}
                {people && (
                  <div className="w-60">
                    <Input placeholder="Search Payer or attendee name" />
                  </div>
                )}
                {service && (
                  <div className="w-60">
                    <Input placeholder="Search service name" />
                  </div>
                )}
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <Input
          placeholder="Search client..."
          value={table.getColumn("email")?.getFilterValue() || ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="w-1/4"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              <Columns2 />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="flex items-center justify-end space-x-2 py-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DataTable;
