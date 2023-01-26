const express = require("express");
const controller = require("../controllers/productController");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const validationProduct = require("../middlewares/productMiddleware");
const userVisitMiddleware = require("../middlewares/userVisitMiddleware");
//const controller = require("../controllers/mainController");

//configuracion de multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
    // cb(null, path.join(__dirname, "../public/images"));
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

//ejecucion de multer
const upload = multer({ storage });

/*** GET DETALLE PRODUCT ***/
router.get("/product-detail/:id", controller.productDet); // punto 3 sprint 4

/***********************************   INICIO    EDICION DE PRODUCTO   ************************ ***/
/*** GET EDITAR UN  PRODUCTO ***/
router.get("/product-edition/:id", userVisitMiddleware, controller.productEdi);

/*** PUT  EDITAR UN  PRODUCTO ***/
router.put(
  "/product-edition/:id",
  upload.single("image"),
  validationProduct,
  controller.productUpdate
); // punto 6 sprint 4

/***********************************  FIN   EDICION DE PRODUCTO   ************************ ***/

/***********************************   INICIO   CREACION  DE PRODUCTO   ************************ ***/

/*** GET CREATE ONE PRODUCT ***/
router.get("/product-creation", userVisitMiddleware, controller.productCre); // punto 2 sprint 4

/*** POST CREATE ONE PRODUCT ***/
router.post(
  "/product-creation",
  upload.single("image"),
  validationProduct,
  controller.productStore
); // punto 64sprint 4

/***********************************   FIN   CREACION  DE PRODUCTO   ************************ ***/

/*** GET CARRITO DE PRODUCTOS ***/
router.get("/product-cart", controller.productCart);

/*** GET ELIMINAR PRODUCTO  ***/
router.delete("/delete/:id", controller.destroy);

/*** GET LISTAR PRODUCTOS ***/
//router.get("/product-cart", controller.productCart); - Daniel

module.exports = router;
