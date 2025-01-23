import mongoose, {Schema} from "mongoose";
import validator from 'validator'

const UserSchema = new Schema (
    {
        username: {
            type: String,
            required: true,
            unique: [true, "username already exists, please try another username"],
            lowercase: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowerCase: true,
            trim: true,
            validate: {
                validator: validator.isEmail,
                message: 'Please provide valid email'
            }
        },
        fullname: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        registrationNumber: {
            type: String,
            required: true,
            unique: [true, "Registration number already exists"],
            trim: true,
            match: [
                 /^202[0-4]\/(hnd|nd)\/\d{5}\/[a-zA-Z]{2}$/,
                'Invalid registration number format. Expected format: Year/HND-or-ND/regNumber/departmentAbbreviation YYYY/HND-or-ND/#####/XX', 
            ],
        },
        password: {
            type: String,
            required: [true, "password is required"]
        },
        role: {
            type: String,
            enum: ['admin', 'user'],
            default: 'user'
        },
        phoneNumber: {
            type: Number,
            required: true,
            unique: [true, "Phonenumber already exists"],
            trim: true,
            match: [
                /^(070|080|090|081|091)\d{8}$/,
                'Phone number must be 11 digits and start with one of the valid prefixes: 070, 080, 090, 081, 091.',
            ],
        },
        school: {
            type: String,
            required: true,
            trim: true,
        },
        department: {
            type: String,
            required: true,
            trim: true
        },
        level: {
            type: String,
            required: true,
            upperCase: true,
            enum: ['ND1', 'ND2', 'HND1', 'HND2']
        },
    },
    {timestamps: true}
)

export const User = mongoose.model("User", UserSchema)
