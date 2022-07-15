import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-[400px] bg-[#8eedd6] flex flex-col">
      <div className="flex items-center justify-center my-5">
        <img className="mr-3 h-[50px] w-[50px] rounded-full" src="logo.png" />
        <div className="text-xl font-bold text-gray-600">Company Logo</div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center my-1">
          <NavLink
            className={
              "bg-[#d8f5f9] p-2 shadow rounded-lg w-[100px] text-center text-lg text-gray-600 hover:bg-teal-400 hover:text-[#d8f5f9]"
            }
            to={"/"}
          >
            Home
          </NavLink>
        </div>
        <div className="flex justify-center my-1">
          <NavLink
            className={
              "bg-[#d8f5f9] p-2 shadow rounded-lg w-[100px] text-center text-lg text-gray-600 hover:bg-teal-400 hover:text-[#d8f5f9]"
            }
            to={"add"}
          >
            Add
          </NavLink>
        </div>
      </div>
    </div>
  );
}
