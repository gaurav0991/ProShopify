import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../actions/orderAction";
import Loader from "../Components/Loader";
import Message from "../Components/Message";
function OrderScreen(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.orderDetails);
  const { order, loading, error } = state;
  useEffect(() => {
    dispatch(getOrder(props.match.params.id));
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <div className="container mt-4">
      <div className="row">
        <div className="col-7">
          <h4>ORDER ID : {order._id}</h4>
          <h4 className="mt-4">Shipping</h4>
          <p>
            <strong>Address : </strong>
            {order.address.buildingAddress}
          </p>
          <p>Name : {order.user.name}</p>
          <p>Email : {order.user.email}</p>
          {order.isDelivered ? (
            <Message message="Delivered" />
          ) : (
            <Message message="Not Delivered" />
          )}
          <hr />
          <h4>Payment Method</h4>
          <p>Method : {order.paymentMethod}</p>
          {order.isPaid ? (
            <Message message="Paid" />
          ) : (
            <Message message="Not Paid" />
          )}
          <hr />

          <h4>ORDER ITEMS</h4>

          <ul class="list-group">
            {order.orderItems.map((item) => (
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
                ${" "}
                {order.orderItems
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
                {order.orderItems
                  .reduce((acc, item) => acc + item.price * item.qty, 0)
                  .toFixed(2)}
              </span>
            </li>
            <li class="list-group-item d-flex justify-content-center align-items-center">
              <center>
                {" "}
                <div className="btn btn-danger">Pay</div>
              </center>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OrderScreen;
