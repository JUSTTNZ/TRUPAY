import { Book } from "../models/book.model.js";
import { School } from "../models/school.model.js";
import { Department } from "../models/department.model.js";
import { Level } from "../models/levels.model.js";
import { ApiError } from "../utils/ApiError.js";

class BookService {
    constructor() {
        this._Book = Book;
        this._School = School;
        this._Department = Department;
        this._Level = Level;
    }

    async createBook(bookObject) {
        try {
            const { title, school, department, level } = bookObject;

            // Check if the book already exists
            const existingBook = await this._Book.findOne({ title });
            if (existingBook) {
                throw new ApiError(400, "Book already exists");
            }

            // Create the Book
            const book = await this._Book.create(bookObject);
            if (!book) {
                throw new ApiError(401, "Something went wrong while registering book");
            }

            // Get the name of the school, department, and level
            const departmentDoc = await this._Department.findById(department).select("name");
            const levelDoc = await this._Level.findById(level).select("name");

            // Add the book reference to related collections
            await this._School.updateOne(
                { _id: school },
                { $push: { books: { title: book.title, departmentName: departmentDoc?.name, levelName: levelDoc?.name } } }
            );

            await this._Department.updateOne(
                { _id: department },
                { $push: { books: { title: book.title, levelName: levelDoc?.name } } }
            );

            await this._Level.updateOne(
                { _id: level },
                { $push: { books: { 
                            title: book.title, 
                            author: book.author, 
                            description: book.description, 
                            price: book.price, 
                            stock_quantity: book.stock_quantity 
                        } 
                    } 
                }
            );

            return book;
        } catch (error) {
            throw new ApiError(500, error.message);
        }
    }
}

export default new BookService();
