import { useEffect, useState } from "react";
import { Box } from "./Containers";
import { Button } from "./Elements";

export const Orders = ({ orders, hidden }) => {
  const [list, setList] = useState([]);
  useEffect(() => {

      // setlist([...list,orders]);
      if (orders && Object.keys(orders).length > 0) {
        setList([...list,orders]); // Agregar el objeto orders a list
      }

  },[orders])
  
  console.log(list);

  const vacio = <h2 className="text-xl text-center">No hay ordenes </h2>;
  return (
    <Box classes="bg-slate-100 grid grid-cols-1 p-3 absolute left-0 right-0 bottom-0 top-0 h-screen z-50 sm:right-0 sm:w-400px sm:top-[70px]  ">
      <div className="w-full border-solid border-0 border-b-2 border-b-blue-500 p-4 flex justify-between h-fit items-center ">
        <h2 className="font-bold text-2xl left">Ordenes</h2>
        <div className="close">
          <Button
            classes=" hover:border hover:border-black rounded-full object-cover "
            onClick={(e) => hidden(e)}
          >
            <img src="../public/img/svg/bx-x.svg" className="object-cover  " />
          </Button>
        </div>
      </div>
      <div className="order-content ">
        {list.length === 0
          ? vacio
          : list.map((item) => {
              const { nombre, fecha, mesa } = item;
              return (
                <div className="w-full flex ">
                  <div className="img">
                    {/* <img src={} alt="" /> */}
                    <h2>{nombre}</h2>
                  </div>
                </div>
              );
            })}
      </div>
    </Box>
  );
};
