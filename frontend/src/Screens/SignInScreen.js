import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../actions/loginAction";
import Message from "../Components/Message";
function SignInScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const dispatch = useDispatch();

  const state = useSelector((state) => state.login);
  const { user, loading, error } = state;
  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  const submit = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };
  useEffect(() => {
    if (user) {
      props.history.push(redirect);
    }
  }, [user, props.history, redirect]);
  return (
    <div className="container">
      <form className="p-5">
        {error ? <Message message={error} /> : <p></p>}
        <fieldset>
          <legend>Login </legend>

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
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
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

          <button
            onClick={(e) => submit(e)}
            type="submit"
            class="btn btn-danger"
          >
            SignIn
          </button>
        </fieldset>
        <div className="mt-3">
          <h6>
            New Customer ?
            <Link to="/register">
              <strong>&nbsp;Regsiter</strong>
            </Link>
          </h6>
        </div>
      </form>
    </div>
  );
}

export default SignInScreen;
