import React from "react";
import "./button.scss";

interface IOwnProps {
  type?: "button" | "submit" | "reset";
  light?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

class Button extends React.Component<IOwnProps> {
  constructor(props: IOwnProps) {
    super(props);
  }

  render() {
    const { children, onClick, type, light } = this.props;

    return (
      <button
        className={`${light ? "light" : ""} custom-button`}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

export default Button;
