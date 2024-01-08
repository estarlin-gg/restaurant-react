import { useEffect, useState } from "react";
import { Box } from "./Containers";
import { Button } from "./Elements";
import { OrderItems } from "./OrderItems";

export const Orders = ({ orders, hidden, newClass }) => {
  const [list, setList] = useState([]);
  // console.log(list);
  useEffect(() => {
    if (Object.keys(orders).length === 0) {
      return;
    } else {
      setList([...list, orders]);
    }
  }, [orders]);

  const vacio = <h2 className="text-xl m-auto mt-10  ">No hay ordenes </h2>;
  return (
    <Box
      classes={`bg-slate-50 p-2 absolute md:left-auto inset-0 md:inset-y-0  h-screen z-50 md:right-0  md:w-[600px]  ${newClass} `}
    >
      <div className="w-full border-solid border-0 border-b-2 border-b-orange-600 p-2 flex justify-between h-fit items-center ">
        <h2 className="font-bold text-2xl left">Ordenes</h2>
        <div className="close ">
          <Button
            classes=" hover:outline hover:outline-black  rounded-full  p-2   object-contain "
            onClick={(e) => hidden(e)}
          >
            <img src="../public/img/svg/bx-x.svg" className="w-full  " />
          </Button>
        </div>
      </div>
      <div className="order-content flex flex-col items-start  gap-2  ">
        {list.length === 0
          ? vacio
          : list.map((item, index) => {
              const { nombre, img, price, title, hora } = item;
              return (
                <OrderItems
                  key={index} // Se que es mala practica poner el index como key pero no halle otra cosa jejeje
                  nombre={nombre}
                  title={title}
                  img={img}
                  price={price}
                  hora={hora}
                />
              );
            })}
      </div>
    </Box>
  );
};
