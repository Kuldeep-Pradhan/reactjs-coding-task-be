const express = require("express")
const { addUser, getUser } = require("../controller/user-controller.js");

const router = express.Router()

router.post('/adduser', addUser)
router.get('/getuser', getUser)

module.exports = router