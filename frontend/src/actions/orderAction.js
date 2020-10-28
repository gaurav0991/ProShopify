import axios from "axios";
export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: "ORDER_REQUEST" });
    const {
      login: { user },
    } = getState();
    console.log(user._id);
    const config = {
      headers: {
        //@endpoint api/v1/auth/profile
        Authorization: `Bearer ${user.token}`,
      },
    };

    const { data } = await axios.post("/api/v1/order", order, config);
    console.log(data);
    dispatch({ type: "MAKE_ORDER_SUCCESS", payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "MAKE_ORDER_FAIL", payload: error });
  }
};
export const getOrder = (id) => async (dispatch, getState) => {
  try {
    console.log(id);
    dispatch({ type: "GET_ORDER_REQUEST" });
    const {
      login: { user },
    } = getState();
    const config = {
      headers: {
        //@endpoint api/v1/auth/profile
        Authorization: `Bearer ${user.token}`,
      },
    };

    const { data } = await axios.get(`/api/v1/order/${id}`, config);
    console.log(data);
    dispatch({ type: "GET_ORDER_SUCCESS", payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "GET_ORDER_FAIL", payload: error });
  }
};
