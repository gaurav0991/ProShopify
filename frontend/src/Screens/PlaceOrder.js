import React, { useEffect } from "react";
import HeaderShipping from "../Components/HeaderShipping";
import { useSelector, useDispatch } from "react-redux";
import { createOrder } from "../actions/orderAction";
function PlaceOrder(props) {
  const state = useSelector((state) => state.shippingDetails);
  const state2 = useSelector((state) => state.cart);
  const state3 = useSelector((state) => state.orderReducer);

  const { cartItems } = state2;
  const dispatch = useDispatch();
  const { order, success, loading } = state3;
  useEffect(() => {
    if (success) {
      props.history.push(`/order/${order._id}`);
    }
  }, [success, props.history]);
  const onclick = () => {
    const order = {
      orderItems: cartItems,
      address: {
        city: state.details.city,
        buildingAddress: state.details.building,
        country: state.details.county,
        pincode: state.details.pincode,
      },
      paymentMethod: "Paypal",
      taxPrice: 0,
      totalPrice: cartItems
        .reduce((acc, item) => acc + item.price * item.qty, 0)
        .toFixed(2),
    };
    dispatch(createOrder(order));
  };
  return (
    <div className="container">
      <HeaderShipping step1 step2 step3 step4 />
      <div className="row my-5">
        <div className="col-7">
          <h3>Shipping Details</h3>
          <h6>Order Name : {state.details.name}</h6>
          <p>
            Address : {state.details.building},{state.details.city}
          </p>
          <hr />
          <h3>Order Items</h3>
          <ul class="list-group">
            {cartItems.map((item) => (
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <img
                  src={item.image}
                  width="40px"
                  height="30px"
                  className="mr-0 p-0"
                />
                {item.name}
                <span className="">
                  {item.price} X {item.qty}={(item.price * item.qty).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-1"></div>
        <div className="col-4">
          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <h4> Order Summary</h4>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Items
              <span class="badge">
                {cartItems
                  .reduce((acc, item) => acc + item.price * item.qty, 0)
                  .toFixed(2)}
              </span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Shipping Charges
              <span class="badge">0</span>
            </li>

            <li class="list-group-item d-flex justify-content-between align-items-center">
              Total Charges
              <span class="badge">
                {" "}
                {cartItems
                  .reduce((acc, item) => acc + item.price * item.qty, 0)
                  .toFixed(2)}
              </span>
            </li>
            <li class="list-group-item d-flex justify-content-center align-items-center">
              <center>
                {" "}
                <div onClick={onclick} className="btn btn-danger">
                  Place Order
                </div>
              </center>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
