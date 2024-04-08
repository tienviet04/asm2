import { Router } from "express";
import UserController from "../controllers/userController";
const UserRouter = Router()
const userControll = new UserController()

UserRouter.post("/resgister", userControll.register)
 UserRouter.post("/login", userControll.login)


export default UserRouter