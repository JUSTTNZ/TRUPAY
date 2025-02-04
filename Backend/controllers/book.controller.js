import { Book } from '../models/book.model.js'
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import BookService from "../services/book.service.js";

const addBooks = async (req, res, next) => {
    try {

        const bookObject = req.body;

        // Create book
        const book = await BookService.createBook(bookObject);

        return res.status(201).json(new ApiResponse(201, "Book created successfully", book));
    } catch (error) {
        console.error("Error adding:", error);
        return res.status(500).json({ message: "An error occurred while adding book", error: error.message });
    }
};

const removeBooks = asyncHandler(async(req, res) => {
    const {bookId} = req.params

    if(!bookId) {
        throw new ApiError(401, "BookId is required")
    }

    const book = await Book.findById(bookId).populate('title level')

    if(!book) {
        throw new ApiError(404, "Book not found")
    }

    await book.deleteOne();
    return res
    .status(200
    .json(new ApiResponse(201, null, "Book deleted successfully"))
    )

})


export {
    addBooks,
    removeBooks
}