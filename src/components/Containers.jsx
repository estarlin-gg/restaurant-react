import "../App.css";
export const Hero = ({ breakpoint, background, children }) => {
  return (
    <div
      className={` ${breakpoint} ${background}  mx-auto lg:h-fit`}
    >
      {children}
    </div>
  );
};
export const Header = ({ children }) => {
  return (
    <header className="h-15 w-full mx-auto flex justify-between items-center p-2 px-8  md:justify-around shadow-md top-0 fixed bg-white ">
      {children}
    </header>
  );
};

export const Box = ({ classes, children }) => {
  return <div className={`${classes}`}>{children}</div>;
};
export const Container = ({ children, classes }) => {
  return <div className={`container${classes}`}>{children}</div>;
};
