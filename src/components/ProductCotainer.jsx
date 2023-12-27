import { useState } from "react";
import { Card } from "./Card";
import { Box } from "./Containers";
import { products } from "./products";
import { Modal } from "./Modal";

export const ProductContainer = () => {
  const [pedido, setPedido] = useState({});
  const [modal, setModal] = useState(false);
  const viewModal = (e) => {
    setModal(e);
  };
  const handleOrder = (data) => {
    setPedido(data);
    setModal(true);
  };
  // console.log(pedido);

  return (
    <section className="w-full ">
      {/* <Modal info={pedido} /> */}
      {modal && <Modal info={pedido} modal={viewModal} />}
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
