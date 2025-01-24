import mongoose, { Schema } from "mongoose";

const opts = { timestamps: true }

const bookSchema = new Schema({
    title: {
        type: String,
        required: [true, "title is required"],
        trim: true,
    },
    author: {
        type: String,
        required: [true, "author is required"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "description is required"],
        trim: true
    },
    price: {
        type: Number,
        required: [true, "price is required"],
    },
    stock_quantity: {
        type: Number,
        required: [true, "price is required"],
    },
    school_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "School",
        required: [true, "school_id is required"]
    },
    department_id: {
        type: mongoose.Schema.ObjectId,
        ref: "Department",
        required: [true, "department_id is required"]
    },
    level: {
        type: String,
        required: [true, "level is required"]
    }
}, opts)


export default mongoose.model("Book", bookSchema);