import mongoose from "mongoose"
const Schema = mongoose.Schema
const UserSchema = new Schema(
    {
        fullname: {
            type: String,

        },
        email: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        },
    }
)
const user = mongoose.model("users", UserSchema)
export default user