import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  productDetailReducer,
} from "./reducers/productReducer.js";
import {
  loginReducer,
  registorReducer,
  shippingDetailsReducer,
  userDetailsReducer,
} from "./reducers/loginReducer.js";
import { getOrderReducer, orderReducer } from "./reducers/orderReducer";
import { cartReducer } from "./reducers/cartReducer.js";
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailReducer,
  cart: cartReducer,
  login: loginReducer,
  register: registorReducer,
  userDetail: userDetailsReducer,
  shippingDetails: shippingDetailsReducer,
  orderReducer: orderReducer,
  orderDetails: getOrderReducer,
});
const itemsinCart = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const loginInfo = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
const shippingDetails = localStorage.getItem("Shipping")
  ? JSON.parse(localStorage.getItem("Shipping"))
  : null;
const initialState = {
  cart: { cartItems: itemsinCart },
  login: { user: loginInfo },
  shippingDetails: { details: shippingDetails },
};

const middleWare = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);
export default store;
