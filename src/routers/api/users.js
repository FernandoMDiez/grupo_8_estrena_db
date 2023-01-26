const express = require("express");
const router = express.Router();
const usersApiController = require("../../controllers/api/usersApiController");

//Listado de usuario - Activos
router.get("/", usersApiController.userListActivos);

//Listado de usuario - no Activos
//router.get("/", usersApiController.userListBajas);
//Detalle de un usuario
router.get("/:id", usersApiController.userDetail);

module.exports = router;
