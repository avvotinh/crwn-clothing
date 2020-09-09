import React from "react";
import { connect } from "react-redux";
import "./cartDropdown.scss";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

class CartDropdown extends React.Component<any> {
  render() {
    const { cartItems } = this.props;

    return (
      <div className="cart-dropdown">
        <div className="cart-items">
          {cartItems.map((item: any) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <Button type="button" mode="dark">
          GO TO CHECKOUT
        </Button>
      </div>
    );
  }
}

const mapStateToProps = ({ cart: { cartItems } }: any) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
