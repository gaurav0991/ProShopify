export const orderReducer = (state = {}, action) => {
  switch (action.type) {
    case "ORDER_REQUEST":
      return { loading: true };
    case "MAKE_ORDER_SUCCESS":
      return { loading: false, order: action.payload, success: true };
    case "MAKE_ORDER_FAIL":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
export const getOrderReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case "GET_ORDER_REQUEST":
      return { loading: true };
    case "GET_ORDER_SUCCESS":
      return { loading: false, order: action.payload, success: true };
    case "GET_ORDER_FAIL":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
