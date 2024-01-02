export const Text = ({ classes, children }) => {
  return <p className={classes}>{children}</p>;
};
export const Title = ({ classes, text }) => {
  return <h2 className={classes}>{text}</h2>;
};
export const Button = ({ children,text, classes, ...props }) => {
  return (
    <button
      {...props}
      className={`  font-medium  ${classes} hover:bg-opacity-90`}
    >
      {text}
      {children}
    </button>
  );
};
