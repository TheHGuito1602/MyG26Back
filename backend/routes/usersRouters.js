const express = require('express')
const router = express.Router()
const { crearUser, loginUser, datosUser } = require('../controllers/usersController')
const { protect }=require('../middleware/authMiddleWare')

router.post('/', crearUser)
router.post('/login', loginUser)
router.get('/datos', protect, datosUser)

module.exports = router