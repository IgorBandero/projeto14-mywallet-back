import { Router } from "express";

const userRouter = Router();

userRouter.post("/login");
userRouter.post("/newuser");

export default userRouter;