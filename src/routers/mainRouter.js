const express = require("express");
const mainController = require("../controllers/mainController");
const router = express.Router();

//const mainController = require("../controllers/mainController");

router.get("/", mainController.index); //punto 1 Script 4

module.exports = router;
