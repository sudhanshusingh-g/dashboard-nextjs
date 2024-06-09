"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import { ArrowUpDown, Calendar, CircleDot, Dot, Hash, User } from "lucide-react";
export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "createdOn",
    header: ({ column }) => {
      return (
        <div className="flex items-center gap-1">
          <Calendar size={14} /> Created On
        </div>
      );
    },
    cell: ({ row }) => {
      const createdOn = row.getValue("createdOn");

      return <div>{createdOn}</div>;
    },
  },
  {
    accessorKey: "payer",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <User size={14} /> Payer
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <div className="flex items-center gap-1">
          <CircleDot size={14} /> Status
        </div>
      );
    },
    cell:({row})=>{
      const staus=row.getValue("status");
      let statusStyle="";

      switch (staus) {
        case "Lead":
          statusStyle =
            "text-center text-blue-500 bg-blue-50 flex items-center rounded-full font-semibold";
          break;
        case "Active":
          statusStyle =
            "text-center text-lime-600 bg-emerald-50 flex items-center rounded-full font-semibold";
          break;
        case "Inactive":
          statusStyle =
            "text-center text-slate-700 bg-slate-100 flex items-center rounded-full font-semibold";
          break;
        default:
          statusStyle =
            "text-center text-slate-700 bg-slate-200 flex items-center rounded-full font-semibold";
          break;
      }

      return <div className={statusStyle}><Dot/>{staus}</div>
    }
  },

  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <Hash size={14} /> Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },

  {
    accessorKey: "payerphone",
    header: ({ column }) => {
      return (
        <div className="flex items-center gap-1">
          <Hash size={14} /> Payer Phone
        </div>
      );
    },
  },
  {
    accessorKey: "services",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <Hash size={14} /> Services
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "scheduled",
    header: ({ column }) => {
      return (
        <div className="flex items-center gap-1">
          <Calendar size={14} /> Scheduled
        </div>
      );
    },
  },
];
