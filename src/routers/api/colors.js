const express = require("express");
const router = express.Router();
const colorsApiController = require("../../controllers/api/colorsApiController");

//Listado
router.get("/", colorsApiController.colorList);

//Detalle
router.get("/:id", colorsApiController.colorDetail);

module.exports = router;
