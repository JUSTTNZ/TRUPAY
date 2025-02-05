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

export const adminAuth = asyncHandler(async(req, res, next) => {

    try {
        const token = req.header("Authorization")

        if(!token) {
            throw new ApiError(401, "Access denied, no token provided")
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user =  decoded

        const user = await User.findById(req.user.id);
        if (!user) {
            throw new ApiError(404, "User not found");
        }

        // Check if user is an admin
        if (user.role !== "admin") {
            throw new ApiError(403, "Access denied. Admins only.");
        }
        next(); 
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Server error" });
    }
})