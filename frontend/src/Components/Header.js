import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/loginAction";
function Header() {
  const [show, setShow] = useState(false);
  const state = useSelector((state) => state.login);
  const { user } = state;
  console.log(user);
  const dispatch = useDispatch();
  const logOut = () => {
    console.log("hello");
    dispatch(logoutUser());
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link to="/" class="navbar-brand" href="#">
            ProShopify
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <Link to="/cart" class="nav-link" href="#">
                  <i className="fas fa-shopping-cart"></i> Cart{" "}
                  <span class="sr-only">(current)</span>
                </Link>
              </li>

              {user ? (
                <li class="nav-item dropdown">
                  <div
                    onClick={() => {
                      setShow(!show);
                    }}
                    class="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    {user.user.name}
                  </div>
                  {show == false ? (
                    <div class="dropdown-menu">
                      <div class="dropdown-item" onClick={logOut}>
                        Logout
                      </div>
                    </div>
                  ) : (
                    <div class="dropdown-menu show">
                      <a class="dropdown-item" href="#">
                        <Link to="/profile"> Your Profile</Link>
                      </a>
                      <a class="dropdown-item" href="#" onClick={logOut}>
                        Logout
                      </a>
                    </div>
                  )}
                </li>
              ) : (
                <li class="nav-item">
                  <Link to="/login" class="nav-link">
                    <i className="fas fa-user"></i> Sign In
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>{" "}
    </div>
  );
}

export default Header;
