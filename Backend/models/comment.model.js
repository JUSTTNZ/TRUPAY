import mongoose, { Schema } from "mongoose";

const opts = { timestamps: true };

const commentSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "user_id is required."],
        ref: "User"
    },
    book_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "book_id is required."],
        ref: "Book"
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