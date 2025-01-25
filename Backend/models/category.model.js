import mongoose, { Schema } from "mongoose";

const opts = { timestamps: true };

const categorySchema = new Schema({
    name: {
        type: String,
        required: [true, "name is required."],
        trim: true
    },
    description: {
        type: String,
        reqiured: [true, "description is required."]
    }
}, { opts })


export default mongoose.model("Category", categorySchema);