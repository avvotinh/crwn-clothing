import React from "react";
import "./button.scss";

const Button = ({ children, onClick, type, mode, inverted }: any) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${mode === "light" ? "light" : ""} custom-button`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
