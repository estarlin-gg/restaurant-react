import { useEffect, useState } from "react";
import { Box, Container } from "./Containers";
import { Button } from "./Elements";
import { Form, Input, Label, Select } from "./Form";

export const Modal = ({ info, modal, reserva }) => {
  const [validar, setValidar] = useState(false);
  // const [complete, setComplete] = useState(false);

  // useEffect(() => {
  //   console.log("orden completada");
  // }, [complete]);
  const { img, title, price } = info;
  let alert = (
    <h2 className="block bg-red-400 text-white text-lg sm:text-2xl text-center capitalize w-full p-2">
      Todos los campos son obligatorio!!!
    </h2>
  );
  const [inputs, setInput] = useState({
    nombre: "",
    hora: "",
    mesa: "",
    img: img,
    title: title,
    price: price,
  });
  const handleInputs = (e) => {
    setInput({
      ...inputs,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const { hora, nombre, mesa } = inputs;
    e.preventDefault();
    if (hora === "" || nombre.trim === "" || mesa === "") {
      console.log("campos vacios");
      setValidar(true);
      return;
    }
    modal(false);
    setValidar(false);
    reserva(inputs);
  };
  const activateModal = () => {
    modal(false);
  };
  return (
    <Container
      classes={
        "md:w-full bg-slate-950/50  fixed inset-0 flex items-center justify-center z-[100] overflow-y-auto"
      }
    >
      <Box classes="bg-white h-fit justify-center sm:h-fit rounded-lg p-5 w-full   flex flex-col gap-8 max-w-[600px] overflow-y-auto ">
        <h1 className="text-center text-4xl">Reserva:</h1>
        <div className="w-full grid grid-cols-2  gap-2  p-2">
          <div className="bg-gray-200 grid place-items rounded-2xl p-4 aspect-video ">
            <img src={img} alt={title} className="object-contain" />
          </div>

          <div className="descripcion p-2">
            <h2 className="block text-2xl text-black font-bold mb-3">
              {title}
            </h2>
            <span className="block text-gray-700 text-xl">Precio:{price}</span>
          </div>
        </div>
        {validar && alert}
        <Form className="" onSubmit={handleSubmit}>
          <div className="row">
            <div className="mb-4">
              <Label text="Nombre:" />
              <Input
                placeholder="Escribe tu nombre"
                onChange={handleInputs}
                id="nombre"
              />
            </div>
            <div className="mb-4">
              <Label text="Mesa:" />
              <Select onChange={handleInputs} id="mesa" />
            </div>
            <div className="mb-4">
              <Label text="Hora:" />
              <Input
                type="time"
                placeholder="Elige una hora"
                onChange={handleInputs}
                id="hora"
              />
            </div>
            <div className="mb-4">
              <Button
                text="Ordenar"
                classes="block w-full bg-orange-600 text-white mb-4 p-4 rounded-xl"
                // onClick={() => setComplete(true)}
              />
              <Button
                text="Regresar"
                classes="block w-full bg-black text-white p-4 rounded-xl"
                onClick={activateModal}
              />
            </div>
          </div>
        </Form>
      </Box>
    </Container>
  );
};
