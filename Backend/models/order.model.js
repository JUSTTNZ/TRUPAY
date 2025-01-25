import mongoose, { Schema } from "mongoose";

const opts = { timestamps: true }

const orderSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "user_id is required"],
        ref: "User"
    },
    order_items: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "order_items is required"],
        ref: "Order"
    },
    status: {
        type: String,
        enum: ["pending", "collected"],
        required: [true, "status is required and should have a status of either 'pending' or 'collected'"],
        default: "pending"
    },
    total_price: {
        type: Number,
        required: [true, "total_price is required"]
    },
    payment_status: {
        type: String,
        enum: ["success", "failed", "pending"],
        required: [true, "payment_status is requird and should have a status of either ;success', 'failed' or 'pending'"],
        default: "pending"
    }
}, opts)


export default mongoose.model("Order", orderSchema)