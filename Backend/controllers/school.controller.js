import { School } from '../models/school.model.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/ApiError.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import { User } from '../models/users.models.js'

// const createSchool = asyncHandler(async(req, res) => {
//     const {registrationNumber} = req.query

//     if(!registrationNumber) {
//         throw new ApiError(401, "Field cannot be empty, please type in your registration number")
//     }

//     try {
//         const existingUser = await User.find({registrationNumber})

//     if(!existingUser) {
//         throw new ApiError(401, "User does not exist")
//     }

//     const school = await School.create({
//         schoolName,
//         description
//     })

//     if(!school) {
//         throw new ApiError(401, "Can't create school, please try again")
//     }

//     const createdSchool = await School.findById(school._id)

//     if(!createdSchool) {
//         console.log(error);
//         throw new ApiError(401, "Can't create school")
//     }

//     return res
//     .status(200)
//     .json(new ApiResponse(201), createdSchool, "School created successfully")
//     } catch (error) {
//         throw new ApiError(400, "An error occurred")
//     }
// })

const getAllSchools = asyncHandler(async (req, res) => {
    try {
        let result = School.find().select('-users');

        // Sorting
        const sort = req.query.sort;
        if (sort === 'a-z') {
            result = result.sort('name');
        } else if (sort === 'z-a') {
            result = result.sort('-name');
        }

        // Pagination
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        result = result.skip(skip).limit(limit);
        const schools = await result; // Await the final query

        const totalSchools = await School.countDocuments(); // Fix undefined queryObject
        const numOfPages = Math.ceil(totalSchools / limit);

        res.status(200).json({ schools, totalSchools, numOfPages });
    } catch (error) {
        console.error("Error fetching schools:", error);
        throw new ApiError(500, error.message || "Failed to fetch schools");
    }
});


const getSchool = (async(req, res) => {
    const { name } = req.params;

    try {
        const school = await School.findOne({name})

        if(!school) {
            throw new ApiError(404, `No school found with name ${name}`)
        }

        return res
        .status(200)
        .json(new ApiResponse(200, "School found", school))
    } catch (error) {
        throw new ApiError(404, "School not found")
    }
})

export {
    getAllSchools,
    getSchool
}
