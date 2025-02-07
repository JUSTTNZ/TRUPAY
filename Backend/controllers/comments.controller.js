import { Comments } from '../models/comments.js' 
import { Book } from '../models/book.model.js'
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { User } from '../models/users.models.js';

const addComments = asyncHandler(async(req, res) => {
    const comment
    const commentObject = req.body

    
})

exports {
    addComments,
}