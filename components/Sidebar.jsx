"use client";
import {
  ArrowLeftRight,
  Calendar,
  ChevronDown,
  CircleHelp,
  CreditCard,
  Globe,
  Hourglass,
  Inbox,
  Layout,
  MenuIcon,
  PanelLeft,
  SquareArrowOutUpRight,
  Timer,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Sidebar = () => {
  const path = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`h-screen bg-gray-100 p-2 lg:p-4 flex flex-col justify-between ${
        isCollapsed ? "lg:w-20" : "lg:w-56"
      }`}
    >
      <h2 className="mb-6 flex items-center justify-between gap-4">
        <Image src={"/assets/logo.svg"} width={32} height={32} />
        <PanelLeft
          size={24}
          className="cursor-pointer"
          onClick={handleCollapse}
          style={{ minWidth: "24px", minHeight: "24px" }}
        />
      </h2>

      <div className="shadow p-2 bg-white flex items-center justify-between rounded">
        {!isCollapsed && <span>Location</span>}
        <ArrowLeftRight size={16} />
      </div>

      <div className={`flex flex-col mt-2 shadow p-2 rounded`}>
        <div
          className={`flex items-center justify-between ${
            isCollapsed ? "hidden" : ""
          }`}
        >
          <span className="text-xl font-medium">08:30 AM</span>{" "}
          <span className="text-xs">Tue 20 Jan</span>
        </div>
        <div className="flex items-center justify-between">
          <div className=" flex items-center gap-2">
            <Globe size={14} />
            <span className={`text-xs ${isCollapsed ? "hidden" : ""}`}>
              UTC: +5 hours
            </span>
          </div>
          <ChevronDown
            size={14}
            className={`text-muted-foreground ${isCollapsed ? "hidden" : ""}`}
          />
        </div>
      </div>
      <ul className="">
        <NavItem href="/orders" icon={<Inbox size={16} />} text="Orders" />
        <NavItem
          href="/calendar"
          icon={<Calendar size={16} />}
          text="Calendar"
        />
        <NavItem
          href="/subscriptions"
          icon={<CreditCard size={16} />}
          text="Subscriptions"
        />
        <NavItem
          href="/waitlist"
          icon={<Hourglass size={16} />}
          text="WaitList"
        />
      </ul>
      <div className={``}>
        <NavItem
          href={"/"}
          text={` ${isCollapsed ? "hidden" : ""}Dashboard`}
          icon={
            <SquareArrowOutUpRight
              size={16}
              className="text-muted-foreground"
            />
          }
        />
      </div>
      <div
        className={`flex items-center gap-1 justify-between bg-white p-2 shadow rounded`}
      >
        <Image src={"/assets/admin.png"} width={24} height={24} />
        <div
          className={`flex flex-col text-xs  ${isCollapsed ? "hidden" : ""}`}
        >
          <span className="font-medium">Admin name</span>
          <span className="text-muted-foreground">adminname@mail.com</span>
        </div>
        <ChevronDown size={16} />
      </div>
      <div className={` flex items-center gap-2 `}>
        <CircleHelp size={12} />
        <div
          className={`flex flex-col text-xs  ${isCollapsed ? "hidden" : ""}`}
        >
          <span>Help Center</span>
          <span className="text-muted-foreground">@2024 Omnify.Inc. </span>
        </div>
      </div>
    </div>
  );

  function NavItem({ href, icon, text }) {
    const isActive = path === href;

    return (
      <Link href={href}>
        <li
          className={`mb-4 hover:bg-gray-300 p-2 rounded-sm flex items-center gap-2 ${
            isActive ? "bg-white text-black shadow" : ""
          }`}
        >
          {icon}
          <span className={`hidden lg:block ${isCollapsed ? "lg:hidden" : ""}`}>
            {text}
          </span>
        </li>
      </Link>
    );
  }
};

export default Sidebar;
