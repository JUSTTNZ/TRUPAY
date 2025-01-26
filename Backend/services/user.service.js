import { User } from "../models/users.models.js";
import { ApiError } from "../utils/ApiError.js";

class UserService {
    constructor() {
        this._User = User;
    }

    async register(userObject) {

        const { email } = userObject;

        const existingUser = await this._User.findOne({ email });

        if (existingUser) {
            throw new ApiError(400, "User already exists")
        }

        const user = await this._User.create({
            ...userObject,
        })

        if (!user) {
            throw new ApiError(401, "Something went wrong while registering user sorry")
        }

        return user;


    } catch(error) {
        //throw error to the caller function.
        throw error
    }
}


export default new UserService();