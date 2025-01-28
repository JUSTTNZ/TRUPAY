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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
}, { opts })

export const School = mongoose.model("School", schoolSchema)