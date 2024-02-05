import React from "react";
import { ButtonProps } from "../Models/ComponentModels";
import getButtonClasses from "../Helpers/ButtonReusable";

const Button: React.FC<ButtonProps> = ({
  typeButton,
  text,
  type,
  onClick,
  color,
  disabled = false,
  style = "", // Provide a default value for style
}) => {
  const buttonClasses = getButtonClasses(typeButton!, color!);

  return (
    <button
      disabled={disabled}
      type={type}
      className={`${style} ${buttonClasses} rounded-md shadow-md ${disabled ? "cursor-not-allowed" : "cursor-pointer hover:brightness-[94%] active:scale-[0.98]"} transition-100`}
      onClick={onClick}
    >
      <p>{text}</p>
    </button>
  );
};

export default Button;
