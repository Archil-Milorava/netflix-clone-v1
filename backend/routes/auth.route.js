import express from "express";
import { login, logout, signUp } from "../controllers/auth.controllers.js";

const authRouter = express.Router();

authRouter.get("/login", login);
authRouter.post("/signup", signUp);
authRouter.get("/logout", logout);

export default authRouter;
