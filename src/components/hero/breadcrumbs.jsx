import React from "react";

const Breadcrumbs = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-2 justify-between font-medium">
        <li className="capitalize text-[#263238] cursor-pointer">postcode</li>
        <li className="capitalize text-[#263238] cursor-pointer">waste type</li>
        <li className="capitalize text-[#2E7D32] opacity-70 cursor-pointer">
          select skip
        </li>
        <li className="capitalize text-[#263238] opacity-50 cursor-pointer">
          permit
        </li>
        <li className="capitalize text-[#263238] opacity-50 cursor-pointer">
          date
        </li>
        <li className="capitalize text-[#263238] opacity-50 cursor-pointer">
          payment
        </li>
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
