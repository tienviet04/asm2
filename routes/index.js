import { Router } from "express";
import mobileRouter from "./mobile";
import UserRouter from "./auth";
import categoriesRouter from "./category";
const routers = Router();

routers.get("/", (req, res) => {
    res.send("home")
});

routers.use("/mobile", mobileRouter)
routers.use("/category", categoriesRouter)
routers.use("/auth", UserRouter)

export default routers