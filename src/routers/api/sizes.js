const express = require("express");
const router = express.Router();
const sizeApiController = require("../../controllers/api/sizesApiController");

//Listado
router.get("/", sizeApiController.sizeList);

//Detalle
router.get("/:id", sizeApiController.sizeDetail);

module.exports = router;
