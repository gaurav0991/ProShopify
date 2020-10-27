import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../actions/loginAction";
function ProfileScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [city, setcity] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const [Building, setBuilding] = useState("");
  const [name, setName] = useState("");
  const state = useSelector((state) => state.userDetail);
  const { loading, user, error } = state;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      dispatch(getDetails());
    } else {
      setName(user.user.name);
      setEmail(user.user.email);
      setcity(user.user.address.city);
      setBuilding(user.user.address.buildingAddress);
      setCountry(user.user.address.country);
      setPincode(user.user.address.pincode);
    }
  }, [dispatch, user]);
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-4">
          <form>
            <legend>Profile </legend>

            <div class="form-group">
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
            <btn className="btn btn-danger">Update</btn>
          </form>
        </div>
        <div className="col-8">
          <h4>Your Orders</h4>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
