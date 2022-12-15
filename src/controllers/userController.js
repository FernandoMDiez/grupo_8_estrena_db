let db = require("../database/models");
let { validationResult } = require("express-validator");
let bcrypt = require("bcryptjs");
const Op = db.Sequelize.Op;
let perfiles, perfilesBorrados;
let pass, conPass, errors;
let contraseniaIguales = false;
let users, usersBorrados;
//let usuarioALoguear = null;

const controller = {
  /* PERFILES  INICIO*/
  perfilList: async (req, res) => {
    try {
      perfiles = await db.User_perfil.findAll();
      perfilesBorrados = await db.User_perfil.findAll({
        where: {
          deleted_at: {
            [Op.ne]: null,
          },
        },
        paranoid: false,
      });
      res.render("users/perfil-user-list", { perfiles, perfilesBorrados });
    } catch (error) {
      res.send(error);
    }
  },

  // Detalle de perfiles
  perfilDetail: async (req, res) => {
    try {
      //console.log("id_detail: " + req.params.id);
      const perfilD = await db.User_perfil.findByPk(req.params.id, {
        paranoid: false,
      });
      //console.log("id_perfilD: " + perfilD);
      if (perfilD.deleted_at == null) {
        res.render("users/perfil-user-detail", { perfilD });
      } else {
        res.render("users/perfil-user-detail-delete", { perfilD });
      }

      //res.redirect("/perfil-detail", { perfil: perfil });
    } catch (error) {
      res.send(error);
    }
  },
  //metodo get para crear un Perfil
  perfilAdd: (req, res) => {
    res.render("users/perfil-user-create");
  },
  //metodo post para crear un Perfil
  perfilCreate: async (req, res) => {
    try {
      await db.User_perfil.create({
        nameCategory: req.body.nameCategory,
      });
      perfiles = await db.User_perfil.findAll({ paranoid: false });
      res.redirect("/users/perfil-user-list");
      // res.render("users/perfil-user-list", { perfiles, perfilesBorrados });
    } catch (error) {
      res.send(error);
    }
  },
  perfilEdit: async (req, res) => {
    try {
      const perfilE = await db.User_perfil.findByPk(req.params.id, {
        paranoid: false,
      });
      res.render("users/perfil-user-edit", { perfilE });
    } catch (error) {
      res.send(error);
    }
  },
  perfilUpdate: async (req, res) => {
    // console.log("Sientra por aqui 4 ");
    try {
      let idU = req.params.id;
      // console.log(idU);
      const perfilUpdate = {
        nameCategory: req.body.nameCategory,
      };
      await db.User_perfil.update(perfilUpdate, { where: { idPerfil: idU } });
      res.redirect("/users/perfil-user-list");
    } catch (error) {
      //console.log("Sientra por aqui 5 ");
      res.send(error);
    }
  },

  perfilDelete: async (req, res) => {
    try {
      const perfilD = await db.User_perfil.findByPk(req.params.id);
      res.render("users/perfil-user-delete", { perfilD });
    } catch (error) {
      //console.log("Sientra por aqui 5 ");
      res.send(error);
    }
  },
  perfilDestroy: async (req, res) => {
    try {
      await db.User_perfil.destroy({ where: { idPerfil: req.params.id } });
      perfiles = await db.User_perfil.findAll();
      res.redirect("/users/perfil-user-list"); //, { perfiles, perfilesBorrados });
    } catch (error) {
      //console.log("Sientra por aqui 5 ");
      res.send(error);
    }
  },
  perfilActivate: async (req, res) => {
    try {
      const perfilA = await db.User_perfil.findByPk(req.params.id, {
        paranoid: false,
      });
      res.render("users/perfil-user-activate", { perfilA });
    } catch (error) {
      res.send(error);
    }
  },
  perfilRestore: async (req, res) => {
    try {
      await db.User_perfil.restore({ where: { idPerfil: req.params.id } });
      perfiles = await db.User_perfil.findAll();
      res.redirect("/users/perfil-user-list");
      //res.render("users/perfil-user-list", { perfiles, perfilesBorrados });
    } catch (error) {
      res.send(error);
    }
  },
  /* PERFILES  FIN*/
  /*---------------------------------------------------------*
  /*---------------------------------------------------------*
  /*---------------------------------------------------------*
  /* USERS  INICIO*/

  //PONER ESTO CUANDO TENGA Q BUSCARLO
  /*onst products = await Product.findAll({
				include: [{association:'category'}]
			})
*/
  // CREAR UN USUARIO GET
  register: async (req, res) => {
    try {
      let user_perfil = await db.User_perfil.findAll();
      res.render("users/user-register", { user_perfil });
    } catch (error) {
      res.send(error);
    }
  },

  // CREAR UN USUARIO POST
  userStore: async (req, res) => {
    try {
      console.log(" CREAR UN USUARIO 1");
      console.log(req.body);
      errors = 0; //errors = validationResult(req);
      pass = req.body.password;
      conPass = req.body.confirmPassword;

      //evaluo si tiene errores
      if (errors.length > 0) {
        return res.render("users/user-register", {
          categories,
          errors: errors.errors,
          old: req.body,
        });
      }
      console.log(" CREAR UN USUARIO 2");
      //contrseña y confirmacion de contraseña son iguales
      if (pass === conPass) {
        pass = bcrypt.hashSync(pass, 10);
        contraseniaIguales = true;
      }
      console.log(" CREAR UN USUARIO 3");
      //let usuarioACrear = await db.User.findAll({
      //  where: {
      //    email: req.body.email,
      //  },
      // });

      /* Pendiente */
      /*
      const usuarioACrear = await db.User.findAndCountAll({
        where: {
          email: {
            [Op.eq]: req.body.email,
          },
        },
      });

      console.log("usuarioACrear = " + usuarioACrear);

      if (usuarioACrear) {
        console.log("Entra a validar");
        return res.render("users/user-register", {
          errors: {
            email: { msg: "Este email ya esta registrado" },
          },
          old: req.body,
        });
      }
      */
      //console.log("salio de validar");
      console.log(" CREAR UN USUARIO 4");
      if (contraseniaIguales == true) {
        let image;

        if (req.file != undefined) {
          image = req.file.filename;
        } else {
          image = "image-default.jpg";
        }

        console.log(" CREAR UN USUARIO 5");
        await db.User.create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          tel: req.body.tel,
          email: req.body.email,
          password: pass,
          image: image,
          perfil_id: req.body.idPerfil,
        });

        // perfiles = await db.User.findAll();
        console.log(perfiles);
        //res.redirect("/users/perfil-user-list");
        res.redirect("/");
      } else {
        console.log("Contraseña invalidas");
        return res.render("users/user-register", {
          categories,
          errors: errors.errors,
          old: req.body,
        });
      }
    } catch (error) {
      res.send(error);
    }
  },

  /* USUARIO LISTAR */
  userList: async (req, res) => {
    try {
      console.log(" listar 1");
      //perfiles = await db.User_perfil.findAll();
      users = await db.User.findAll();
      // users = await db.User.findAll({
      //   include: [{ association: "user_perfil" }],
      //  });
      /* usersBorrados = await db.User.findAll({
        where: {
          deleted_at: {
            [Op.ne]: null,
          },
        },
        paranoid: false,
      });
*/
      console.log(users);
      //  console.log("sss");
      //res.render("users/user-list", { users });
    } catch (error) {
      res.send(error);
    }
  },

  //   //LOGUEAR UN USUARIO GET
  //   login: (req, res) => {
  //     res.render("users/user-login");
  //   },
  //   //PROCESAR EL LOGUEO POST
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

  //   /* USERS  FIN*/
  // };

  // const controller = {

  // profile: (req, res) => {
  //console.log(req.cookie.usuario_logueado);
  //  res.render("users/user-profile", { userL: req.session.usuarioLogueado });
  // },

  //   logout: (req, res) => {
  //     req.session.destroy();
  //     // req.cookie.destroy();
  //     return res.redirect("/");
  //   },

  //   /* Guarda Usurio  de Creacion */
};

module.exports = controller;
