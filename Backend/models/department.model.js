import mongoose, { Schema } from "mongoose";

const opts = { timestamps: true }

const departmentSchema = new Schema({
    school_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "school_id required."]
    },
    name: {
        type: String,
        required: [true, "name is required."],
        trim: true
    },
    description: {
        type: String,
        required: [true, "description is required."],
        trim: true
    }
}, opts)

export default mongoose.model("Department", departmentSchema);