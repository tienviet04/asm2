import jwt from "jsonwebtoken";
import user from "../models/userModel";
const checkPermniss = async (req, res, next) => {
    //token

    const token = req.headers.authorization?.split(" ")[1];
    console.log(token);
    if (!token) {
        return res.status(401).json({
            message: "Not Auth"
        })
    }
    const data = jwt.verify(token, "key")
    console.log(data);
    const users = await user.findById(data.id)
    if (!users) {
        return res.status(400).json({
            message: "not found"
        })
    }
    console.log(users);
    next();
}
export default checkPermniss;