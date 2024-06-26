"use client"
import {
  Calendar,
  CreditCard,
  Layout,
  MenuIcon,
  Timer,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const path = usePathname();

  return (
    <div className="h-screen bg-gray-100  lg:w-42 p-2 lg:p-4">
      <h2 className="mb-6 flex items-center justify-between gap-4">
        <Image src={"/assets/logo.svg"} width={32} height={32} />
        <MenuIcon className="lg:hidden" />
      </h2>
      <ul>
        <NavItem href="/" icon={<Layout size={16} />} text="Dashboard" />
        <NavItem href="/orders" icon={<Truck size={16} />} text="Orders" />
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
        <NavItem href="/waitlist" icon={<Timer size={16} />} text="WaitList" />
      </ul>
    </div>
  );

  function NavItem({ href, icon, text }) {
    const isActive = path === href;

    return (
      <Link href={href}>
        <li
          className={`mb-4 hover:bg-gray-300 p-2 rounded-sm flex items-center gap-2 ${
            isActive ? "bg-slate-500 text-white" : ""
          }`}
        >
          {icon}
          <span className="hidden lg:block">{text}</span>
        </li>
      </Link>
    );
  }
};

export default Sidebar;
