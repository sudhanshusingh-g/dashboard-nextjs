"use client";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
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

import { useState } from "react";



import { Calendar, Columns2, FilterIcon, Gift, User2Icon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import People from "@/components/Filters/People";
import Services from "@/components/Filters/Services";
import ScheduleDate from "@/components/Filters/ScheduleDate";

function DataTable({ columns, data }) {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});
  const [schedule, setSchedule] = useState(true);
  const [people, setPeople] = useState(false);
  const [service, setService] = useState(false);
  
  const [activeButton, setActiveButton] = useState("allWaitlist");
 

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

   const handleLeadClick = () => {
     setColumnFilters([{ id: "status", value: "Lead" }]);
     setActiveButton("lead");
   };
   const handleAllWaitlistClick = () => {
     setColumnFilters([]);
     setSorting([]);
     setActiveButton("allWaitlist");
   };

  const leadCount = data.filter((item) => item.status === "Lead").length;
  
  return (
    <div>
      <h2 className=" font-bold text-3xl">Waitlist</h2>
      <div className="flex flex-col lg:flex-row justify-between items-center my-4 gap-2">
        <Button
          variant={"ghost"}
          className={`border p-2 w-full rounded-sm font-medium ${
            activeButton === "allWaitlist" ? "border-black" : ""
          }`}
          onClick={handleAllWaitlistClick}
        >
          All Waitlist{" "}
          <span className="text-muted-foreground ml-2">{data.length}</span>
        </Button>
        <Button
          variant={"ghost"}
          className="border p-2 w-full rounded-sm font-medium"
        >
          Newly Added
          <span className="text-muted-foreground ml-2">3</span>
        </Button>
        <Button
          variant={"ghost"}
          className={`border p-2 w-full rounded-sm font-medium ${
            activeButton === "lead" ? "border-black" : ""
          }`}
          onClick={handleLeadClick}
        >
          Lead <span className="text-muted-foreground ml-2">{leadCount}</span>
        </Button>
      </div>
      <div className="flex justify-between gap-8 py-4">
        <Popover className="">
          <PopoverTrigger asChild>
            <Button variant="outline">
              <FilterIcon size={16} />
              Add Filter
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-fit ">
            <div className="flex gap-2 h-full">
              <div className="bg-slate-100 h-full">
                <div
                  className={
                    schedule
                      ? `bg-slate-300 text-slate-700 rounded-sm flex gap-4 items-center p-2 cursor-pointer`
                      : `flex gap-2 items-center p-2 cursor-pointer`
                  }
                  onClick={handleScheduleClick}
                >
                  <div className="flex items-center gap-1">
                    <Calendar size={14} /> Scheduled Date
                  </div>
                  <span className="font-medium text-muted-foreground">1</span>
                </div>
                <div
                  className={
                    people
                      ? `bg-slate-300 text-slate-700 rounded-sm flex gap-2 items-center p-2 cursor-pointer`
                      : `flex gap-2 items-center p-2 cursor-pointer`
                  }
                  onClick={handlePeopleClick}
                >
                  <User2Icon size={14} /> People
                </div>
                <div
                  className={
                    service
                      ? `bg-slate-300 text-slate-700 rounded-sm flex gap-2 items-center p-2 cursor-pointer`
                      : `flex gap-2 items-center p-2 cursor-pointer`
                  }
                  onClick={handleServiceClick}
                >
                  <Gift size={14} /> Services/Products
                </div>
              </div>
              <div>
                {schedule && <ScheduleDate />}

                {/* Filter for selecting payer or attendee */}
                {people && <People />}

                {/* Filter for selecting services or products */}

                {service && <Services />}
              </div>
            </div>
            <div className="flex items-center justify-end gap-2 mt-4">
              <Button variant={"outline"} size={"sm"}>
                Reset
              </Button>
              <Button size={"sm"}>Apply Filters</Button>
            </div>
          </PopoverContent>
        </Popover>

        <Input
          placeholder="Search client..."
          value={table.getColumn("email")?.getFilterValue() || ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="w-1/3"
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
