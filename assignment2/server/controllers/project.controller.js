import Project from '../models/project.model.js';
import extend from 'lodash/extend.js';
import errorHandler from './error.controller.js';

const create = async (req, res) => {
    const project = new Project(req.body);
    try {
        const savedProject = await project.save();
        return res.status(200).json({
            message: "Successfully created!",
            id: savedProject._id
        });
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const list = async (req, res) => {
    try {
        let projects = await project.find().select('title firstname lastname email completion description')
        res.json(projects);
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const projectByID = async (req, res, next, id) => {
    try {
        let project = await project.findById(id)
        if (!project) {
            return res.status(400).json({
                error: "project not found"
            })
        }
        req.project = project;
        next();
    } catch (err) {
        return res.status(400).json({
            error: "Could not retrieve project"
        })
    }
}

const read = (req, res) => {
    req.project = undefined
    return res.json(req.project);
}
const update = async (req, res) => {
    try {
        let project = req.project;
        project = extend(project, req.body);
        qualifcation.updated = Date.now();
        await project.save();
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const remove = async (req, res) => {
    try {
        let project = req.project;
        let deletedproject = await project.deleteOne();
        deletedproject = undefined
        res.json(deletedproject);
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const removeAll = async (req, res) => {
    try {
        const result = await Project.deleteMany({})
        return res.status(200).json({
            message: 'All projects deleted successfully.'
        })
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

export default {create, projectByID, read, list, remove, update, removeAll}