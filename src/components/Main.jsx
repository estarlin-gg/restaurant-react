import React from "react";
import "../App.css";

import { Box } from "./Containers";
import { Button, Text, Title } from "./Elements";

export const Main = () => {
  return (
    <main className="grid md:grid-cols-2 md:p-1 md:px-8  place-items-center h-screen md:h-[70vh] md:bg-[url('../public/fondo.jpg')] bg-black bg-blend-multiply bg-opacity-30 bg-no-repeat bg-cover bg-[url('../public/hero-mobile.jpg')]   ">
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
          classes="mt-4"
          bgColor="bg-orange-600"
          color="text-white"
        />
      </Box>
      <Box classes="hidden md:block w-fit ">
        <img src="/img/hero-img.png" alt=""  className="md:w-full h-full " />
      </Box>
    </main>
  );
};
