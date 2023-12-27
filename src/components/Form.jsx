export const Input = ({ ...props }) => {
  return (
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500"
      {...props}
    />
  );
};
export const Form = ({ children, ...props }) => {
  return <form {...props}>{children}</form>;
};
export const Label = ({ text }) => {
  return (
    <label htmlFor="" className="block text-gray-700 text-sm font-bold mb-2">
      {text}
    </label>
  );
};

export const Select = ({ ...props }) => {
  return (
    <select
      className=" shadow block appearance-none w-full  px-4 py-2 pr-8 rounded  leading-tight  focus:outline-blue-500"
      {...props}
    >
      <option defaultValue value={null}>
        Elige una mesa
      </option>
      <option value="1">Mesa 1</option>
      <option value="2">Mesa 2</option>
      <option value="3">Mesa 3</option>
      <option value="4">Mesa 4</option>
      <option value="5">Mesa 5</option>
    </select>
  );
};
