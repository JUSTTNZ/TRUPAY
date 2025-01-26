import { User } from '../models/users.models.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError }  from '../utils/ApiError.js'
import jwt from "jsonwebtoken"

export const verifyJWT = asyncHandler(async(req, _, next) => {
    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
    console.log(token);

    if(!token) {
        throw new ApiError(401, "Unauthorized")
    }

    try {
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

        const user = await User.findById(decodedToken?._id).select("-password, -refreshToken")

        if(!user) {
            throw new ApiError(401, "Unauthorized")
        }

        req.user = user

        next()
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token")
    }
})