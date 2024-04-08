import Joi from "joi";

const mobilePost = Joi.object({
    title: Joi.string().required().min(1).max(20),
    img: Joi.string().required(),
    price: Joi.number().required().min(0),
    rate: Joi.string().min(1).max(5).required()
})


const mobilePut = Joi.object({
    title: Joi.string().empty().messages({
        'any.required': 'Title is required.',
        'string.empty': 'Title cannot be empty.'
    }),
    price: Joi.number().min(0).required().messages({
        'any.required': 'Price is required.',
        'number.base': 'Price must be a number.',
        'number.min': 'Price must be greater than or equal to 0.'
    }),
    rate: Joi.number().min(0).max(5).required().messages({
        'any.required': 'Rate is required.',
        'number.base': 'Rate must be a number.',
        'number.min': 'Rate must be greater than or equal to 0.'
    }),
    img: Joi.string().required().messages({
        'any.required': 'Img is required.',
        'number.base': 'Img must be a number.',

    })
});
export { mobilePost, mobilePut };