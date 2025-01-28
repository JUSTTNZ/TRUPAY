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