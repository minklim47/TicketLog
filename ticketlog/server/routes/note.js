const express = require("express");
const router = express.Router();
const connection = require("../db");
const auth = require("../middleware/auth");

// router.post('/', auth, (req, res) => {
//     const sqlInsert = "INSERT "
// })