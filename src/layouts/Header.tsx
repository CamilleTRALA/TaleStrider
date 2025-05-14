import React from "react";
import { type FC } from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const Header: FC = () => {
  return (
    <header className="w-full flex flex-row justify-between items-center  bg-white  top-0 ">
      <div className="flex items-center gap-2">
        <span className="text-xl font-semibold">TaleStrider</span>
      </div>

      <div className="w-auto flex items-center gap-4 text-xl">
        <IoMdSettings />
        <FaBell />
        <FaUserCircle />
      </div>
    </header>
  );
};

export default Header;
