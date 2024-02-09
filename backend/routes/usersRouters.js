const express = require('express')
const router = express.Router()
const { crearUser, loginUser, datosUser } = require('../controllers/usersController')

router.post('/', crearUser)
router.post('/login', loginUser)
router.get('/datos', datosUser)

module.exports = router