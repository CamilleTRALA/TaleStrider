import React from "react";
import useSidebarStore from "../stores/useSidebarStore";
import { FaWalking, FaBars } from "react-icons/fa";
import { PiTreasureChest } from "react-icons/pi";

interface NavItemProps {
  icon: string | React.ReactNode;
  label: string;
  isOpen: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isOpen }) => (
  <div className="p-4 flex items-center cursor-pointer">
    <span className="text-lg">{icon}</span>
    {!isOpen && <span className="ml-4">{label}</span>}
  </div>
);

const Sidebar: React.FC = () => {
  const { isOpen, toggle } = useSidebarStore();

  return (
    <div
      className={`transition-all duration-200 text-black left-0 h-screen  ${
        isOpen ? "w-20" : "w-64"
      } flex flex-col`}
    >
      <button className="p-4 flex items-center border-none " onClick={toggle}>
        <FaBars />
      </button>

      <div className="flex-1">
        <NavItem icon={<FaWalking />} label="Scavenge" isOpen={isOpen} />
        <NavItem icon={<PiTreasureChest />} label="Inventory" isOpen={isOpen} />
      </div>
    </div>
  );
};

export default Sidebar;
