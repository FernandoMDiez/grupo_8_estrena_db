//aqui requiero Express , Path y Router
var express = require("express"); // Para el uso de Express
var path = require("path"); // Para el uso de Path
var mainRouter = require("./routers/mainRouter"); //se la usa para la ruta Principal
var productRouter = require("./routers/productRouter"); //se la usa para la ruta de Productos

var methodOverride = require("method-override"); // Pasar poder usar los métodos PUT y DELETE
var session = require("express-session"); // se la requiere para sessiones
const cookie = require("cookie-parser"); // se las requiere para cookies
const userLogedMiddleware = require("./middlewares/userLoggedMiddleware");
var userRouter = require("./routers/userRouter"); //se la usa para la ruta de Usuarios
var apiUserRouter = require("./routers/api/users"); //se la usa para la ruta de Usuarios - API
var apiProductRouter = require("./routers/api/products"); //se la usa para la ruta de Productos - API
var apiCategoryRouter = require("./routers/api/categories"); //se la usa para la ruta de Productos - API
var apiPerfilRouter = require("./routers/api/perfiles"); //se la usa para la ruta de Productos - API
var apiColorRouter = require("./routers/api/colors"); //se la usa para la ruta de Productos - API
var apiSizeRouter = require("./routers/api/sizes"); //se la usa para la ruta de Productos - API

/* Declaraciones para el uso por medio del acces pont en este caso app */
var app = express(); // se declara y asigna el acces ponit
app.use(express.json()); // Para el uso de archivos Json
app.use(express.urlencoded({ extended: false })); //para que pueda mandar informacion por el formulario
app.use(methodOverride("_method")); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(express.static(path.join(__dirname, "../public"))); // Declaro la carpera Publica
app.set("views", path.join(__dirname, "/views")); //declaracion de la carpeta wiews es la que tiene todas las vistas - EJS
app.set("view engine", "ejs"); //declaracion para que pueda usar - EJS
app.use(cookie()); //Declaracion para el uso de Cookie

//Declaracion para el uso de Session , siempre van las demas declaraciones
app.use(
  session({
    secret: "Pagina Secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(userLogedMiddleware);

//declaro todas las rutas
app.use("/", mainRouter); //Ruta Principal
app.use("/products", productRouter); // Ruta de Productos
app.use("/users", userRouter); //Rura de Usuarios

// APIS//
app.use("/api/users", apiUserRouter); //Ruta de Usuarios
app.use("/api/categories", apiCategoryRouter); //Ruta de Usuarios
app.use("/api/colors", apiColorRouter); //Ruta de Usuarios
app.use("/api/perfiles", apiPerfilRouter); //Ruta de Usuarios
app.use("/api/products", apiProductRouter); //Ruta de Usuarios
app.use("/api/sizes", apiSizeRouter); //Ruta de Usuarios
// APIS//

//Levanto el servidor en el puerto indicado
app.listen(3005, () => {
  console.log("Servidor levantado");
});

//En caso de que no se encuentre una pagina marca un error
app.use((req, res, next) => {
  res.status(404).render("errors/error-404"); //en caso  que el error sea 404 muestra esta vista.
});
