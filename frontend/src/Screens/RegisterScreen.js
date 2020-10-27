import React, { useState } from "react";
import { Link } from "react-router-dom";
import { regsitorUser } from "../actions/loginAction";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Components/Message";
function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [city, setcity] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const [Building, setBuilding] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const state = useSelector((state) => state.register);
  const { data, loading, error } = state;
  const onSubmit = (e) => {
    e.preventDefault();
    if (password != confirmpassword) {
      alert("Passwords do not match");
    } else {
      dispatch(
        regsitorUser(email, password, city, country, pincode, Building, name)
      );
    }
  };

  return (
    <div className="container">
      <form className="p-5">
        <fieldset>
          <legend>Regsiter </legend>
          {error && <Message message={error} />}
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              value={email}
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword2">Name</label>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              class="form-control"
              id="exampleInputPassword2"
              placeholder="Name"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1">Confirm Password</label>
            <input
              value={confirmpassword}
              onChange={(e) => {
                setConfirmpassword(e.target.value);
              }}
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Confirm Password"
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
          <button
            onClick={(e) => onSubmit(e)}
            type="submit"
            class="btn btn-danger"
          >
            Register
          </button>
        </fieldset>
        <div className="mt-3">
          <h6>
            Already have an Account ?
            <Link to="/login">
              <strong>&nbsp;Login</strong>
            </Link>
          </h6>
        </div>
      </form>
    </div>
  );
}

export default RegisterScreen;
