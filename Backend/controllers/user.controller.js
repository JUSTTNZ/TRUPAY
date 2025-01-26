import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/users.models.js";
import userService from "../services/user.service.js";

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
const registerUser = async (req, res) => {
    const userObject = req.body
    const user = await userService.register(userObject);
    res.json(new ApiResponse(201, "user created successfully", user));
}

const loginUser = asyncHandler(async (req, res) => {
    const { email, username, registrationNumber, password } = req.body

    if (
        [email, username, registrationNumber, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "Please provide required fields")
    }

    let user;

    if (email) {
        user = await User.findOne({ email })
    }
    else if (username) {
        user = await User.findOne({ username })
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

export {
    registerUser,
    loginUser,
}