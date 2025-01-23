import Joi from "joi"

const bookValidator = async (req, res, next) => {
    const bookSchema = Joi.object({
        title: Joi.string().required(),
        author: Joi.string().required(),
        description: Joi.string().required(),
        //test will pass if the value(when price is a string) can be converted to a number.
        price: Joi.number().required(),
        //test will pass if the value(when stock is a string) can be converted to a number.
        stock: Joi.number().required(),
    })

    await bookSchema.validateAsync(req, { abortEarly: false });
    next()
}

export default { bookValidator }