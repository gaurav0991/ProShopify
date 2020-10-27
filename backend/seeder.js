import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import products from "./data/products.js";
import Product from "./models/productModel.js";
import Users from "./models/userModel.js";
import connectDb from "./db.js";
import users from "./data/users.js";
dotenv.config();
connectDb();
const importData = async () => {
  try {
    await Product.deleteMany();
    await Users.deleteMany();
    const createUser = await Users.insertMany(users);
    const adminUser = createUser[0]._id;
    const sampleProducts = products.map((p) => {
      return {
        ...p,
        user: adminUser,
      };
    });
    await Product.insertMany(sampleProducts);
    console.log("Product inserted".green.inverse);
    process.exit();
  } catch (error) {
    console.log(error.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] != "-d") {
  importData();
}
