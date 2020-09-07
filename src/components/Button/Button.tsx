import React from "react";
import "./button.scss";

interface IOwnProps {
  type: string;
}

class Button extends React.Component<IOwnProps> {
  constructor(props: IOwnProps) {
    super(props);
  }

  render() {
    const { children, type } = this.props;

    return <button className="custom-button">{children}</button>;
  }
}

export default Button;
