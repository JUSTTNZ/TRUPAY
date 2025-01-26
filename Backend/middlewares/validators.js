import Joi from "joi"

const bookValidator = async (req, _res, next) => {
    const bookSchema = Joi.object({
        title: Joi.string().required(),
        author: Joi.string().required(),
        description: Joi.string().required(),
        //test will pass if the value(when price is a string) can be converted to a number.
        price: Joi.number().required(),
        //test will pass if the value(when stock is a string) can be converted to a number.
        stock: Joi.number().required(),
    })

    await bookSchema.validateAsync(req.body, { abortEarly: false });
    next()
}


const categoryValidator = async (req, _res, next) => {
    const categorySchema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required()
    });

    await categorySchema.validateAsync(req.body, { abortEarly: false });
    next();
}

const commentValidator = async (req, _res, next) => {
    const commentSchema = Joi.object({
        comment: Joi.string().required(),
        rating: Joi.number().required()
    })

    await commentSchema.validateAsync(req.body, { abortEarly: false });
    next();
}

const departmentValidator = async (req, _res, next) => {
    const departmentSchema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required()
    })

    await departmentSchema.validateAsync(req.body, { abortEarly: false })
    next();
}

const orderValidator = async (req, _res, next) => {
    const orderSchema = Joi.object({
        status: Joi.string().required(),
        total_price: Joi.number().required(),
        payment_status: Joi.string().required()
    })

    await orderSchema.validateAsync(req.body, { abortEarly: false });
    next()
}

const orderItemValidator = async (req, _res, next) => {
    const orderItemSchema = Joi.object({
        quantity: Joi.number().required(),
        price: Joi.number().required()
    })

    await orderItemSchema.validateAsync(req.body, { abortEarly: false });
    next()
}

const schoolValidator = async (req, _res, next) => {
    const schoolSchema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
    })

    await schoolSchema.validateAsync(req.body, { abortEarly: false });
    next()
}

const transactionValidator = async (req, _res, next) => {
    const transactionSchema = Joi.object({
        amount: Joi.number().required(),
        payment_method: Joi.string().required(),
        payment_gateway: Joi.string().required(),
        status: Joi.string().required()
    })

    await transactionSchema.validateAsync(req.body, { abortEarly: false });
    next()
}

const userRegisterValidator = async (req, _res, next) => {
    const userSchema = Joi.object({
        username: Joi.string().required(),
        email: Joi.string().required(),
        fullname: Joi.string().required(),
        registrationNumber: Joi.string().required(),
        password: Joi.string().required(),
        phoneNumber: Joi.string().required(),
        school: Joi.string().required(),
        department: Joi.string().required(),
        level: Joi.string().required()
    });

    await userSchema.validateAsync(req.body, { abortEarly: false });
    next();
};

const userLoginValidator = async (req, _res, next) => {
    const loginSchema = Joi.object({
        email: Joi.string().email().optional(),
        username: Joi.string().optional(),
        registrationNumber: Joi.string().optional(),
        password: Joi.string().required()
    }).or('email', 'username', 'registrationNumber');

    await loginSchema.validateAsync(req.body, { abortEarly: false });
    next();
};


export default {
    bookValidator,
    categoryValidator,
    commentValidator,
    departmentValidator,
    orderValidator,
    orderItemValidator,
    schoolValidator,
    transactionValidator,
    userLoginValidator,
    userRegisterValidator
}