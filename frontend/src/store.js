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
  userDetailsReducer,
} from "./reducers/loginReducer.js";
import { cartReducer } from "./reducers/cartReducer.js";
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailReducer,
  cart: cartReducer,
  login: loginReducer,
  register: registorReducer,
  userDetail: userDetailsReducer,
});
const itemsinCart = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const loginInfo = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
const initialState = {
  cart: { cartItems: itemsinCart },
  login: { user: loginInfo },
};

const middleWare = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);
export default store;
