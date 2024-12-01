const express = require('express')
const naafController = require('../controllers/naafController')
const router = express.Router()

router.post('/save-naaf', naafController.createNaaf)
router.get('/get-naaf',naafController.getNaaf)
router.get("/get-one-naaf",naafController.getOneNaaf)
router.put('/update-naaf', naafController.updateNaaf)
router.delete('/delete-naaf/:phone',naafController.deleteNaaf)

module.exports = router     