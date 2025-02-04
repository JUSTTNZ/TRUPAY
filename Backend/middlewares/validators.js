import Joi from "joi"
import { School } from '../models/school.model.js';
import { Department } from '../models/department.model.js';
import { Level } from '../models/levels.model.js';


const bookValidator = async (req, res, next) => {
    const bookSchema = Joi.object({
        title: Joi.string().required(),
        author: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.number().required(),
        stock_quantity: Joi.number().required(),
        school: Joi.string().required(),
        department: Joi.string().required(),
        level: Joi.string().required()
    });

    try {
        await bookSchema.validateAsync(req.body, { abortEarly: false });

        // Fetch the documents based on names
        const schoolDoc = await School.findOne({ name: req.body.school.trim() });
        const departmentDoc = await Department.findOne({ name: req.body.department.trim() });
        const levelDoc = await Level.findOne({ name: req.body.level.trim() });

        if (!schoolDoc || !departmentDoc || !levelDoc) {
            return res.status(400).json({ message: "Invalid school, department, or level" });
        }

        // Transform them into objects with _id and name
        req.body.school = { _id: schoolDoc._id, name: schoolDoc.name };
        req.body.department = { _id: departmentDoc._id, name: departmentDoc.name };
        req.body.level = { _id: levelDoc._id, name: levelDoc.name };

        next();
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Validation error occurred", errors: error.message });
    }
};





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

const userRegisterValidator = async (req, res, next) => {
    const userSchema = Joi.object({
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        fullname: Joi.string().required(),
        registrationNumber: Joi.string().required(),
        password: Joi.string().required(),
        phoneNumber: Joi.string().required(),
        school: Joi.string().required(),
        department: Joi.string().required(),
        level: Joi.string().required()
    });

    try {
        await userSchema.validateAsync(req.body, { abortEarly: false });

        // Fetch the school, department, and level details
        const schoolDoc = await School.findOne({ name: req.body.school.trim() });
        const departmentDoc = await Department.findOne({ name: req.body.department.trim() });
        const levelDoc = await Level.findOne({ name: req.body.level.trim() });

        if (!schoolDoc || !departmentDoc || !levelDoc) {
            return res.status(400).json({ message: "Invalid school, department, or level" });
        }

        // Store both ObjectId and name
        req.body.school = { _id: schoolDoc._id, name: schoolDoc.name };
        req.body.department = { _id: departmentDoc._id, name: departmentDoc.name };
        req.body.level = { _id: levelDoc._id, name: levelDoc.name };

        next();
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Validation error occurred", errors: error.message });
    }
};



const userLoginValidator = async (req, _res, next) => {
    const loginSchema = Joi.object({
        email: Joi.string().email().optional(),
        registrationNumber: Joi.string().optional(),
        password: Joi.string().required()
    }).or('email', 'registrationNumber');

    await loginSchema.validateAsync(req.body, { abortEarly: false });
    next();
};


export {
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