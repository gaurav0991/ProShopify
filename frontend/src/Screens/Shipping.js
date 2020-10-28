import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderShipping from "../Components/HeaderShipping";
import { useDispatch, useSelector } from "react-redux";
import { getDetails, setShippingDetails } from "../actions/loginAction";
function Shipping(props) {
  const [city, setcity] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const [Building, setBuilding] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state.userDetail);
  const state2 = useSelector((state) => state.shippingDetails);

  const { loading, user, error } = state;

  useEffect(() => {
    if (!user) {
      dispatch(getDetails());
    } else {
      setName(user.user.name);
      setcity(user.user.address.city);
      setBuilding(user.user.address.buildingAddress);
      setCountry(user.user.address.country);
      setPincode(user.user.address.pincode);
    }
  }, [dispatch, user]);
  return (
    <div className="container">
      <div className="form-container">
        <HeaderShipping step1 step2 />
        <form>
          <div class="form-group mt-3">
            <legend>Shipping Details</legend>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Name</label>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Name"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">City</label>
            <input
              value={city}
              onChange={(e) => {
                setcity(e.target.value);
              }}
              type="text"
              class="form-control"
              placeholder="Mumbai"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Country</label>
            <input
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
              type="text"
              class="form-control"
              placeholder="India"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Pincode</label>
            <input
              value={pincode}
              onChange={(e) => {
                setPincode(e.target.value);
              }}
              type="number"
              class="form-control"
              placeholder="700120"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Building Address</label>
            <input
              value={Building}
              onChange={(e) => {
                setBuilding(e.target.value);
              }}
              type="text"
              class="form-control"
              placeholder="221B Street"
            />
          </div>
          <btn className="btn btn-danger">
            <div
              onClick={() => {
                dispatch(
                  setShippingDetails(name, city, country, pincode, Building)
                );
                props.history.push("/payment");
              }}
            >
              Continue
            </div>
          </btn>
        </form>
      </div>
    </div>
  );
}

export default Shipping;
