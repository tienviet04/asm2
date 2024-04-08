import Joi from "joi";

const authRes = Joi.object({
    email: Joi.string().email(),
    password: Joi.string()

})

export default authRes