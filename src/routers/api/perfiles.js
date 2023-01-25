const express = require("express");
const router = express.Router();
const perfilesApiController = require("../../controllers/api/perfilesApiController");

//Listado
router.get("/", perfilesApiController.perfilList);

//Detalle
router.get("/:id", perfilesApiController.perfilDetail);

module.exports = router;
