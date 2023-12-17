// eslint-disable-next-line react/prop-types
const Button = ({ children }) => {
  return (
    <button className="bg-blueSky  hover:bg-blueMarine rounded-lg w-32 h-10 text-white font-bold">{children}</button>
  );
};

export default Button;
