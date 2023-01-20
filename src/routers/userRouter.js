const express = require("express");
const controller = require("../controllers/userController");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const validationUserCreation = require("../middlewares/userMiddlewareCreation");
const userLogMiddleware = require("../middlewares/userLogMiddleware");
const userVisitMiddleware = require("../middlewares/userVisitMiddleware");
const validationUserLogin = require("../middlewares/userMiddlewareLogin");
const validationperfilMiddleware = require("../middlewares/perfilCrerate");
//configuracion de multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/users");
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

/***********************************     PERFIL DE USUARIOS                               ************************ ***/

/***********************************   INICIO - LISTAR    ************************ ***/

/* ----- Get - Listar Perfiles de usuarios--- */
router.get("/perfil-user-list", controller.perfilList);

/* ----- Get - Detalle Perfil de usuario--- */
router.get("/perfil-user-detail/:id", controller.perfilDetail);

/* ----- Get - Create  Perfil de usuario--- */
router.get("/perfil-user-create", controller.perfilAdd);

/* ----- Post - Create  Perfil de usuario--- */
router.post(
  "/perfil-user-create",
  validationperfilMiddleware,
  controller.perfilCreate
);

/* -----Get - Edit  Perfil de usuario--- */
router.get("/perfil-user-edit/:id", controller.perfilEdit);

/* -----Post - Edit  Perfil de usuario--- */
router.post("/perfil-user-edit/:id", controller.perfilUpdate);

/* -----Get - Delete  Perfil de usuario--- */
router.get("/perfil-user-delete/:id", controller.perfilDelete);

/* -----Post - Delete  Perfil de usuario--- */
router.post("/perfil-user-delete/:id", controller.perfilDestroy);

/* -----Get - Activate  Perfil de usuario--- */
router.get("/perfil-user-activate/:id", controller.perfilActivate);

/* -----Post - Activate  Perfil de usuario--- */
router.post("/perfil-user-activate/:id", controller.perfilRestore);
/***********************************   FIN -   LISTAR   ************************ ***/

/***********************************   INICIO          REGISTER / CREATION  USER   ************************ ***/
/* ----- Get - Registrar o Crear un Usuario --- */
router.get("/user-register", userLogMiddleware, controller.register); // este es el original con validacion
//router.get("/user-register", controller.register);
/* ----- POST  Guardar El usuario Creado --- */
//router.post("/user-register", upload.single("image"), controller.userStore); //sin validacion

router.post(
  "/user-register",
  upload.single("image"),
  validationUserCreation,
  controller.userStore
);

/* ----- Get - Listar Usuarios--- */
router.get("/user-list", controller.userList);

/* -----Get - Delete  usuario--- */
router.get("/user-delete/:id", controller.userDelete);

/* -----Post - Delete  usuario--- */
router.post("/user-delete/:id", controller.userDestroy);

/* -----Get - Activar  usuario--- */
router.get("/user-activate/:id", controller.userActivate);

/* -----Post - Activate  usuario--- */
router.post("/user-activate/:id", controller.userRestore);
/* ----- Get - Detalle usuario--- */
router.get("/user-detail/:id", controller.userDetail);
/* ----- Get - Edit usuario--- */
router.get("/user-edit/:id", controller.userEdit);
/* ----- POST  Edit  usuario --- */
//router.post("/user-register", upload.single("image"), controller.userStore); //sin validacion

router.post(
  "/user-edit/:id",
  upload.single("image"),
  validationUserCreation,
  controller.userUpdate
);

/***********************************    FIN     REGISTER / CREATION  USER   ************************ ***/

/***********************************   INICIO    LOGIN  USER   ************************ ***/
/* ----- Get - Loguear  un Usuario --- */
router.get("/user-login", userLogMiddleware, controller.login);

/* ----- POST - Loguear  un Usuario --- */
router.post("/user-login", validationUserLogin, controller.prosLogin);

/* ----- GET - Logout de Usuario --- */
router.get("/logout", controller.logout);

router.get("/user-profile", userVisitMiddleware, controller.profile); //Perfil de Usuario

router.post("/user-profile", controller.logout); //Listar Usuario  - Fernando

//router.get("/user-profile", userVisitMiddleware, controller.profile);//Editar Usuario - Fernando

module.exports = router;
