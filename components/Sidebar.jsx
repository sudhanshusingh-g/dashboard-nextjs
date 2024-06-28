// Sidebar Component
"use client";
import SidebarContent from "./SidebarContent";
import { useState } from "react";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`hidden lg:block h-screen bg-gray-100 p-2 lg:p-4 flex flex-col justify-between ${
        isCollapsed ? "lg:w-20" : "lg:w-56"
      }`}
    >
      <SidebarContent
        isCollapsed={isCollapsed}
        handleCollapse={handleCollapse}
      />
    </div>
  );
};

export default Sidebar;
