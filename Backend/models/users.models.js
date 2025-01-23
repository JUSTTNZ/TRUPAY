
import mongoose, {Schema} from "mongoose";


const UserSchema = new Schema (
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowerCase: true,
            trim: true
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
            trim: true,
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
            trim: true
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
