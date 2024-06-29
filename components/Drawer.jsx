//Drawer Component
"use client";
import { MenuIcon } from "lucide-react";
import React, { useState } from "react";
import SidebarContent from "./SidebarContent";
import { Button } from "./ui/button";

function Drawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <Button
        variant={"ghost"}
        className=" cursor-pointer lg:hidden mt-4"
      >
        <MenuIcon className="" onClick={toggleDrawer} />
      </Button>
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
