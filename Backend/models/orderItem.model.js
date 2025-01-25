import mongoose, { Schema } from "mongoose";

const opts = { timestamps: true }

const orderItemSchema = new Schema({
    order_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "order_id is required."],
        ref: "Order"
    },
    book_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "book_id is required."],
        ref: "Book"
    },
    quantity: {
        type: Number,
        required: [true, "quantity is required."]
    },
    price: {
        type: Number,
        required: [true, "price is required."]
    }

}, opts)


export default mongoose.model("OrderItem", orderItemSchema);