import { Level } from "../models/levels.model.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"



const getAllLevels = asyncHandler(async (req, res) => {
    if (!req.user) {
        throw new ApiError(401, "User not found");
    }

    if (!req.user.department || !req.user.department._id) {
        throw new ApiError(400, "User department not found");
    }

    const departmentId = req.user.department._id; 
    const departmentName = req.user.department.name;
    console.log("Department ID:", departmentId); 
    console.log("Department Name:", departmentName);
    
    const levels = await Level.find({ department: departmentId }).select('name department departmentName');

    if (!levels.length) {
        throw new ApiError(404, "No levels found for this department");
    }

    return res.status(200).json(new ApiResponse(200, levels, "Levels retrieved successfully"));
});

export { getAllLevels}