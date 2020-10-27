export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "CART_ADD_ITEM":
      const item = action.payload;
      const itemExsits = state.cartItems.find(
        (x) => x.product === item.product
      );
      if (itemExsits) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === itemExsits.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    default:
      return state;
  }
};
