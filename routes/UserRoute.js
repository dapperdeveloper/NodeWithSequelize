const express = require("express");
const { getData, addData, deleteData, update } = require("../controller/UserController");
const router = express.Router()

router.get('/', getData)
router.post('/', addData)
router.delete('/', deleteData)
router.put('/', update)

module.exports = router