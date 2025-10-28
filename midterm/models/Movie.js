import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
        title: {
            type: String,
            required: 'Title is required',
            trim: true,
        },
        director: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Director',
            required: 'Director ObjectId reference is required',
        },
        year: {
            type: Number,
            required: 'Year is required',
            validate: {
                validator: (year) => {
                    if (year >= 1888 && year <= new Date().getFullYear() + 1) return true;
                }
            }
        },
        genre: {
            type: String,
            trim: true,
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model('Movie', movieSchema);