export const addItemToCart = (
  cartItems: any[],
  cartItemToAdd: any
) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === cartItemToAdd.id
  );

  if (!existingCartItem) {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  }

  return cartItems.map((item) =>
    item.id === cartItemToAdd.id
      ? { ...item, quantity: item.quantity + 1 }
      : item
  );
};

export const removeItemFromCart = (
  cartItems: any[],
  cartItemRemove: any
) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === cartItemRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((e) => e.id !== cartItemRemove.id);
  }

  return cartItems.map((item) =>
    item.id === cartItemRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
