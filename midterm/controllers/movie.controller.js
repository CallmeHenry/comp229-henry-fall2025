import Movie from '../models/Movie.js';
import extend from 'lodash/extend.js';
import errorHandler from './error.controller.js';

const list = async (req, res) => {
    try {
        const {year, director, genre} = req.query;
        const filter = {};
        
        if (year) filter.year = Number(year);
        if (director) filter.director = director;
        if (genre) filter.genre = genre;

        const movies = await Movie.find(filter)
            .populate({path: 'director', select: 'name country'})
        res.json(movies);
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const movieByID = async (req, res, next, id) => {
    try {
        let movie = await Movie.findById(id)
            .populate({path: 'director', select: 'name country'});
        if (!movie) {
            return res.status(400).json({
                error: "Movie not found"
            })
        }
        req.movie = movie;
        next()
    } catch (err) {
        return res.status(400).json({
            error: "Could not retrieve Movie"
        })
    }
}

const read = (req, res) => {
    return res.json(req.movie)
}

const create = async (req, res) => {
    const movie = new Movie(req.body);
    try {
        const savedMovie = await movie.save()
        return res.status(201).json({
            message: "Successfully created!",
            id: savedMovie._id
        })
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const update = async (req, res) => {
    try {
        let movie = req.movie;
        movie = extend(movie, req.body);
        movie.updated = Date.now()
        await movie.save()
        res.json(movie)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        });
    }
}

const remove = async (req, res) => {
    try {
        let movie = req.movie;
        let deletedMovie = await movie.deleteOne();
        deletedMovie = undefined;
        res.json(deletedMovie);
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

export default {list, movieByID, read, create, update, remove}