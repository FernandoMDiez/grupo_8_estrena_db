let db = require("../database/models");

const controller = {
  // Lista tood los perfiles
  perfilList: (req, res) => {
    db.User_perfil.findAll().then((perfiles) => {
      res.render("users/perfil-user", { perfiles });
      //console.log(perfiles);
    });
  },
  perfilDetail: (req, res) => {
    db.User_perfil.findByPk(req.params.id).then((perfil) => {
      res.render("users/perfil-detail", { perfil });
      //res.redirect("/perfil-detail", { perfil: perfil });
    });
  },
  add: (req, res) => {},
  create: (req, res) => {},
  delete: (req, res) => {},
};

//let fs = require("fs");
// let path = require("path");
// let { validationResult } = require("express-validator");
// let bcrypt = require("bcryptjs");

// /*  archivo de Usuarios */
// let userFilePath = path.join(__dirname, "../data/users.json");
// let users = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));

// /*  archivo de Category */
// let categoryFilePath = path.join(__dirname, "../data/usercateg.json");
// let categories = JSON.parse(fs.readFileSync(categoryFilePath, "utf-8"));
// let pass, conPass, errors;
// let contraseniaIguales = false;
// //let usuarioALoguear = null;

// const controller = {
//   login: (req, res) => {
//     res.render("users/user-login");
//   },

//   prosLogin: (req, res) => {
//     errors = validationResult(req);

//     console.log(req.body);
//     // pass = req.body.password;

//     if (!errors.isEmpty()) {
//       return res.render("users/user-login", { errors: errors.errors });
//     }
//     //la solucion fue que me lo recargue por q traia null
//     users = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));

//     let usuarioALoguear;
//     let emailUsuario = req.body.mail;

//     usuarioALoguear = users.find((usuario) => {
//       return usuario.email == emailUsuario;
//     });

//     if (
//       usuarioALoguear &&
//       bcrypt.compareSync(req.body.password, usuarioALoguear.password)
//     ) {
//       delete usuarioALoguear.password;
//       delete usuarioALoguear.confirmPassword;

//       req.session.usuarioLogueado = usuarioALoguear;

//       if (req.body.recordar_usuario) {
//         res.cookie("CookieUserLogueado", usuarioALoguear.email);
//       }

//       // console.log(req.cookies.CookieUserLogueado);
//       return res.redirect("user-profile");
//       //return res.render("users/user-profile");

//       // return res.render("users/user-login", {
//       //   errors: { password: { msg: "Usuario  / contraseña invalida" } },
//       // });
//     }
//     return res.render("users/user-login", {
//       errors: { mail: { msg: "Usuario  / contraseña invalida" } },
//     });
//   },
//   register: (req, res) => {
//     res.render("users/user-register", { categories });
//   },

//   profile: (req, res) => {
//     //console.log(req.cookie.usuario_logueado);
//     res.render("users/user-profile", { userL: req.session.usuarioLogueado });
//   },

//   logout: (req, res) => {
//     req.session.destroy();
//     // req.cookie.destroy();
//     return res.redirect("/");
//   },

//   /* Guarda Usurio  de Creacion */

//   userStore: (req, res) => {
//     errors = validationResult(req);
//     pass = req.body.password;
//     conPass = req.body.confirmPassword;

//     //evaluo si tiene errores
//     if (errors.length > 0) {
//       return res.render("users/user-register", {
//         categories,
//         errors: errors.errors,
//         old: req.body,
//       });
//     }

//     //contrseña y confirmacion de contraseña son iguales
//     if (pass === conPass) {
//       pass = bcrypt.hashSync(pass, 10);
//       contraseniaIguales = true;
//     }

//     let usuarioACrear = users.find((usuario) => {
//       return usuario.email == req.body.email;
//     });

//     /* Pendiente */
//     /* if (usuarioACrear) {
//       console.log("Entra a validar");
//       return res.render("users/user-register", {
//         errors: {
//           email: { msg: "Este email ya esta registrado" },
//         },
//         old: req.body,
//       });
//     }*/
//     //console.log("salio de validar");

//     if (contraseniaIguales == true) {
//       let image;

//       if (req.file != undefined) {
//         image = req.file.filename;
//       } else {
//         image = "image-default.jpg";
//       }
//       let newUser = {
//         id: users[users.length - 1].id + 1,
//         ...req.body,
//         image: image,
//         password: pass,
//         confirmPassword: pass,
//       };
//       users.push(newUser);
//       fs.writeFileSync(userFilePath, JSON.stringify(users, null, " "));
//       res.redirect("/");
//     } else {
//       console.log("Contraseña invalidas");
//       return res.render("users/user-register", {
//         categories,
//         errors: errors.errors,
//         old: req.body,
//       });
//     }
//   },
// };

module.exports = controller;
