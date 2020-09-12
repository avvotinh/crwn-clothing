import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import "./checkoutItem.scss";
import { CartActionTypes } from "../../redux/cart/cartTypes";

const CheckoutItem = ({ cartItem }: any) => {
  const dispatch = useDispatch();
  const clearItemHandler = useCallback(
    (cartItem) =>
      dispatch({
        type: CartActionTypes.CLEAR_ITEM_FROM_CART,
        payload: cartItem,
      }),
    [dispatch]
  );

  const removeItemHandler = useCallback(
    (cartItem) =>
      dispatch({
        type: CartActionTypes.REMOVE_ITEM,
        payload: cartItem,
      }),
    [dispatch]
  );

  const addItemHandler = useCallback(
    (cartItem) =>
      dispatch({
        type: CartActionTypes.ADD_ITEM,
        payload: cartItem,
      }),
    [dispatch]
  );

  const { imageUrl, name, quantity, price } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItemHandler(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemHandler(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => clearItemHandler(cartItem)}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
