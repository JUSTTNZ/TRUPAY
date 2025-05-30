import { Book } from '../models/book.model.js'
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import BookService from "../services/book.service.js";
import { User } from '../models/users.models.js';

const addBooks = asyncHandler(async (req, res, next) => {
    try {

        const bookObject = req.body;

        const book = await BookService.createBook(bookObject);

        return res.status(201).json(new ApiResponse(201, "Book created successfully", book));
    } catch (error) {
        console.error("Error adding:", error);
        return res.status(500).json({ message: "An error occurred while adding book", error: error.message });
    }
});

const removeBooks = asyncHandler(async(req, res) => {
    const {bookId} = req.params

    if(!bookId) {
        throw new ApiError(401, "BookId is required")
    }

    const book = await Book.findById(bookId).populate('title level')

    if(!book) {
        throw new ApiError(404, "Book not found")
    }

    const bookTitle = book.title
    await book.deleteOne();
    return res
    .status(200)
    .json(new ApiResponse(201, `${bookTitle} deleted successfully`))
})

const getBook = asyncHandler(async(req, res) => {
    try {
        const { title} = req.params
    
        if(!title) {
            throw new ApiError(401, "Title field is required")
        }
    
        const user = await User.findById(req.user?._id).populate('school department level')
    
        if(!user) {
            throw new ApiError(404, "User not found")
        }
    
        const book = await Book.findOne({ title: new RegExp(`^${title}$`, 'i') }).populate("department level author").select("description price stock_quantity department level");

    
        if(!book) {
            throw new ApiError(404, "Book not found")
        }

        if (!book.department || !book.level) {
            throw new ApiError(400, "Book department or level information is missing");
        }
    
        if(user.department._id.toString() !== book.department._id.toString() || user.level._id.toString() !== book.level._id.toString()) {
            
            throw new ApiError(401, "You can only access books in your school, department or level")
        }
        return res
        .status(200)
        .json(new ApiResponse(201, {book}, "Book successfully uploaded"))
    } catch (error) {
        console.log(error)
        throw new ApiError(400, error, "An error occurred")
    }
})

const getAllBooks = asyncHandler(async(req, res) => {
    try {
        if(!req.user) {
            throw new ApiError(401, "User not found")
        }
    
    
        const books = await Book.find().populate('school department level').select('-school -department -level')

        const userBooks = books.filter((book) => book.department._id.toString() === req.user.department._id.toString() && book.level._id.toString() === req.user.level._id.toString())

        if (userBooks.length === 0) {
            throw new ApiError(401, "Cannot access books");
        }

        const filteredBooks = userBooks.map(({school, department, level, ...book}) => book)
    
        return res
        .status(201)
        .json(new ApiResponse(201, {userBooks: filteredBooks}, "Books successfully Uploaded"))
    } catch (error) {
        console.log(error)
        throw new ApiError(400, "An error occurred")
    }
})


export {
    addBooks,
    removeBooks,
    getBook,
    getAllBooks
}