import MobileController from "../controllers/mobileController";
import express from "express";
import checkPermniss from "../middlewares/checkPermission";
const mobileRouter = express.Router()
const mobileControll = new MobileController()

mobileRouter.get("/", mobileControll.getAll)
mobileRouter.get("/:id", mobileControll.getDetail)
mobileRouter.post("/", checkPermniss, mobileControll.post)
mobileRouter.put("/:id", checkPermniss, mobileControll.put)
mobileRouter.delete("/:id", checkPermniss, mobileControll.delete)

export default mobileRouter