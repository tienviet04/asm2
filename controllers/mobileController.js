import mobileModel from "../models/mobileModel";
import { mobilePut, mobilePost } from "../validations/mobileValidate";
class MobileController {
    async getAll(req, res) {
        try {
            const mobile = await mobileModel.find().populate("category");
            res.status(200).json({
                message: "Done",
                data: mobile
            })
        } catch (error) {
            res.status(400).json({
                message: "error",
                error: error.message
            })
        }
    }
    async getDetail(req, res) {
        try {
            const mobile = await mobileModel.findById(req.params.id).populate("category");
            if (!mobile) {
                return res.status(404).json({
                    message: "Not Found"
                })
            }
            res.status(200).json({
                message: "Done",
                data: mobile
            })
        } catch (error) {
            res.status(400).json({
                message: "error",
                error: error.message
            })
        }
    }
    async post(req, res) {
        try {
            const { title, price, img, rate } = req.body
            const { error } = mobilePost.validate({ title, price, img, rate }, { abortEarly: false })
            if (error) {
                const errors = error.details.map((err) => err.message)
                return res.status(400).json({
                    message: errors
                })
            }
            const mobile = await mobileModel.create(req.body);
            res.status(200).json({
                message: "Done",
                data: mobile
            })
        } catch (error) {
            res.status(500).json({
                message: "error",
                error: error.message
            })
        }
    }
    async put(req, res) {
        try {
            const { title, price, img, rate } = req.body
            const { error } = mobilePut.validate({ title, price, img, rate })
            if (error) {
                const errors = error.details.map((err) => err.message)
                return res.status(400).json({
                    message: errors
                })
            }
            const mobile = await mobileModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!mobile) {
                return res.status(404).json({
                    message: "Not Found"
                })
            }
            res.status(200).json({
                message: "Done",
                data: mobile
            })
        } catch (error) {
            res.status(400).json({
                message: "error",
                error: error.message
            })
        }
    }
    async delete(req, res) {
        try {
            const mobile = await mobileModel.findByIdAndDelete(req.params.id);
            if (!mobile) {
                return res.status(404).json({
                    message: "Not Found"
                })
            }
            res.status(200).json({
                message: "Done",
                data: mobile
            })
        } catch (error) {
            res.status(400).json({
                message: "error",
                error: error.message
            })
        }
    }
}
export default MobileController