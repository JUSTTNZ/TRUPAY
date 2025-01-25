import mongoose, { Schema } from "mongoose";

const opts = { timestamps: trure };

const schoolSchema = new Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "description is required"],
        trim: true
    }
}, { opts })





export default mongoose.model("School", schoolSchema)