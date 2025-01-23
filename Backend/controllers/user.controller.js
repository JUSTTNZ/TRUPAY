import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import  { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/users.models.js";

const generateAccessToken = async(userId) => {
    try {
        const user = await User.findById(userId)

        if(!user) {
            throw new ApiError(404, "User not found")
        }

        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({validateBeforeSave:false})
        return {accessToken, refreshToken}
    } catch (error) {
        throw new ApiError(403, "Something went wrong while generating access and refresh token")
    }
}

const registerUser = asyncHandler(async (req, res) => {
    const {fullname, email, username, password, phoneNumber, school, department, level, registrationNumber} = req.body;

    // validation 
    if([username, fullname, email, password, phoneNumber, school, department, level, registrationNumber].some((field) => field?.trim() === "")) {
        console.log(error);
        throw new ApiError(400, "All fields are required");
    }

    const existingUser = await User.findOne({
        $or: [{username}, {email}, {registrationNumber}, {phoneNumber}]
    })
    if(existingUser) {
        throw new ApiError(400, "User already exists")
    }

    try {
        const user = await User.create({
            username: username.toLowerCase(),
            fullname,
            email,
            password,
            phoneNumber,
            school,
            department,
            level,
            registrationNumber      
        })

        const createdUser = await User.findById(user._id).select("-password -refreshToken")

        if(!createdUser) {
            throw new ApiError(401, "Something went wrong while registering user")
        }

        return res
        .status(201)
        .json(new ApiResponse(200, createdUser, "User registered successfully"))

    } catch (error) {
        console.log("User creation failed", error);
    }
})

export {
    registerUser
}