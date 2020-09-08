import React from "react";
import "./button.scss";

interface IOwnProps {
  type?: "button" | "submit" | "reset";
  mode?: "dark" | "light";
  onClick?: (e: React.MouseEvent) => void;
}

class Button extends React.Component<IOwnProps> {
  constructor(props: IOwnProps) {
    super(props);
  }

  render() {
    const { children, onClick, type, mode } = this.props;

    return (
      <button
        className={`${mode === "light" ? "light" : ""} custom-button`}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

export default Button;
