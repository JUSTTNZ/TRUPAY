import mongoose, {Schema} from "mongoose";
import validator from 'validator'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

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

UserSchema.pre("save", async function(next) {
    if(this.isModified("password")) return
    next()
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

UserSchema.methods.comparePassword = async function(enteredPassword) {
    console.log("enteredPassword", enteredPassword);

    return await bcrypt.compare(enteredPassword, this.password)
}

UserSchema.methods.generateAccessToken = function() {
    // short lived token

    return jwt.sign({
        _id: this._id,
        username: this.username,
        fullname: this.fullname,
        email: this.email,
        registrationNumber: this.registrationNumber,
        role: this.role
    }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    })
}

UserSchema.methods.generateRefreshToken = function() {
    // long lived token

    return jwt.sign({
        _id: this._id,
    }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    })
}

export const User = mongoose.model("User", UserSchema)
