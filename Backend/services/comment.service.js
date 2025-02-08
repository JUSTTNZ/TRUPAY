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
    
          
            const loggedInUser = await this._User.findById(userId).select("_id username");
            console.log("Fetched user:", loggedInUser); 
    
            if (!loggedInUser || !loggedInUser.username) {
                throw new ApiError(404, "User not found or user name missing");
            }
    
            // Ensure the book exists
            const bookExists = await this._Book.findById(bookId).select("_id title");
            console.log("Fetched book:", bookExists); 
    
            if (!bookExists || !bookExists.title) {
                throw new ApiError(404, "Book not found or book title missing");
            }
    
            // Create new comment
            const newComment = await this._Comment.create({
                user: { _id: userId, username: loggedInUser.username },
                book: { _id: bookId, title: bookExists.title },
                comment,
                rating
            });
            
            if (!bookExists.comments) {
                bookExists.comments = [];  // Initialize the comments array if it doesn't exist
            }
    
            // Push the new comment ID into the book's comments array
            bookExists.comments.push(newComment._id);
    
            // Save the updated book
            await bookExists.save();
    
            return newComment;
        } catch (error) {
            console.error("Error in createComment:", error);
            throw new ApiError(400, "An error occurred, can't comment on this book.");
        }
    }
    
}

export default new CommentService();
