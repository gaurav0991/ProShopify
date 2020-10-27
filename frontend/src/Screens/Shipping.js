import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderShipping from "../Components/HeaderShipping";

function Shipping() {
  const [email, setEmail] = useState("");
  const [city, setcity] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const [Building, setBuilding] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="container">
      <div className="form-container">
        <HeaderShipping step1 step2 />
        <form>
          <div class="form-group mt-3">
            <legend>Shipping Details</legend>
            <label for="exampleInputEmail1">Email address</label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
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
              placeholder="Password"
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
            <Link to="/payment">Continue</Link>
          </btn>
        </form>
      </div>
    </div>
  );
}

export default Shipping;
