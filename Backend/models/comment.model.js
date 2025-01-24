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
        ref: "User"
    },
    comment: {
        type: String,
        required: [true, "comment is required."],
    },
    rating: {
        type: String,
        required: [true, "rating is required."]
    }
})


export default mongoose.model("Comment", commentSchema);