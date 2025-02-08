
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
    school: {
        _id: { type: mongoose.Schema.Types.ObjectId, ref: "School", required: true },
        name: { type: String, required: true },
    },
    department: {
        _id: { type: mongoose.Schema.Types.ObjectId, ref: "Department", required: true },
        name: { type: String, required: true },
    },
    level: {
        _id: { type: mongoose.Schema.Types.ObjectId, ref: "Level", required: true },
        name: { type: String, required: true },
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
}, opts)


export const Book = mongoose.model("Book", bookSchema);