import mongoose from 'mongoose';

const DirectorSchema = new mongoose.Schema({
        name: {
            type: String,
            required: 'Name is required',
            trim: true,
        },
        country: {
            type: String,
            required: 'Country is required',
            trim: true,
        },
        bio: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true
    }
);

export default mongoose.model('Director', DirectorSchema);