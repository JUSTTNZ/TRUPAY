import CommentService from "../services/comment.service.js";
import { Comment } from '../models/comment.model.js';
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

const addComments = asyncHandler(async (req, res, next) => {
    try {
        const { bookId } = req.params; 
        //console.log("User from JWT:", req.user); 
        const userId = req.user._id;
        const { comment, rating } = req.body;

        
        if (!comment || !rating) {
            throw new ApiError(400, "Comment and rating are required");
        }

        const newComment = await CommentService.createComment({ comment, rating }, bookId, userId);

        return res.status(201).json(new ApiResponse(201, newComment, "Comment added successfully"));
    } catch (error) {
        next(error); 
    }
});

const deleteComments = asyncHandler(async(req, res) => {

    try {
        const { commentId } = req.params

        if(!commentId) {
            throw new ApiError(400, "commentId required")
        }

        const comment = await Comment.findByIdAndDelete(commentId).populate('user').select('book user')

        if(!comment) {
            throw new ApiError(404, "Comment not found")
        }

        const commentOwnerId = comment.user?._id
        console.log(req.user._id,);
        console.log(comment.user?._id)
        if(!commentOwnerId.equals(req.user._id)) {
            throw new ApiError(401, "Unauthorized, cant delete comment")
        } 
        
        return res
            .status(200)
            .json(new ApiResponse(201, comment, "Comment successfully deleted"))
    }catch (error) {
        console.log(error);
        throw new ApiError(400, "An error occurred")
    }
})

const getAllComments = asyncHandler(async(req, res) => {
    try {
        const { bookId } = req.params

        if(!bookId) {
            throw new ApiError(400, "BookId is required")
        }
        const comment = await Comment.find(bookId).populate('book user').select('book')
        
        if(!comment) {
            throw new ApiError(404, "Comment not found")
        }

        return res
            .status(200)
            .json(new ApiResponse(201, comment, "All comments retrieved"))  
    } catch (error) {
        throw new ApiError(400, "An error occurred")
    }
    
})

export {
    addComments,
    deleteComments
}