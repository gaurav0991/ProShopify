import axios from "axios";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/api/v1/products/${id}`);
    dispatch({
      type: "CART_ADD_ITEM",
      payload: {
        product: data.data._id,
        name: data.data.name,
        image: data.data.image,
        price: data.data.price,
        countInStock: data.data.countInStock,
        qty,
      },
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (error) {
    dispatch({ type: "CART_ADD_FAILED", payload: error.response });
  }
};
