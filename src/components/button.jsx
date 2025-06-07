import React from "react";

const Button = ({ text, skipData }) => {
  //add to cart functionality
  // onClick={() => console.log(skipData)}
  return (
    <button className="px-4 py-2 capitalize bg-[#2E7D32] text-white rounded-full hover:cursor cursor-pointer">
      {text}
    </button>
  );
};

export default Button;
