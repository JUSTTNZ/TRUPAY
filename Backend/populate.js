import dotenv from 'dotenv';
import User from './models/users.models.js';
import School from './models/school.model.js';
import Department from './models/department.model.js';
import Level from './models/levels.model.js';
import { connectDB } from './db/index.js';

dotenv.config({
    path: "./.env"
})


const PORT = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URI);
    } catch (error) {
        console.log(error);  
    }
}

start();


// require('dotenv').config();

// const mockSchools = require('./MOCK_SCHOOLS.json');
// const mockDepartments = require('./MOCK_DEPARTMENTS.json');
// const mockLevels = require('./MOCK_LEVELS.json');
// const School = require('./models/School');
// const Department = require('./models/Department');
// const Level = require('./models/Level');
// const connectDB = require('./db/connect');

// const start = async () => {
//     try {
//         await connectDB(process.env.MONGODB_URI);

//         // Insert mock data for schools
//         const schools = await School.create(mockSchools);
//         console.log('Schools data import success');

//         // Insert mock data for departments
//         const departments = await Department.create(mockDepartments);
//         console.log('Departments data import success');

//         // Insert mock data for levels
//         const levels = await Level.create(mockLevels);
//         console.log('Levels data import success');

//         // Optionally link departments and levels to schools and save again
//         for (let department of departments) {
//             const school = schools.find(s => s.name === department.school);
//             if (school) {
//                 school.departments.push(department._id);
//                 await school.save();
//             }
//         }

//         for (let level of levels) {
//             const department = departments.find(d => d.name === level.department);
//             if (department) {
//                 department.levels.push(level._id);
//                 await department.save();
//             }
//         }

//         console.log('Data import success');
//         process.exit(0);
//     } catch (error) {
//         console.log(error);
//         process.exit(1);
//     }
// }

// start();
