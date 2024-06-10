"use client"
import Image from "next/image";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import Link from "next/link";
import {
  Inbox,
  SquareCheckBig,
  Calendar,
  Timer,
  SquareArrowOutUpRight,
} from "lucide-react";
import { useState } from "react";

function Sidebar() {
  const [isMinimized, setIsMinimized] = useState(false);
  const currentTime = new Date().toLocaleTimeString();

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div
      className={`h-[100vh] p-2 shadow-md bg-[#F8FAFC] flex flex-col justify-between ${
        isMinimized ? "w-16" : "w-64"
      }`}
    >
      <div className="flex flex-col gap-8">
        {/* Sidenav header */}
        <div className="flex items-center gap-4">
          <div className="flex gap-2 items-center">
            <Image src="assets/logo.svg" width={30} height={30} />
            {!isMinimized && <h2 className="font-bold text-lg">Front·Desk</h2>}
          </div>
          <TbLayoutSidebarLeftCollapseFilled
            size={20}
            className="cursor-pointer"
            onClick={handleMinimize}
          />
        </div>

        {/* Current timestamp */}
        {isMinimized ? (
          <></>
        ):(
<div className="flex items-center flex-col mt-4">
            <h2 className="text-xl">{currentTime.toUpperCase()}</h2>
          </div>
        )}

        {/* SideNav Menu */}
        <div className="flex flex-col gap-3">
          {!isMinimized && (
            <>
              <Link href="/orders" className="w-full" title="Orders">
                <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-white rounded-sm w-full">
                  {isMinimized ? (
                    
                      <Inbox size={20} />
                    
                  ) : (
                    <>
                      <Inbox size={20} />
                      <span>Orders</span>
                    </>
                  )}
                  
                </div>
              </Link>
              <Link
                href="/subscriptions"
                className="w-full"
                title="Subscriptions"
              >
                <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-white rounded-sm ">
                  <SquareCheckBig size={20} />
                  <span>Subscriptions</span>
                </div>
              </Link>
              <Link href="/calendar" className="w-full" title="Calendar">
                <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-white rounded-sm ">
                  <Calendar size={20} />
                  <span>Calendar</span>
                </div>
              </Link>
              <Link href="/waitlist" className="w-full" title="Waitlist">
                <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-white rounded-sm ">
                  <Timer size={20} />
                  <span>Waitlist</span>
                </div>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Logged user profile */}
      <div
        className={`flex items-center gap-2 ${
          isMinimized ? "justify-center" : "justify-start"
        }`}
      >
        {!isMinimized ? (
          <Image src="assets/logo.svg" width={24} height={24} />
        ) : (
          <Image src="assets/logo.svg" width={30} height={30} />
        )}
        {!isMinimized && (
          <span
            className="flex items-center gap-1 cursor-pointer"
            title="Dashboard"
          >
            Dashboard <SquareArrowOutUpRight size={16} />
          </span>
        )}
      </div>
    </div>
  );
}

export default Sidebar;

