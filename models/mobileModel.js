import mongoose from "mongoose"
const Schema = mongoose.Schema
const MobileSchema = new Schema(
    {
        title: {
            type: String,
            require: true
        },
        price: {
            type: Number,
            min: 0
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: "Category",
            require: true,
        },
        img: {
            type: String,

        },
        rate: {
            type: Number,
            min: 1,
            max: 5
        },
    }
)
const mobile = mongoose.model("mobiles", MobileSchema)
export default mobile