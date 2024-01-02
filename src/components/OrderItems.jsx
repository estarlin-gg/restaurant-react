export const OrderItems = ({ img, title, price, nombre, hora }) => {
  return (
    <div className=" w-full ordersItems flex items-center shadow-lg border-2 rounded-md shadow-black/2 bg-white  p-3 gap-2 mt-2">
      <div className="img p-3 h-fit w-2/4 md:w-1/4 aspect-video object-cover ">
        <img src={img} alt={title} className="w-full h-" />
      </div>
      <div className="body w-3/4 p-3">
        <h2 className="text-xl text-black font-semibold block mb-2">{title}</h2>
        <span className="text-slate-950 capitalize  block mb-2 font-medium">
          nombre: {nombre}
        </span>
        <span className="text-slate-950 capitalize font-medium">{price}</span>
        <span className="text-slate-950 capitalize block text-right font-medium ">
          Hora: {parseInt(hora) >= 12 ? `${hora} PM` : `${hora} AM`}
        </span>
      </div>
    </div>
  );
};
