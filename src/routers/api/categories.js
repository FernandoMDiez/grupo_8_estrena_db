const express = require("express");
const router = express.Router();
const categoriesApiController = require("../../controllers/api/categoriesApiController");

//Listado
router.get("/", categoriesApiController.categoryList);

//Detalle
router.get("/:id", categoriesApiController.categoryDetail);

module.exports = router;
