import { Department } from "../models/department.model.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { User } from "../models/users.models.js"

const getAllDepartments = asyncHandler(async(req, res) => {

    const {search, sort} = req.query

    const queryObject = {};
    
    if(search) {
        queryObject.name = { $regex: search, $options: 'i'}
    }

    let result = Department.find(queryObject).select('-users, -schoolName')

    if(sort === 'a-z') {
        result = result.sort('name')
    }

    else if(sort === 'z-a') {
        result = result.sort('-name')
    }


    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page - 1) * limit

    result = result.skip(skip).limit(limit)

    const department = await result
    const totalNumOfDepartment = await Department.countDocuments();
    const NumOfPages = Math.ceil(totalNumOfDepartment / limit)

    return res
    .status(200)
    .json(new ApiResponse(201, {department, totalNumOfDepartment, NumOfPages}))

})

const getDepartment = asyncHandler(async(req, res) => {
    try {
        const {name} = req.params
        if(!name) {
            throw new ApiError(400, "Please input name of department")
        }
        const user = await User.findById(req.user._id).populate('school, department')
        if(!user) {
            throw new ApiError(401, "User not found")
        }
        const department = await Department.findOne({name: new RegExp(`^${name}$`, 'i')}).select('-users')

        if(!department) {
            throw new ApiError(400, "department not found")
        }

        if(user.school._id?.toString() !== department.school._id?.toString()) {
            throw new ApiError(401, "Cant access unknown department")
        }
        
        return res
        .status(200)
        .json(new ApiResponse(201, department, "Department uploaded successfully"))
    } catch (error) {
        console.log(error.message);
        throw new ApiError(400, "Error occurred while searching for department")
    }
})

export {
    getAllDepartments,
    getDepartment
}

