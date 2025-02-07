import mongoose, { Schema } from "mongoose";

const opts = { timestamps: true };

const commentSchema = new Schema({
    user: {
        _id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        name: { type: String, required: true },
    },
    book: {
        _id: { type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true },
        title: { type: String, required: true },
    },
    comment: {
        type: String,
        required: [true, "comment is required."],
    },
    rating: {
        type: Number,
        required: [true, "rating is required."]
    }
})


export default mongoose.model("Comment", commentSchema);