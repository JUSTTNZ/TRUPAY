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

const loginUser = asyncHandler(async(req, res) => {
    const {email, username, registrationNumber, password} = req.body

    if(
        [email, username, registrationNumber, password].some((field) => field.trim() === "")
    ) {
        throw new ApiError(400, "Please provide required fields")
    }

    let user;

    if(email) {
        user = await User.findOne({email})
    } 
    else if(username) {
        user = await User.findOne({username})
    }
    else if(registrationNumber) {
        user = await User.findOne({registrationNumber})
    }

    if(!user) {
        throw new ApiError(401, "Invalid credentials")
    }

    try {
        const {accessToken, refreshToken} = await generateAccessAndRefreshToken(user._id)

        const loggedInUser =  await User.findById(user._id).select("-password -refreshToken")

        if(!loggedInUser) {
            throw new ApiError(401, "Something went wrong while logging in")
        }

        const options = {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
        }

        return res
        .status(200)
        .cookie("refreshToken", refreshToken, options)
        .cookie("accessToken", accessToken, options)
        .json(new ApiResponse(200, loggedInUser, "User logged in successfully", {accessToken, refreshToken}
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