import CommentService from "../services/comment.service.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

export const addComments = async (req, res, next) => {
    try {
        const { bookId } = req.params; // Get book ID from URL params
        const userId = req.user._id; // Get user ID from logged-in user
        const { comment, rating } = req.body; // Get comment & rating from request body

        // Ensure both comment and rating are provided
        if (!comment || !rating) {
            throw new ApiError(400, "Comment and rating are required");
        }

        // Call service to create the comment
        const newComment = await CommentService.createComment({ comment, rating }, bookId, userId);

        return res.status(201).json(new ApiResponse(201, newComment, "Comment added successfully"));
    } catch (error) {
        next(error); // Pass error to the error-handling middleware
    }
};
