import asyncHandler from "express-async-handler";
import OrderModel from "../models/orderModel.js";

//@endpoint api/v1/order
//desc create an order
//method POST
const createOrder = asyncHandler(async (req, res) => {
  const {
    orderItems,
    address,
    paymentMethod,
    paymentResult,
    taxPrice,
    totalPrice,
  } = req.body;
  if (orderItems && orderItems.length === 0) {
    return res.status(400).json({ error: "No Items" });
  } else {
    const order = OrderModel({
      orderItems,
      user: req.user._id,
      address,
      paymentMethod,
      taxPrice,
      totalPrice,
    });
    const createdOrder = await order.save();
    res.status(200).json(createdOrder);
  }
});

//@endpoint api/v1/order
//desc create an order
//method POST
const getOrderById = asyncHandler(async (req, res) => {
  console.log(req.params.id);
  const order = await OrderModel.findById(req.params.id).populate("user");
  if (order) {
    return res.status(200).json(order);
  } else {
    return res.status(400).json({ error: "No Items" });
  }
});

export { createOrder, getOrderById };
