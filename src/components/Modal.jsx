import { Box, Container } from "./Containers";
import { Button } from "./Elements";
import { Form, Input, Label, Select } from "./Form";

export const Modal = ({ info, modal }) => {
  const { img, title, price } = info;
  const handleSubmit = (e) => {
    e.preventDefault();
    modal(false)
  };
  const activateModal = () => {
    modal(false);
  };
  return (
    <Container
      classes={
        "md:w-full bg-slate-950/50  fixed inset-0 flex items-center justify-center z-[100]"
      }
    >
      <Box classes="bg-white h-screen justify-center sm:h-fit rounded-lg p-5 w-full  sm:min-w-[500px] flex flex-col gap-8 max-w-[600px] ">
        <h1 className="text-center text-4xl">Reserva:</h1>
        <div className="w-full grid grid-cols-2 gap-2 border p-2">
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
        <Form className="" onSubmit={handleSubmit}>
          <div className="row">
            <div className="mb-4">
              <Label text="Nombre:" />
              <Input />
            </div>
            <div className="mb-4">
              <Label text="Mesa:" />
              <Select />
            </div>
            <div className="mb-4">
              <Label text="Fecha:" />
              <Input type="date" />
            </div>
            <div className="mb-4">
              <Button
                text="Ordenar"
                classes="block w-full bg-orange-600 text-white mb-4"
              />
              <Button
                text="Regresar"
                classes="block w-full bg-black text-white"
                onClick={activateModal}
              />
            </div>
          </div>
        </Form>
      </Box>
    </Container>
  );
};
