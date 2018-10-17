const express = require('express')
const router = express.Router()
const clientController = require('../controllers/clientController')

/* GET home page. */

router.get('/', clientController.getClients)

module.exports = router
