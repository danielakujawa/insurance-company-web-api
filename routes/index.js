const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

/* GET */

router.get('/clients/id/:id', userController.getClientById)
router.get('/clients/name/:name', userController.getClientByName)
router.get('/policies/name/:name', userController.getPoliciesByName)
router.get('/clients/policy/:policy', userController.getUserByPolicyNumber)

module.exports = router
