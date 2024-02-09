const express = require('express');
const router = express.Router();
const {getTareas, createTareas, updateTareas, deleteTareas} = require('../controllers/tareasControllers');
const {protect} = require('../middleware/authMiddleWare');

//router.route('/').get(protect, getTareas).post(createTareas)

router.get('/', protect, getTareas);
router.post('/', protect, createTareas);

//router.route('/:id').delete(deleteTareas).put(updateTareas)
router.put('/:id', protect,updateTareas);
router.delete('/:id', protect,deleteTareas);

module.exports = router