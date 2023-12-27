import "../App.css";
import { useState } from "react";
// import { Modal } from "./Modal";

export const Navbar = () => {
  const [view, setView] = useState(false);
  let newClass = view ? "translate-x-0" : "translate-x-full";
  const handleMenu = () => {
    setView((e) => !e);
  };
  return (
    <>
      <div className="burguer block z-50 md:hidden ">
        <img
          src="/img/svg/bx-menu.svg"
          className="cursor-pointer"
          width={50}
          alt=""
          onClick={handleMenu}
        />
      </div>

      <div className="logo">
        <img src="/img/logo.png" width={90} height="100%" />
      </div>
      <nav
        className={`flex ${newClass} transition-all ease-linear gap-6 fixed inset-0 bg-yellow-400 h-screen flex-col items-center py-16  md:flex-row md:relative md:h-fit md:p-0 md:bg-white md:text-black md:translate-x-0 `}
      >
        <a
          href="#"
          className="text-white text-2xl hover:scale-110 md:text-black "
        >
          Inicio
        </a>
        <a
          href="#"
          className="text-white text-2xl hover:scale-110 md:text-black "
        >
          Ordenes
        </a>
        <a
          href="#"
          className="text-white text-2xl hover:scale-110 md:text-black "
        >
          Menu
        </a>
        <a
          href="#"
          className="text-white text-2xl hover:scale-110 md:text-black "
        >
          Log In
        </a>
      </nav>

      <div className="menu block md:hidden cursor-pointer">
        <img src="/img/svg/dish.png" alt="" width={44} />
      </div>
      {/* <Modal /> */}
    </>
  );
};
