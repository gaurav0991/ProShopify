import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

//@endpoint api/v1/products
//desc get all products
//method GET
const getProducts = asyncHandler(async (req, res) => {
  const prod = await Product.find({});
  return res.json(prod);
});

//@endpoint api/v1/products/:id
//desc get one product by id
//method GET
const getProductById = asyncHandler(async (req, res) => {
  const prod = await Product.findById(req.params.id);
  if (prod) {
    return res.json({ data: prod });
  } else {
    return res.status(404).send({ data: "Product not found" });
  }
});

export { getProducts, getProductById };
