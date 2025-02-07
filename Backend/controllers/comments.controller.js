import { Comments } from '../models/comments.js' 
import { Book } from '../models/book.model.js'
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { User } from '../models/users.models.js';
import commentService from '../services/comment.service.js'

const addComments = asyncHandler(async(req, res) => {
    const { book } = req.params
    if(!book) {
        throw new ApiError(401, "bookId needed")
    }
    const commentObject = req.body

    const comment = await commentService.createComment(commentObject)

    return res
        .status(200)
        .json(new ApiResponse(200, comment, "comment successfully added "))  
})

export {
    addComments,
}