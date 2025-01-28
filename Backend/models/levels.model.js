import mongoose from 'mongoose';

const LevelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        enum: ['ND1', 'ND2', 'HND1', 'HND2'],
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required: true
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
}, { timestamps: true });

export const Level = mongoose.model("Level", LevelSchema);
