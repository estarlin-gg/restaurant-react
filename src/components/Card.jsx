import React, { useState } from "react";
import { Button } from "./Elements";

export const Card = ({ img, title, price, Orden }) => {
  const handleClick = () => {
    Orden({ img, title, price });
  };

  return (
    <div className="card  grid   rounded-2xl ">
      <div className="card-img bg-gray-200  p-8 grid place-items rounded-2xl aspect-square">
        <img src={img} alt="" className="w-full object-contain h-full " />
      </div>
      <div className="card-body w-full flex justify-between p-2">
        <h2 className="text-xl text-gray-700">{title}</h2>
        <span className="font-bold text-2xl">{price}</span>
      </div>
      <div className="card-footer w-full ">
        <Button
          text="Ordenar"
          bgColor="bg-black"
          color="text-white"
          padding="2"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
