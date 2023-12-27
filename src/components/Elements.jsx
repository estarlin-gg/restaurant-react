export const Text = ({ classes, children }) => {
  return <p className={classes}>{children}</p>;
};
export const Title = ({ classes, text }) => {
  return <h2 className={classes}>{text}</h2>;
};
export const Button = ({  text, bgColor, color,classes,padding ="4",...props }) => {
  return (
    <button
      {...props}
      className={`p-${padding} rounded-xl ${bgColor} font-medium ${color} ${classes} hover:bg-opacity-90`}
    >
      {text}
    </button>
  );
};
