export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return { loading: true };
    case "LOGIN_SUCCESS":
      return { loading: false, user: action.payload };
    case "LOGIN_FAIL":
      return { loading: false, error: action.payload };
    case "LOGOUT_SUCCESS":
      return {};
    default:
      return state;
  }
};
export const registorReducer = (state = {}, action) => {
  switch (action.type) {
    case "REGISTER_REQUEST":
      return { loading: true };
    case "REGISTER_SUCCESS":
      return { loading: false, user: action.payload };
    case "REGISTER_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const userDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_DETAIL_REQUEST":
      return { loading: true };
    case "USER_DETAIL_SUCCESS":
      return { loading: false, user: action.payload };
    case "USER_DETAIL_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
