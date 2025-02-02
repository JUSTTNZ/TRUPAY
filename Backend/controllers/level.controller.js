import { Level } from "../models/levels.model.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"


getAllLevels = asyncHandler(async(req, res) => {
    const levels = await Level.find()

    if(!levels.length) {
        throw new ApiError(401, "No levels found")
    }

    return res
    .status(200)
    .json(new ApiResponse(201, levels, "Levels uploaded successfully"))
})