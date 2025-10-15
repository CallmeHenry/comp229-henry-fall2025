import Qualification from '../models/qualification.model.js';
import extend from 'lodash/extend.js';
import errorHandler from './error.controller.js';

const create = async (req, res) => {
    const qualification = new Qualification(req.body);
    try {
        const savedQualification = await qualification.save();
        return res.status(200).json({
            message: "Successfully created!",
            id: savedQualification._id
        });
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const list = async (req, res) => {
    try {
        let qualifications = await Qualification.find().select('title firstname lastname email completion description')
        res.json(qualifications);
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const qualificationByID = async (req, res, next, id) => {
    try {
        let qualification = await Qualification.findById(id)
        if (!qualification) {
            return res.status(400).json({
                error: "Qualification not found"
            })
        }
        req.qualification = qualification;
        next();
    } catch (err) {
        return res.status(400).json({
            error: "Could not retrieve qualification"
        })
    }
}

const read = (req, res) => {
    req.qualification = undefined
    return res.json(req.qualification);
}
const update = async (req, res) => {
    try {
        let qualification = req.qualification;
        qualification = extend(qualification, req.body);
        qualifcation.updated = Date.now();
        await qualification.save();
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const remove = async (req, res) => {
    try {
        let qualification = req.qualification;
        let deletedQualification = await qualification.deleteOne();
        deletedQualification = undefined
        res.json(deletedQualification);
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const removeAll = async (req, res) => {
    try {
        const result = await Qualification.deleteMany({})
        return res.status(200).json({
            message: 'All qualifications deleted successfully.'
        })
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

export default {create, qualificationByID, read, list, remove, update, removeAll}