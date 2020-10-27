import React, { useEffect } from "react";
import { addToCart } from "../actions/cartAction";
import { useDispatch, useSelector } from "react-redux";
function CartScreen(props) {
  const productId = props.match.params.id;
  const dispatch = useDispatch();
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  console.log(props.location.search);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);
  return (
    <div className="container mt-3">
      <h2>Items in cart</h2>
      <div className="row">
        <div className="col-6">
          {cartItems.map((c) => (
            <div className="row mt-3">
              <div className="col-2">
                <img src={c.image} height="100%" width="100%" />
              </div>
              <div className="col-3">
                <h6>{c.name}</h6>
              </div>
              <div className="col-3">
                <h6>$ {c.price}</h6>
              </div>
              <div className="col-3">
                <select
                  value={c.qty}
                  onChange={(e) =>
                    dispatch(addToCart(c.product, Number(e.target.value)))
                  }
                >
                  {[...Array(c.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-1">
                <button className="btn btn-danger">
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="col-2"></div>
        <div className="col-4">
          <div className="card">
            <ul class="list-group">
              <li class="list-group-item d-flex justify-content-between align-items-center">
                <h4>
                  Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}
                  ) items
                </h4>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                <h6>
                  ${" "}
                  {cartItems
                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                    .toFixed(2)}{" "}
                </h6>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                <center>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      props.history.push("/login?redirect=shipping");
                    }}
                  >
                    Procced to checkout
                  </button>
                </center>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartScreen;
