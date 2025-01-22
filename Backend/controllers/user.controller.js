import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";
import  { ApiResponse } from "../utils/ApiResponse";
import { User } from "../models/user.model";
import  jwt from "jsonwebtoken";
import mongoose from "mongoose";

const registerUser = asyncHandler(async (req, res) => {
    const {fullname, email, username, password, phoneNumber, school, department, level, registrationNumber} = req.body;

    // validation 
    if([fullname, email, password, phoneNumber, school, department, level, registrationNumber].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All fields are required");
    }

    const existingUser = await User.find
})