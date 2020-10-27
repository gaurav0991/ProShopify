import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generate from "../utils/jwttokens.js";
//@endpoint api/v1/auth/login
//desc auth user
//method POST
const authSign = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email }).select("+password");
  if (user && (await user.matchPassword(password))) {
    res.json({ user, token: generate(user._id) });
  } else {
    res.status(401).json({ data: "Invalid Email or password" });
  }
});
//@endpoint api/v1/auth/profile
//desc get user profile
//method GET
const getProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({ user });
  } else {
    res.status(404).send({ data: "User not found" });
  }
});

//@endpoint api/v1/auth/register
//desc register user
//method POST
const registerUser = asyncHandler(async (req, res) => {
  try {
    const { email, password, name, address } = req.body;
    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(401).json({ data: user });
    }
    const data = await User.create({ email, password, name, address });
    return res.json({ user, token: generate(data._id) });
  } catch (error) {
    console.log("here");
    res.status(404).send({ data: error.message });
  }
});

//@endpoint api/v1/auth/register
//desc register user
//method POST
const updateUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      user.email = req.body.email || user.email;
      user.name = req.body.name || user.name;
      user.address.city = req.body.address.city || user.address.city;
      if (req.body.password) {
        user.password = req.body.password;
      }
      const updated = await user.save();
      return res.status(401).json({ data: updated });
    }
    const data = await User.create({ email, password, name, address });
    return res.json({ user, token: generate(data._id) });
  } catch (error) {
    console.log("here");
    res.status(404).send({ data: error.message });
  }
});

export { authSign, getProfile, registerUser, updateUser };
