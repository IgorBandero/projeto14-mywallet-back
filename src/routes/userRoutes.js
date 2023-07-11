import express from "express";
import {validateUser, validateNewUser} from "../middlewares/validateUser.js";
import {createUser, joinSession} from "../controllers/userControllers.js";

const userRouter = express.Router();

userRouter.post("/newuser", validateNewUser, createUser);
userRouter.post("/login", validateUser, joinSession);

export default userRouter;