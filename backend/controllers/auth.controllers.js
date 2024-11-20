import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateToken.js";

export const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User created successfully",
      newUser: { ...user._doc, password: "" },
    });
  } catch (error) {
    console.log(`error from sign up`, error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "both fields are required" });
    }

    const currentUser = await User.findOne({ email });

    const passwordMatch = await bcrypt.compare(password, currentUser.password);

    if (!passwordMatch) {
      return res
        .status(400)
        .json({ success: false, message: "please enter valid credentials" });
    }

    generateTokenAndSetCookie(currentUser._id, res);

    res.status(200).json({ success: true, message: "successfully logged in" });
  } catch (error) {
    console.log(`error from log in`, error);
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("jwt-netflix");
    res.status(200).json({ success: true, message: "successfully logged out" });
  } catch (error) {
    console.log(`error from log out`, error);
  }
};
