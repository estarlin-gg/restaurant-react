import { Box } from "./Containers";

export const Orders = ({ data }) => {
  const mensaje = "<h2>No hay ordenes </h2>";
  return (
    <Box classes="  bg-slate-100 flex flex-col h-screen absolute top-[70px] inset-0 sm:right-0 sm:w-[400px] ">
      <div className=" border-solid border-0 border-b-2 border-b-blue-500 p-4 ">
        <h2 className="font-bold text-2xl left">Ordenes</h2>
      </div>
      <div className="order-content">
        <h2>sweet</h2>
        {/* {data.lenght === 0 ? mensaje : (data.map(data => 
            )) } */}
      </div>
    </Box>
  );
};
