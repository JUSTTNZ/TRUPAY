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

    async createComment(commentObject, bookId, userId) { // Accept bookId & userId separately
        try {
            const { comment, rating } = commentObject;

            // Ensure the user exists
            const loggedInUser = await this._User.findById(userId);
            if (!loggedInUser) {
                throw new ApiError(404, "User not found");
            }

            // Ensure the book exists
            const bookExists = await this._Book.findById(bookId);
            if (!bookExists) {
                throw new ApiError(404, "Book not found");
            }

            // Create new comment
            const newComment = await this._Comment.create({
                user: { _id: userId, name: loggedInUser.name }, // Include user name
                book: { _id: bookId, title: bookExists.title }, // Include book title
                comment,
                rating
            });

            if (!newComment) {
                throw new ApiError(400, "An error occurred while creating comment.");
            }

            // Add comment to book's comments array
            await this._Book.findByIdAndUpdate(
                bookData._id,
                {
                    $push: {
                        comments: {
                            user: newComment.user,
                            commentRating: newComment.rating,
                            comment: newComment.comment
                        }
                    }
                },
                { new: true }
            );

            return newComment;
        } catch (error) {
            console.error(error);
            throw new ApiError(400, "An error occurred, can't comment on this book.");
        }
    }
}

export default new CommentService();
