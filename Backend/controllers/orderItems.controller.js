import { orderItems } from '../models/orderItems.model.js';
import { Book } from '../models/book.model.js';
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

const addOrderItems = asyncHandler(async(req, res) => {
    const {orderItems} = req.params

    if(!orderItems || orderItems.length === 0) {
        throw new ApiError(400, "Order items required")
    } 


    const newOrderItems = await orderItems.create(orderItems)

    return res
        .status(201)
        .json()

})

export {
    addOrderItems
}