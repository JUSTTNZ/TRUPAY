import { Comment } from "../models/comment.model.js";
import { Book } from "../models/book.model.js";
import { User } from "../models/users.models.js";
import { ApiError } from "../utils/ApiError.js";

class CommentService {
    constructor() {
        this._Comment = Comment;
        this._Book = Book;
        this._User = User;
    }

    async createComment(commentObject, bookId, userId) {
        try {
            const { comment, rating } = commentObject;
    
            // Ensure the user exists and get user name
            const loggedInUser = await this._User.findById(userId).select("_id name");
            console.log("Fetched user:", loggedInUser); // Debugging log
    
            if (!loggedInUser || !loggedInUser.name) {
                throw new ApiError(404, "User not found or user name missing");
            }
    
            // Ensure the book exists
            const bookExists = await this._Book.findById(bookId).select("_id title");
            console.log("Fetched book:", bookExists); // Debugging log
    
            if (!bookExists || !bookExists.title) {
                throw new ApiError(404, "Book not found or book title missing");
            }
    
            // Create new comment
            const newComment = await this._Comment.create({
                user: { _id: userId, name: loggedInUser.name },
                book: { _id: bookId, title: bookExists.title },
                comment,
                rating
            });
    
            return newComment;
        } catch (error) {
            console.error("Error in createComment:", error);
            throw new ApiError(400, "An error occurred, can't comment on this book.");
        }
    }
    
}

export default new CommentService();
