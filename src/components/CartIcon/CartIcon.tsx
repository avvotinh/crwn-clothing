import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { CartActionTypes } from "../../redux/cart/cartTypes";
import { toggleCartHidden } from "../../redux/cart/cartActions";
import { selectCartItemCount } from "../../redux/cart/cartSelector";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cartIcon.scss";

const CartIcon = () => {
  const itemCount = useSelector(selectCartItemCount);
  const dispatch = useDispatch();
  const toggleCartHiddenHandler = useCallback(
    () => dispatch({ type: CartActionTypes.TOGGLE_CART_HIDDEN }),
    [dispatch]
  );

  return (
    <div className="cart-icon" onClick={toggleCartHiddenHandler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
