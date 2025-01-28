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
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
}, opts)

export const Department = mongoose.model("Department", departmentSchema);
