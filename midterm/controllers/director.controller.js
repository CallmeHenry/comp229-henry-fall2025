import Director from '../models/Director.js';
import extend from 'lodash/extend.js';
import errorHandler from './error.controller.js';

const list = async (req, res) => {
    try {
        let directors = await Director.find().select('name country bio');
        res.status(200).json(directors);
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const directorByID = async (req, res, next, id) => {
    try {
        let director = await Director.findById(id)
        if (!director) {
            return res.status(400).json({
                error: "Director not found"
            })
        }
        req.director = director
        next()
    } catch (err) {
        return res.status(400).json({
            error: "Could not retrieve Director"
        })
    }
}

const read = (req, res) => {
    return res.json(req.director)
}

const create = async (req, res) => {
    const director = new Director(req.body);
    try {
        const savedDirector = await director.save()
        return res.status(201).json({
            message: "Successfully created!",
            id: savedDirector._id
        })
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const update = async (req, res) => {
    try {
        let director = req.director;
        director = extend(director, req.body);
        director.updated = Date.now()
        await director.save()
        res.json(director)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        });
    }
}

const remove = async (req, res) => {
    try {
        let director = req.director;
        let deletedDirector = await director.deleteOne();
        deletedDirector = undefined;
        res.json(deletedDirector);
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

export default {list, directorByID, read, create, update, remove}