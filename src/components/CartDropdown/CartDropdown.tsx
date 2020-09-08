import React from "react";
import "./cartDropdown.scss";
import Button from "../Button/Button";

class CartDropdown extends React.Component {
  render() {
    return (
      <div className="cart-dropdown">
        <div className="cart-items"></div>
        <Button type="button" mode="dark">
          GO TO CHECKOUT
        </Button>
      </div>
    );
  }
}

export default CartDropdown;
