const { check } = require("express-validator");

let validationCamps = [
  check("firstName")
    .trim()
    .notEmpty()
    .withMessage("Debe ingresar un Nombre")
    .isAlpha()
    .withMessage("Debe ingresar solo Letras"),

  check("lastName")
    .trim()
    .notEmpty()
    .withMessage("Debe ingresar un Apellido")
    .isAlpha()
    .withMessage("Debe ingresar solo Letras"),

  check("tel").notEmpty().withMessage("Debe ingresar un Telefono"),

  check("email")
    .notEmpty()
    .withMessage("Debe ingresar un E-Mail")
    .isEmail()
    .withMessage("Debe ingresar un E-Mail valido"),

  /* check("category").custom((value, { req }) => {
    if (value == null || value == "Seleccionar") {
      throw new Error("Debe seleccionar una Categoria");
    } else {
      return true;
    }
  }),*/

  check("password")
    .notEmpty()
    .withMessage("Debe ingresar una Contraseña")
    .isLength({ min: 8 })
    .withMessage("La Contraseña debe stener como minimo 8 caracteres"),

  check("confirmPassword")
    .notEmpty()
    .withMessage("Debe confirmar la Contraseña")
    .isLength({ min: 8 })
    .withMessage("La Contraseña debe stener como minimo 8 caracteres"),
];

module.exports = validationCamps;
