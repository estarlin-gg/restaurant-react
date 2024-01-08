import React from "react";
import "../App.css";

import { Box } from "./Containers";
import { Button, Text, Title } from "./Elements";

export const Main = () => {
  return (
    <main className="grid lg:grid-cols-2 md:py-6 md:px-8  place-items-center h-screen md:h-fit lg:h-[60vh] lg:bg-[url('../public/fondo.jpg')] bg-black bg-blend-multiply bg-opacity-30 bg-no-repeat bg-cover bg-[url('../public/hero-mobile.jpg')]  md:mt-[70px] mb-30   ">
      <Box classes=" sm:pl-8  p-0 px-2 flex flex-col items-center gap-3 md:items-start ">
        <Title
          classes="text-4xl font-extrabold capitalize text-center md:text-left text-white"
          text="Pide Lo que Quieras!"
        />

        <Text classes="text-2xl  text-center leading-normal md:text-left text-white text-stone-200 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse enim
          molestias ipsa.
        </Text>
        <Button
          text="Get started"
          classes="mt-4 p-4 bg-orange-600 text-white rounded-xl"
        />
      </Box>
      <Box classes="hidden md:block w-fit ">
        <img src="/img/hero-img.png" alt="" className="md:w-full h-full " style={{maxWidth: "500px", minWidth:"200px"}}  />
      </Box>
    </main>
  );
};
