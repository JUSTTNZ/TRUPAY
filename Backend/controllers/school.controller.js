import { School } from '../models/school.model.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/ApiError.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import { User } from '../models/users.models.js'

const createSchool = asyncHandler(async(req, res) => {
    const {registrationNumber} = req.query

    if(!registrationNumber) {
        throw new ApiError(401, "Field cannot be empty, please type in your registration number")
    }

    try {
        const existingUser = await User.find({registrationNumber})

    if(!existingUser) {
        throw new ApiError(401, "User does not exist")
    }

    const school = await School.create({
        schoolName,
        description
    })

    if(!school) {
        throw new ApiError(401, "Can't create school, please try again")
    }

    const createdSchool = await School.findById(school._id)

    if(!createdSchool) {
        console.log(error);
        throw new ApiError(401, "Can't create school")
    }

    return res
    .status(200)
    .json(new ApiResponse(201), createdSchool, "School created successfully")
    } catch (error) {
        throw new ApiError(400, "An error occurred")
    }
})

const getAllSchools = asyncHandler(async(req, res) => {
    
})

export {
    createSchool,
    getAllSchools,
}
