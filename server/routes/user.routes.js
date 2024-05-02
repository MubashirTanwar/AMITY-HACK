import { register, login, getAllUsers, getUser, updateUser } from "../controllers/user.controller.js";


import Router from "express";
const userRouter = Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/users", getAllUsers);
userRouter.get("/user/:id", getUser);
userRouter.put("/user/:id", updateUser);

export default userRouter;