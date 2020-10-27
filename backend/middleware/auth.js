import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const pro = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.SECRET);
      console.log(decoded);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      res.status(401).send({ data: "Not authorized" });
    }
  }
  if (!token) {
    res.status(401).send({ data: "Not authorized" });
  }
};
export default pro;
