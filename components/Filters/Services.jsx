import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CircleX, Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Services() {
  const servicesList = [
    { id: 1, name: "National tennis Class", type: "Class", status: "Public" },
    {
      id: 2,
      name: "Exercise Session",
      type: "Appointment",
      status: "Private",
    },
    { id: 3, name: "Dog Care", type: "Facility", status: "Disabled" },
    { id: 4, name: "Swimming", type: "Membership", status: "Draft" },
    { id: 5, name: "Cricket Session", type: "Class Pack", status: "Public" },
    { id: 6, name: "Aerobics", type: "General Items", status: "Private" },
    { id: 7, name: "Yoga Class", type: "Class", status: "Public" },
    {
      id: 8,
      name: "Massage Therapy",
      type: "Appointment",
      status: "Private",
    },
    { id: 9, name: "Pet Grooming", type: "Facility", status: "Disabled" },
    { id: 10, name: "Gym Membership", type: "Membership", status: "Draft" },
    {
      id: 11,
      name: "Football Training",
      type: "Class Pack",
      status: "Public",
    },
    { id: 12, name: "Dance Class", type: "General Items", status: "Private" },
    { id: 13, name: "Pilates Class", type: "Class", status: "Public" },
    {
      id: 14,
      name: "Nutrition Consultation",
      type: "Appointment",
      status: "Private",
    },
    { id: 15, name: "Cat Boarding", type: "Facility", status: "Disabled" },
    { id: 16, name: "Pool Access", type: "Membership", status: "Draft" },
  ];
  const [cancelButton, setCancelButton] = useState(false);
  const [searchByName, setSearchByName] = useState(true);
  const [searchByTag, setSearchByTag] = useState(false);
  const [service, setService] = useState("");
  const [filteredServices, setFilteredServices] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);

  const handleChange = (value) => {
    if (value === "searchName") {
      setSearchByName(true);
      setSearchByTag(false);
    } else {
      setSearchByName(false);
      setSearchByTag(true);
    }
  };

  const handleSearchServices = (value) => {
    setService(value);
    setCancelButton(true);
    if (value.trim() === "") {
      setFilteredServices([]);
    } else {
      const filter = servicesList.filter((p) =>
        p.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      );
      setFilteredServices(filter.slice(0, 5));
    }
  };

  const handleSelectServices = (id) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((n) => n !== id) : [...prev, id]
    );
  };

  const displayNames =
    service.trim() === ""
      ? servicesList.filter((service) => selectedServices.includes(service.id))
      : filteredServices;

  return (
    <div className="">
      <RadioGroup
        defaultValue="searchName"
        onValueChange={(value) => handleChange(value)}
        className="flex justify-between m-4 gap-2"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value={"searchName"} id="option-one" />
          <Label>Search by name</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value={"searchTag"} id="option-two" />
          <Label>Search by tags</Label>
        </div>
      </RadioGroup>

      {searchByName && (
        <div>
          <div className="relative">
            <Search
              size={12}
              className="absolute top-[32%] left-1 text-slate-500"
            />
            <Input
              placeholder="Search service name"
              className="indent-2 outline-none w-[100%]"
              value={service}
              onChange={(e) => handleSearchServices(e.target.value)}
            />
            {cancelButton && (
              <CircleX
                size={12}
                className="absolute top-[34%] right-1 text-slate-500"
                onClick={() => {
                  setCancelButton(false);
                  setService("");
                }}
              />
            )}
          </div>
          <ul className="mt-2">
            {displayNames.map((service) => (
              <li key={service.id} className="flex items-center gap-2 p-1">
                <label className="custom-checkbox">
                  <Input
                    type="checkbox"
                    checked={selectedServices.includes(service.id)}
                    onChange={() => handleSelectServices(service.id)}
                    className="hidden"
                  />
                  <span
                    className={`checkbox-span w-4 h-4 block ${
                      selectedServices.includes(service.id)
                        ? "bg-black border-2 border-gray rounded-sm"
                        : "bg-white border-2 rounded-sm"
                    }`}
                  ></span>
                </label>
                <span>{service.name}</span>
                <span className="text-xs text-slate-500 bg-gray-100 p-1">
                  {service.type}
                </span>
                <span className="text-xs text-slate-500 bg-gray-100 p-1">
                  {service.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {searchByTag && (
        <div className="flex flex-col gap-4">
          {/* Placeholder for tag search */}
          <div className="flex flex-col gap-2">
            <Label>Service Type</Label>
            <Select>
              <SelectTrigger className="w-[100%]">
                <SelectValue placeholder="Select a service type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className="h-40 overflow-y-scroll">
                  <SelectLabel>Service Type</SelectLabel>
                  <SelectItem value="all">Show all service type</SelectItem>
                  <SelectItem value="class">Class</SelectItem>
                  <SelectItem value="appointment">Appointment</SelectItem>
                  <SelectItem value="facility">Facility</SelectItem>
                  <SelectItem value="class-pack">Class Pack</SelectItem>
                  <SelectItem value="membership">Membership</SelectItem>
                  <SelectItem value="general">General Items</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label>Status</Label>
            <Select>
              <SelectTrigger className="w-[100%]">
                <SelectValue placeholder="Select a status type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Status Type</SelectLabel>
                  <SelectItem value="all">Show All</SelectItem>
                  <SelectItem value="public">Public</SelectItem>
                  <SelectItem value="private">Private</SelectItem>
                  <SelectItem value="disable">Disable</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;
