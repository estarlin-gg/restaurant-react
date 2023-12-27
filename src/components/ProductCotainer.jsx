import { useState } from "react";
import { Card } from "./Card";
import { Box } from "./Containers";
import { products } from "./products";
import { Modal } from "./Modal";

export const ProductContainer = () => {
  const [servicio, setServicio] = useState({});
  const [modal, setModal] = useState(false);
  const viewModal = (e) => {
    setModal(e);
  };
  const handleOrder = (data) => {
    setServicio(data);
    setModal(true);
  };
  const reserva = (e) => {
       
  }

  // console.log(pedido);

  return (
    <section className="w-full ">
      {modal && <Modal info={servicio} modal={viewModal} reserva={reserva} />}
      <Box classes="p-4">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Platos
        </h2>
      </Box>
      <Box classes="grid p-4 grid-cols-1 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4  gap-4 gap-y-8 lg:gap-x-8">
        {products.map((product) => {
          const { name, image, price, id } = product;
          return (
            <Card
              key={id}
              title={name}
              img={image}
              price={`$${price}`}
              Orden={handleOrder}
            />
          );
        })}
      </Box>
    </section>
  );
};
