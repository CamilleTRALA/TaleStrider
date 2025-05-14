import React from "react";
import useSidebarStore from "../stores/useSidebarStore";
import { FaWalking, FaBars } from "react-icons/fa";
import { PiTreasureChest } from "react-icons/pi";

interface NavItemProps {
  icon: string | React.ReactNode;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label }) => (
  <div className="px-4 py-2 flex items-center cursor-pointer">
    <span className="text-lg">{icon}</span>
    <span className="ml-4">{label}</span>
  </div>
);

const Sidebar: React.FC = () => {
  const { isOpen, toggle } = useSidebarStore();

  return (
    <div
      className={`absolute left-0 top-0 z-10 transition-all duration-200 text-black h-screen overflow-hidden  ${
        isOpen ? "w-12" : "w-40"
      } flex flex-col`}
    >
      <button className="p-4 flex items-center border-none " onClick={toggle}>
        <FaBars />
      </button>

      <div className="flex-1">
        <NavItem icon={<FaWalking />} label="Scavenge" />
        <NavItem icon={<PiTreasureChest />} label="Inventory" />
      </div>
    </div>
  );
};

export default Sidebar;
