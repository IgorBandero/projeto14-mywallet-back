import express from "express";
import {validateUser, validateNewUser} from "../middlewares/validateUser.js";
import {createUser} from "../controllers/userControllers.js";

const userRouter = express.Router();

userRouter.post("/newuser", validateNewUser, createUser);

export default userRouter;