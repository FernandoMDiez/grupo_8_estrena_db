const { check } = require("express-validator");

let validationCamps = [
  check("name")
    .notEmpty()
    .withMessage("Debe ingresar un Nombre para el Producto"),

  check("category").custom((value, { req }) => {
    if (value == null || value == "Seleccionar") {
      throw new Error("Debe seleccionar una Categoria");
    } else {
      return true;
    }
  }),
  check("size").custom((value, { req }) => {
    if (value == null || value == "Seleccionar") {
      throw new Error("Debe seleccionar un Tamaño");
    } else {
      return true;
    }
  }),
  check("color").custom((value, { req }) => {
    if (value == null || value == "Seleccionar") {
      throw new Error("Debe seleccionar un Color");
    } else {
      return true;
    }
  }),
  check("price")
    .notEmpty()
    .withMessage("Debe ingresar el precio")
    .isNumeric({ min: 200 })
    .withMessage("Debe ser un valor Numerico mayor a 200"),
];

module.exports = validationCamps;
