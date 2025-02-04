import mongoose, { Schema } from "mongoose";

const opts = { timestamps: true };

const schoolSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    users: [{
        fullname: String,
        departmentName: String,
        levelName: String
    }],
    books: [{ 
        title: String, 
        departmentName: String, 
        levelName: String 
    }]
}, { opts })

export const School = mongoose.model("School", schoolSchema)