import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/users.models.js";
import userService from "../services/user.service.js";
import jwt from "jsonwebtoken"

const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId)

        if (!user) {
            throw new ApiError(404, "User not found")
        }

        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false })
        return { accessToken, refreshToken }
    } catch (error) {
        throw new ApiError(403, "Something went wrong while generating access and refresh token")
    }
}

//test endpoint
const registerUser = async (req, res, next) => {
    try {
        // Validate user input and convert school/department/level to ObjectIds

        const userObject = req.body;

        // Create user
        const user = await userService.register(userObject);

        return res.status(201).json(new ApiResponse(201, "User created successfully", user));
    } catch (error) {
        console.error("Error registering user:", error);
        return res.status(500).json({ message: "An error occurred while registering user", error: error.message });
    }
};



const loginUser = asyncHandler(async (req, res) => {
    const { email, registrationNumber, password } = req.body

    if (
        [email, registrationNumber, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "Please provide required fields")
    }

    let user;

    if (email) {
        user = await User.findOne({ email })
    }
   
    else if (registrationNumber) {
        user = await User.findOne({ registrationNumber })
    }

    if (!user) {
        throw new ApiError(401, "Invalid credentials")
    }

    try {
        const validatePassword = await user.comparePassword(password)
        console.log("validatePassword", validatePassword);

        if (!validatePassword) {
            throw new ApiError(401, "Invalid credentials")
        }
    } catch (error) {
        console.log("Error validating password", error);
        throw new ApiError(401, "Error validating password", error)
    }

    try {
        const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id)

        const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

        if (!loggedInUser) {
            throw new ApiError(401, "Something went wrong while user was logging in")
        }

        const options = {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
        }

        return res
            .status(200)
            .cookie("refreshToken", refreshToken, options)
            .cookie("accessToken", accessToken, options)
            .json(new ApiResponse(200, loggedInUser, "User logged in successfully", { accessToken, refreshToken }
            ))
    }
    catch (error) {
        console.log("User login failed", error);
    }
})

const logOutUser = asyncHandler(async (req, res) => {

    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken: undefined,
            },
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
    }

    return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new ApiResponse(200, "User logged out successfully"))
})

const refreshAccessToken = asyncHandler(async (req, res) => {
    const { refreshToken } = req.cookies || req.body

    const incomingRefreshToken = refreshToken

    if(!incomingRefreshToken) {
        throw new ApiError(401, "Refresh token is invalid")
    }

    try {
        const decodedToken = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET) 

        const user = await User.findById(decodedToken?._id)

        if(!user) {
            throw new ApiError(401, "Unauthorized")
        }

        if(incomingRefreshToken !== user?._refreshToken) {
            throw new ApiError(401, "Invalid refresh token")
        }

        const options = {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production"
        }

        const { accessToken, refreshToken: newRefreshToken } = await generateAccessAndRefreshToken(user._id)

        return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", newRefreshToken, options)
        .json(new ApiResponse(200, {accessToken, refreshToken: newRefreshToken}, "Access token refreshed successfully"))
    } catch (error) {
        throw new ApiError(400, "Something happened while refreshing token")
    }
})

const changeUserCurrentPassword = asyncHandler(async(req,res) => {
    console.log(oldPassword, newPassword);
    
    const { oldPassword, newPassword } = req.body

    const user = await User.findById(req.user?._id)

    const isPasswordValid = await user.isPasswordValid(oldPassword)

    if(!isPasswordValid) {
        throw new ApiError(401, "New password does not match the old password")
    }

    user.password = newPassword

    await user.save({validateBeforeSave: false})

    return res
    .status(200)
    .json(new ApiResponse(200, {}, "password changed successfully"))
})

const updateUserDetails = asyncHandler(async(req, res) => {
    const { email, fullname, phoneNumber, level } = req.body

    if(!email) {
        throw new ApiError(400, "Email field is required")
    }

    if(!fullname) {
        throw new ApiError(400, "fullname field is required")
    }

    if(!phoneNumber) {
        throw new ApiError(400, " phoneNumber field is required")
    }

    if(!level) {
        throw new ApiError(400, "level field is required")
    }

    const user = await User.findByIdAndUpdate(req.user?._id,
        {
            $set: {
                email,
                fullname,
                phoneNumber,
                level
            }
        },
        {
            new: true
        },
    ).select("-password, -refreshToken")

    return res
    .status(200)
    .json(new ApiResponse(200, user, "Account details updated successfully"))
})


export {
    registerUser,
    loginUser,
    logOutUser,
    refreshAccessToken,
    changeUserCurrentPassword,
    updateUserDetails
}