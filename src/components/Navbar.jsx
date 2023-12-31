import "../App.css";
import { useState } from "react";
import { Orders } from "./Orders";

export const Navbar = ({ list }) => {
  const [view, setView] = useState(false);
  const [orders, setOrders] = useState(false);
  const handleOrders = () => {
    setOrders((e) => !e);
  };
  // console.log(list);
  let newClassMenu = view ? "translate-x-0" : "translate-x-full";
  let newClassOrder = orders ? "translate-x-0" : "translate-x-full";
  const handleMenu = () => {
    setView((e) => !e);
  };
  return (
    <>
      <div className="burguer block z-40 md:hidden ">
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
        className={`flex ${newClassMenu} transition-all ease-linear gap-6 fixed inset-0 bg-yellow-400 h-screen flex-col items-center py-16  md:flex-row md:relative md:h-fit md:p-0 md:bg-white md:text-black md:translate-x-0 `}
      >
        <a
          href="#"
          className="text-white text-2xl hover:scale-110 md:text-black "
        >
          Inicio
        </a>
        <a
          href="#"
          onClick={handleOrders}
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
        <img src="/img/svg/dish.png" alt="" width={44} onClick={handleOrders} />
      </div>
      <Orders orders={list} hidden={handleOrders} newClass={newClassOrder} />
    </>
  );
};
