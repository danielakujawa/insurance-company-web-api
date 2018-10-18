const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

/* GET */

router.get('/clients/id/:id', userController.getClientsById)
router.get('/clients/name/:name', userController.getClientsByName)

module.exports = router
