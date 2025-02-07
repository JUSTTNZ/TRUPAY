import { Comment } from "../models/comment.model.js" 
import { Book } from "../models/book.model.js";
import { User } from "../models/users.models.js"
import { ApiError } from "../utils/ApiError.js";

class CommentService  {

    constructor() {
        this._Comment = Comment
        this._Book = Book
        this._User = User
    }

    async createComment (commentObject) {

        try {
            
            const { user, book, rating, comment  } = commentObject
            const loggedInUser = await User.findById(req.user._id)
            loggedInUser = commentObject.user._id

            const newComment = await Comment.create(commentObject)

            if(!newComment) {
                throw new ApiError(400, "An error occurred")
            }

            return newComment
        } catch (error) {
            throw new ApiError(400, "An error occurred, cant comment on this book")
        }
    }
}

export default new CommentService()