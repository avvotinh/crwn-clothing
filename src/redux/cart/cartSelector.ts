import { createSelector } from "reselect";

const selectCart = (state: any) => state.cart;

export const selectCartItems = createSelector([selectCart], (cart: any) => cart.cartItems);

export const selectCartItemCount = createSelector([selectCartItems], (cartItems: any) =>
  cartItems.reduce((total: any, cartItem: any) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems: any[]) =>
  cartItems.reduce((total: number, cartItem: any) => total + cartItem.quantity * cartItem.price, 0)
);
