import { Book } from '../models/book.model.js'
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const addBooks = asyncHandler(async(req, res) => {

    const { title, author, description, price, stock_quantity, school, department, level} = req.body;

    if(
        [title, author, description, price, stock_quantity, school, department, level].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(401, "All fields are required")
    }

    const newBook = await Book.create({
        title, 
        author, 
        description, 
        price, 
        stock_quantity, 
        school, 
        department, 
        level
    })

    return res
    .status(200)
    .json(new ApiResponse(201, newBook, "Book added successfully"))
})

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