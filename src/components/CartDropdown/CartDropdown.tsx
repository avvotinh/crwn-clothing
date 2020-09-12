import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./cartDropdown.scss";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import { selectCartItems } from "../../redux/cart/cartSelector";
import { CartActionTypes } from "../../redux/cart/cartTypes";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const history = useHistory();
  const dispatch = useDispatch();
  const toggleCartHiddenHandler = useCallback(
    () => dispatch({ type: CartActionTypes.TOGGLE_CART_HIDDEN }),
    [dispatch]
  );

  const goToCheckout = () => {
    history.push("/checkout");
    toggleCartHiddenHandler();
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item: any) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button type="button" mode="dark" onClick={goToCheckout}>
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

export default CartDropdown;
