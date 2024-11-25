import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
  const token = req.cookies["jwt-netflix"];

  if (!token) {
    return res
      .status(401)
      .json({
        success: false,
        message: "Not Authorized! Please sign in first",
      });
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  if (!decoded) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid Token, please sign in again" });
  }

  const user = await User.findById(decoded.userId).select("-password");

  if (!user) {
    return res.status(500).json({ success: false, message: "user not found" });
  }

  req.user = user;

  next();
};

export default protectRoute;
