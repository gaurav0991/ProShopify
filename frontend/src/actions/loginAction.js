import axios from "axios";

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_REQUEST" });

    const { data } = await axios.post("/api/v1/auth/login", {
      email,
      password,
    });
    dispatch({ type: "LOGIN_SUCCESS", payload: data });
    localStorage.setItem("user", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: "LOGIN_FAIL", payload: error.response.data.data });
  }
};

export const logoutUser = () => async (dispatch) => {
  localStorage.removeItem("user");

  dispatch({ type: "LOGOUT_SUCCESS" });
};

export const regsitorUser = (
  email,
  password,
  city,
  country,
  pincode,
  buildingAddress,
  name
) => async (dispatch) => {
  try {
    dispatch({ type: "REGISTER_REQUEST" });

    const { data } = await axios.post("/api/v1/auth/register", {
      email,
      password,
      name,
      address: {
        city,
        country,
        pincode,
        buildingAddress,
      },
    });
    console.log(data);
    dispatch({ type: "REGISTER_SUCCESS", payload: data.user });
    dispatch({ type: "LOGIN_SUCCESS", payload: data.user });
    localStorage.setItem("user", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: "REGISTER_FAIL", payload: error.response.data.data });
  }
};
export const getDetails = () => async (dispatch, getState) => {
  try {
    dispatch({ type: "USER_DETAIL_REQUEST" });
    const {
      login: { user },
    } = getState();
    console.log(user._id);
    const config = {
      headers: {
        //@endpoint api/v1/auth/profile
        Authorization: `Bearer ${user.token}`,
      },
    };
    const { data } = await axios.get("/api/v1/auth/profile", config);
    console.log(data);
    dispatch({ type: "USER_DETAIL_SUCCESS", payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "USER_DETAIL_FAIL", payload: error });
  }
};

export const setShippingDetails = (
  name,
  city,
  county,
  pincode,
  building
) => async (dispatch, getState) => {
  try {
    console.log(name);
    const data = { name, city, county, pincode, building };
    dispatch({ type: "USER_SHIPPING_SUCCESS", payload: data });
    localStorage.setItem("Shipping", JSON.stringify(data));
  } catch (error) {
    console.log(error);
    dispatch({ type: "USER_SHIPPING_FAIL", payload: error });
  }
};
