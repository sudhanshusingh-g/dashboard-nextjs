import Image from "next/image";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import Link from "next/link";
import { Calendar, Inbox, SquareArrowOutUpRight, SquareCheckBig, Timer } from "lucide-react";
function Sidebar() {
    const currentTime=new Date().toLocaleTimeString();
  return (
    <div className="h-[100vh] p-2 shadow-md bg-[#F8FAFC] flex flex-col justify-between">
      <div className=" flex flex-col gap-8">
        {/* Sidenav header */}
        <div className="flex items-center gap-4">
          <div className="flex gap-2 items-center">
            <Image src="assets/logo.svg" width={30} height={30} />
            <h2 className="font-bold text-lg">Front·Desk</h2>
          </div>
          <TbLayoutSidebarLeftCollapseFilled
            size={20}
            className="cursor-pointer"
          />
        </div>

        {/* Current timestamp */}
        <div className="flex items-center flex-col mt-4">
          <h2 className="text-xl">{currentTime.toUpperCase()}</h2>
        </div>

        {/* SideNav Menu */}
        <div className="flex flex-col gap-3">
          <Link href="/orders" className="w-full">
            <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-white rounded-sm  w-full">
              <Inbox />
              <span>Orders</span>
            </div>
          </Link>
          <Link href="/subscriptions" className="w-full">
            <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-white rounded-sm ">
              <SquareCheckBig />
              <span>Subscriptions</span>
            </div>
          </Link>
          <Link href="/calendar" className="w-full">
            <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-white rounded-sm ">
              <Calendar />
              <span>Calendar</span>
            </div>
          </Link>
          <Link href="/waitlist" className="w-full">
            <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-white rounded-sm ">
              <Timer />
              <span>Waitlist</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Looged user profile */}
      <div className="flex items-center gap-2">
        <Image src="assets/logo.svg" width={24} height={24} />
        <span className="flex items-center gap-1 cursor-pointer">
          Dashboard <SquareArrowOutUpRight size={16} />
        </span>
      </div>
    </div>
  );
}

export default Sidebar;
