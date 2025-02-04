import mongoose from 'mongoose';

const levelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required: true,
    },
    departmentName: {
        type: String,
        required: true,
    },
    school: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'School',
            required: true
        },
    schoolName: {
        type: String,
        required: true,
    },
    users: [{
        fullname: String
    }],
    books: [{ 
        title: String, 
        author: String, 
        description: String, 
        price: Number, 
        stock_quantity: Number 
    }]
}, { timestamps: true });

const Level = mongoose.model('Level', levelSchema);

export { Level };
