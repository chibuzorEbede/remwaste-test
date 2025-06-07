import React from "react";
import { IoIosWarning } from "react-icons/io";

const Pill = ({ icon, text }) => {
  return (
    <span className="px-2 py-1 rounded-full bg-[#455a641c] text-sm flex justify-center items-center gap-2">
      {icon} {text}
    </span>
  );
};
const NoIconPill = ({ text }) => {
  return (
    <span className="p-2 rounded-full bg-[#455a641c] text-sm flex justify-center items-center ">
      <span className="text-[#2E7D32] font-bold"> £ {text}</span>
    </span>
  );
};
const WarningPill = ({ text }) => {
  return (
    <span className="px-2 py-1 rounded-full bg-[#455a641c] text-sm flex justify-center items-center gap-2">
      <IoIosWarning /> {text}
    </span>
  );
};

export { Pill, NoIconPill, WarningPill };
