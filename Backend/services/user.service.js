import { User } from "../models/users.models.js";
import { School } from "../models/school.model.js";  
import { Department } from "../models/department.model.js";  
import { Level } from "../models/levels.model.js";  
import { ApiError } from "../utils/ApiError.js";

class UserService {
    constructor() {
        this._User = User;
        this._School = School;
        this._Department = Department;
        this._Level = Level;
    }

    async register(userObject) {
        try {
            const { email, school, department, level } = userObject;

            // Check if the user already exists
            const existingUser = await this._User.findOne({ email });
            if (existingUser) {
                throw new ApiError(400, "User already exists");
            }

            const isFirstAccount  = await this._User.countDocuments({}) === 0

            userObject.role = isFirstAccount ? 'admin' : 'user'

            // Create the user
            const user = await this._User.create(userObject);
            if (!user) {
                throw new ApiError(401, "Something went wrong while registering user");
            }

             // Get the name of the school, department, and level
             const departmentDoc = await this._Department.findById(department).select('name');
             const levelDoc = await this._Level.findById(level).select('name');

            await this._School.updateOne(
                { _id: school },
                { $push: { users: { fullname: user.fullname, departmentName: departmentDoc.name, levelName: levelDoc.name  } } }
            );
            
            await this._Department.updateOne(
                { _id: department },
                { $push: { users: { fullname: user.fullname, levelName: levelDoc.name } } }
            );
            
            await this._Level.updateOne(
                { _id: level },
                { $push: { users: { fullname: user.fullname } } }
            );
            

            return user;
        } catch (error) {
            throw new ApiError(500, error.message);
        }
    }
}

export default new UserService();
