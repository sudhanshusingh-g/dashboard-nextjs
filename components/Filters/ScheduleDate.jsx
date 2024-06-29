import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarIcon} from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar as C } from "@/components/ui/calendar";
import { format } from "date-fns";
import { useState } from "react";

function ScheduleDate() {
    const [fromDate, setFromDate] = useState();
    const [toDate, setToDate] = useState();
  return (
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
      <div className="">
        <div className="flex flex-col mt-4 gap-1">
          <Label>From</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[180px] justify-start text-left font-normal",
                  !fromDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {fromDate ? format(fromDate, "PPP") : <span>Pick a date</span>}
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
                  "w-[180px] justify-start text-left font-normal",
                  !toDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {toDate ? format(toDate, "PPP") : <span>Pick a date</span>}
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
  );
}

export default ScheduleDate;
