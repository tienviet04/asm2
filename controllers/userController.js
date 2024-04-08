import user from "../models/userModel";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import authRes from "../validations/auth";
class UserController {
    async register(req, res) {
        try {
            const { email, fullname, password } = req.body
            const { error } = authRes.validate({ email, password })
            if (error) {
                const errors = error.details.map((err) => err.message)
                return res.status(400).json({
                    message: errors
                })
            }

            const emailEx = await user.findOne({ email });
            if (emailEx) {
                return res.status(400).json({ message: "Email has been done" })
            }
            const hashPass = await bcryptjs.hash(password, 10)
            const Userr = await user.create({
                email,
                fullname,
                password: hashPass,
            });
            res.status(200).json({
                message: "Create done",
                data: { ...Userr.toObject(), password: undefined }
            })

        } catch (error) {
            res.status(500).json({
                message: "error",
                error: error.message
            })
        }
    }

    async login(req, res) {
        const { email, password } = req.body
        const { error } = authRes.validate({ email, password })
        if (error) {
            const errors = error.details.map((err) => err.message)
            return res.status(400).json({
                message: errors
            })
        }
        const checkUser = await user.findOne({ email });
        if (!checkUser) {
            return res.status(404).json({
                message: "Tai khoan khong hop le"
            })
        }

        const checkPassword = await bcryptjs.compare(password, checkUser.password);
        if (!checkPassword) {
            return res.status(404).json({
                message: "Tai khoan khong hop le"
            })
        }
        const token = jwt.sign({ id: checkUser._id }, "key", {
            expiresIn: "1d"
        })
        res.status(200).json({
            message: "Done",
            Userr: { ...checkUser.toObject(), password: undefined },
            token,
        })
    }
}
export default UserController