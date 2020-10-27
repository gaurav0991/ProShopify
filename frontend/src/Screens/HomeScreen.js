import React, { useEffect, useState } from "react";
import Rating from "../Components/Rating";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../actions/productAction.js";
import Loader from "../Components/Loader";
function HomeScreen() {
  const prodList = useSelector((state) => state.productList);
  const { loading, error, products } = prodList;
  const dispath = useDispatch();
  useEffect(() => {
    dispath(listProduct());
  }, [dispath]);
  return loading ? (
    <Loader />
  ) : error ? (
    <h3>{error}</h3>
  ) : (
    <div className="container">
      <h3 className="my-3" style={{ textAlign: "left" }}>
        Latest Products
      </h3>
      <div className="row">
        {products.map((product, index) => (
          <div className="col-lg-3">
            <div class="card mb-3 p-3 rounded">
              <Link to={`product/${product._id}`} style={{ color: "black" }}>
                <img
                  style={{ height: "100%", width: "100%" }}
                  src={product.image}
                />
                <div class="card-body" style={{ textAlign: "left" }}>
                  <strong className="card-title">{product.name}</strong>

                  <div className="mt-1"></div>
                  <Rating rating={product.rating} />
                  <div className="mt-1"></div>

                  <h6> ${product.price}</h6>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
