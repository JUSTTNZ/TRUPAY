import mongoose, { Schema } from "mongoose";

const opts = { timestamps: true }

const departmentSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'School',
        required: true
    },
    schoolName: {
        type: String,
        required: true,
        trim: true
    },
    users: [{
        fullname: String,
        levelName: String
    }],
    books: [{ 
        title: String, 
        levelName: String 
    }]
}, opts)

export const Department = mongoose.model("Department", departmentSchema);
