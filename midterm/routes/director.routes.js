import express from 'express';
import directorCtrl from '../controllers/director.controller.js';

const router = express.Router();
router.route('/').get(directorCtrl.list)
router.route('/').post(directorCtrl.create);
router.param('id', directorCtrl.directorByID);
router.route('/:id').get(directorCtrl.read);
router.route('/:id').put(directorCtrl.update);
router.route('/:id').delete(directorCtrl.remove);

export default router;