import express from "express";
import dotenv from "dotenv";
import connectDb from "./db.js";
import colors from "colors";
import productRoute from "./routes/productRoute.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
app.use(express.json());
dotenv.config();
connectDb();
app.get("/", (req, res) => {
  res.send("API is running");
});
app.use("/api/v1/products", productRoute);
app.use("/api/v1/auth", authRoutes);
// app.get("/api/v1/products/:id", (req, res) => {
//   const product = products.find((p) => p._id == req.params.id);
//   res.json(product);
// });
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Sever running on PORT ${PORT} `.yellow.bold));
