const express = require("express");
const router = express.Router();
const productsApiController = require("../../controllers/api/productsApiController");

//Listado
router.get("/", productsApiController.productList);

//Detalle
router.get("/:id", productsApiController.productDetail);

module.exports = router;
