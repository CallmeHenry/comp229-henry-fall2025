import express from 'express';
import movieCtrl from '../controllers/movie.controller.js';

const router = express.Router();
router.route('/').get(movieCtrl.list)
router.route('/').post(movieCtrl.create);
router.param('id', movieCtrl.movieByID);
router.route('/:id').get(movieCtrl.read);
router.route('/:id').put(movieCtrl.update);
router.route('/:id').delete(movieCtrl.remove);

export default router;