import axios from "axios";
import React, { useState, useEffect } from "react";
import Rating from "../Components/Rating";
import { productDetails } from "../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Components/Loader";
function ProductDetails(props) {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const proDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = proDetails;
  useEffect(() => {
    dispatch(productDetails(props.match.params.id));
  }, [dispatch]);
  const addToCart = () => {
    props.history.push(`/cart/${props.match.params.id}?q=${qty}`);
  };
  const remove=(id)=>{}
  return loading ? (
    <Loader />
  ) : (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-6">
          <img src={product.image} height="90%" width="100%" />
        </div>
        <div className="col-lg-3">
          <h4>{product.name}</h4>
          <hr />
          <Rating rating={product.rating} />
          <hr />
          <h6>$ {product.price}</h6>
          <hr />
          <h6>Description: {product.description}</h6>
        </div>
        <div className="col-lg-3">
          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Price:
              <span class="badge">
                <h6> {product.price}</h6>
              </span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Status
              <span class="badge">
                <h6>
                  {" "}
                  {product.countInStock > 0 ? "In Stock" : "Not in stock"}
                </h6>
              </span>
            </li>
            {product.countInStock > 0 && (
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Qty
                <span class="badge">
                  <h6>
                    {product.countInStock > 0 && (
                      <div className="row">
                        <div className="col-6">
                          <div className="form">
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </div>
                    )}
                  </h6>
                </span>
              </li>
            )}
            <li class="list-group-item my-1">
              <center>
                {product.countInStock > 0 ? (
                  <button
                    onClick={addToCart}
                    type="button"
                    class="btn btn-success"
                  >
                    Add To Cart
                  </button>
                ) : (
                  <button type="button" class="btn btn-disabled">
                    Add To Cart
                  </button>
                )}
              </center>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
