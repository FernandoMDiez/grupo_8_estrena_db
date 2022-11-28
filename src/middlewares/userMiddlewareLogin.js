const { check } = require("express-validator");

let validationCamps = [
  check("mail")
    .notEmpty()
    .withMessage("Debe ingresar un E-Mail")
    .isEmail()
    .withMessage("Debe ingresar un E-Mail valido"),

  check("password")
    .notEmpty()
    .withMessage("Debe ingresar una Contraseña")
    .isLength({ min: 8 })
    .withMessage("La Contraseña debe stener como minimo 8 caracteres"),
];

module.exports = validationCamps;
