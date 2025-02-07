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
    const totalNumOfQueriedDepartment = department.length;
    const NumOfPages = Math.ceil(totalNumOfDepartment / limit)

    return res
    .status(200)
    .json(new ApiResponse(201, {department, totalNumOfDepartment, totalNumOfQueriedDepartment, NumOfPages}))

})

const getAllSchoolDepartments = asyncHandler(async(req, res) => {
    try {
        const user = await User.findById(req.user?._id).populate('school')

        if(!user) {
            throw new ApiError(401, "User not found")
        }

        const schoolId = user.school._id
        const departments = await Department.find({school: schoolId}).select('-users -books')

        return res 
        .status(200)
        .json(new ApiResponse(201, departments, "Departments uploaded successfully"))
    } catch (error) {
        console.log(error.message)
        throw new ApiError(400, "An error occurred")
    }
})

const getDepartment = asyncHandler(async(req, res) => {
    try {
        const {name} = req.params
        if(!name) {
            throw new ApiError(400, "Please input name of department")
        }
        const user = await User.findById(req.user._id).populate('school department')
        if(!user) {
            throw new ApiError(401, "User not found")
        }
        const department = await Department.findOne({name: new RegExp(`^${name}$`, 'i')}).select('-users')

        if(!department) {
            throw new ApiError(400, "department not found")
        }

        if (!user.department || !user.department._id) {
            throw new ApiError(401, "You do not have a department assigned");
        }
            

        if(user.department._id.toString() !== department._id.toString()) {
            throw new ApiError(401, "You can only access your own department");
        }
        
        return res
        .status(200)
        .json(new ApiResponse(201, department, "Department uploaded successfully"))
    } catch (error) {
        console.log(error.message);
        throw new ApiError(400, "An error occurred")
    }
})

export {
    getAllDepartments,
    getAllSchoolDepartments,
    getDepartment
}

