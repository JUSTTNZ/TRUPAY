import mongoose, { Schema } from "mongoose";

const opts = { timestamp: true }

const transactionSchema = new Schema({
    order_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "order_id is required."],
        ref: "Order"
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "user_id is required."],
        ref: "User"
    },
    amount: {
        type: Number,
        required: [true, "amount is required."]
    },
    payment_method: {
        type: String,
        enum: ["bank", "card", "transfer"],
        required: [true, "payment_method is required."]
    },
    payment_gateway: {
        type: String,
        enum: ["paystack", "stripe"],
        required: [true, "payment_gateway is required."]
    },
    status: {
        type: String,
        enum: ["success", "failed", "pending"]
    }
}, { opts })


export default mongoose.model("Transaction", transactionSchema);