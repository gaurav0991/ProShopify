import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./bootstrap.min (2).css";
import Header from "./Components/Header";
import HomeScreen from "./Screens/HomeScreen";
import ProductDetails from "./Screens/ProductDetails";
import CartScreen from "./Screens/CartScreen";
import SignInScreen from "./Screens/SignInScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import Shipping from "./Screens/Shipping";
import PaymentScreen from "./Screens/PaymentScreen";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={HomeScreen}></Route>
        <Route exact path="/product/:id" component={ProductDetails}></Route>
        <Route exact path="/login" component={SignInScreen}></Route>
        <Route exact path="/register" component={RegisterScreen}></Route>
        <Route exact path="/profile" component={ProfileScreen}></Route>
        <Route exact path="/shipping" component={Shipping}></Route>
        <Route exact path="/payment" component={PaymentScreen}></Route>

        <Route path="/cart/:id?" component={CartScreen}></Route>
      </div>
    </Router>
  );
}

export default App;
