import { ReactNode } from "react";

type ButtonColorType = "red" | "green" | "yellow";

type ButtonProps = {
  animate?: boolean;
  value?: string;
  icon?: ReactNode;
  color?: ButtonColorType;
};

const Button = ({
  animate,
  value = "Lorem Ipsum",
  icon,
  color = "red",
}: ButtonProps) => {
  const colorSwitcher = (color: ButtonColorType) => {
    switch (color) {
      case "red":
        return "button--red";
      case "green":
        return "button--green";

      default:
        return "button--yellow";
    }
  };
  return (
    <button
      className={`button ${colorSwitcher(color)} ${
        animate ? "button--animate" : ""
      }`}
    >
      {icon}
      <div className="button__value">{value}</div>
    </button>
  );
};

export default Button;
