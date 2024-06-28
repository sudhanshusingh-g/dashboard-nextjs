//Drawer Component
"use client";
import { MenuIcon } from "lucide-react";
import React, { useState } from "react";
import SidebarContent from "./SidebarContent";

function Drawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <MenuIcon
        className="w-10 h-8 cursor-pointer lg:hidden mt-4 hover:bg-slate-300"
        onClick={toggleDrawer}
      />
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex bg-gray-800 bg-opacity-75">
          <div className="w-64 bg-gray-100 p-4 flex flex-col justify-between">
            <SidebarContent isCollapsed={false} handleCollapse={toggleDrawer} />
          </div>
          <div className="flex-1" onClick={toggleDrawer}></div>
        </div>
      )}
    </>
  );
}

export default Drawer;
