import React from "react";

const Pill = ({ icon, text }) => {
  return (
    <span className="px-2 py-1 rounded-full bg-[#455a641c] text-sm flex justify-center items-center">
      {icon} {text}
    </span>
  );
};
const NoIconPill = ({ text }) => {
  return (
    <span className="p-2 rounded-full bg-[#455a641c] text-sm flex justify-center items-center">
      <span className="text-[#2E7D32] font-bold"> £ {text}</span>
    </span>
  );
};

export { Pill, NoIconPill };
