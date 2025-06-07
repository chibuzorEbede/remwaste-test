import React from "react";
import { Pill, NoIconPill } from "./pill";
import Button from "./button";
import { getBodyText } from "../utils";

const Card = ({ skipItem }) => {
  //destructure the item contents
  const { size, hire_period_days, price_before_vat, allowed_on_road } =
    skipItem;
  return (
    //fill in the variables for each skip item
    <aside className="shadow-sm rounded-bl-md rounded-br-md  transition-all cursor-pointer">
      <div>
        <img
          src="/4-yarder-skip.jpg"
          alt="card header image"
          className="rounded-tl-md rounded-tr-md w-full"
        />
      </div>
      <div className="p-4">
        <div className="flex gap-3">
          <Pill text={`${size} yard skip`} />
          <Pill text={`${hire_period_days}-day hire`} />
          <NoIconPill text={`${price_before_vat}`} />
        </div>
        <div className="pt-2">
          {allowed_on_road ? (
            <Pill text={`Allowed on the road`} />
          ) : (
            <Pill text={`Not allowed on road`} />
          )}
        </div>
        <p className="text-[#263238] pt-2">{getBodyText(size)}</p>
      </div>
      <div className="flex justify-end pr-3 pb-3 ">
        <Button text={`select`} skipData={skipItem} />
      </div>
    </aside>
  );
};

export default Card;
