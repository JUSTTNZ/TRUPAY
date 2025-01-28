import dotenv from 'dotenv';
// import User from './models/users.models.js';
import { School } from './models/school.model.js';
import { Department } from './models/department.model.js';
import { Level } from './models/levels.model.js';
import mockSchools from './MOCKJSONDATA/MOCK_SCHOOLS.json' assert { type: 'json' };
import mockDepartments from './MOCKJSONDATA/MOCK_DEPARTMENTS.json' assert { type: 'json' };
import mockLevels from './MOCKJSONDATA/MOCK_LEVELS.json' assert { type: 'json' };
import connectDB from './db/index.js';

dotenv.config({
    path: "./.env"
});

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URI);

        const schools = await School.create(mockSchools);
        console.log("School successfully uploaded");

        // Create a map of school names to their ObjectId
        const schoolMap = {};
        schools.forEach(school => {
            schoolMap[school.name] = school._id;
        });

        // Update mockDepartments to use ObjectId references and include schoolName
        const updatedDepartments = mockDepartments.map(department => {
            return {
                ...department,
                school: schoolMap[department.school], // Replace school name with ObjectId
                schoolName: department.school
            };
        });

        const departments = await Department.create(updatedDepartments);
        console.log("Department successfully uploaded");

        // Create a map of department names to their ObjectId
        const departmentMap = {};
        departments.forEach(department => {
            departmentMap[department.name] = department._id;
        });

        // Update mockLevels to use ObjectId references and include departmentName and schoolName
        const updatedLevels = mockLevels.map(level => {
            const department = departments.find(d => d.name === level.department);
            const school = schools.find(s => s._id.equals(department.school));
            return {
                ...level,
                department: departmentMap[level.department], // Replace department name with ObjectId
                departmentName: level.department,
                school: school._id, // Include school ObjectId
                schoolName: school.name // Derive schoolName from department's school
            };
        });

        const levels = await Level.create(updatedLevels);
        console.log("Levels successfully uploaded");
        console.log('Data import success');
        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

start();
