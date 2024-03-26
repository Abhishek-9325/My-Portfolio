import React from "react";

const Tab = ({ label, onClick, isActive }) => {
  return (
    <>
      <div
        className={`tab cursor-pointer text-semi min-w-[150px] flex items-center justify-center sm:block hover:bg-[#1a1443] bg:[#0D1224] px-6 py-3 rounded-full border bg-[#11152c] shadow-none shadow-gray-50 hover:border-violet-500 transition-all duration-500 ${
          isActive ? "active bg-[#1a1443] border-violet-500" : ""
        }`}
        onClick={onClick}
      >
        {label}
      </div>
    </>
  );
};

export default Tab;
