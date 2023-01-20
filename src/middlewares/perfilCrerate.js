const { check } = require("express-validator");

let validationCamps = [
  check("namePerfil")
    .notEmpty()
    .withMessage("Debe ingresar un Nombre para el Perfil"),
];

module.exports = validationCamps;
