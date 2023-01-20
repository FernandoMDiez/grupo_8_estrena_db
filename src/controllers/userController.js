let db = require("../database/models");
let { validationResult } = require("express-validator");
let bcrypt = require("bcryptjs");
const Op = db.Sequelize.Op;
let perfiles, perfilesBorrados;
let pass, conPass, errors;
let contraseniaIguales = false;
let users, usersBorrados, userE, perfilN, perfilTodos;

//let usuarioALoguear = null;

const controller = {
  /* PERFILES  INICIO*/
  perfilList: async (req, res) => {
    try {
      perfiles = await db.Perfil.findAll();
      perfilesBorrados = await db.Perfil.findAll({
        where: {
          deletedAt: {
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
      const perfilD = await db.Perfil.findByPk(req.params.id, {
        paranoid: false,
      });
      //console.log("id_perfilD: " + perfilD);
      if (perfilD.deletedAt == null) {
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
      errors = await validationResult(req).array();

      if (errors.length > 0) {
        return res.render("users/perfil-user-create");
      }

      const perfilACrear = await db.Perfil.findAll({
        where: {
          namePerfil: req.body.namePerfil,
        },
      });

      if (perfilACrear == 0) {
        await db.Perfil.create({
          namePerfil: req.body.namePerfil,
        });

        perfiles = await db.Perfil.findAll({ paranoid: false });

        perfilesBorrados = await db.Perfil.findAll({
          where: {
            deletedAt: {
              [Op.ne]: null,
            },
          },
          paranoid: false,
        });
        //return res.render("users/perfil-user-list");
        res.render("users/perfil-user-list", { perfiles, perfilesBorrados });
      } else {
        return res.render("users/perfil-user-create");
      }
    } catch (error) {
      res.send(error);
    }
  },
  perfilEdit: async (req, res) => {
    try {
      const perfilE = await db.Perfil.findByPk(req.params.id, {
        paranoid: false,
      });
      res.render("users/perfil-user-edit", { perfilE });
    } catch (error) {
      res.send(error);
    }
  },
  perfilUpdate: async (req, res) => {
    try {
      let idU = req.params.id;
      const perfilUpdate = {
        namePerfil: req.body.namePerfil,
      };
      await db.Perfil.update(perfilUpdate, { where: { id: idU } });
      res.redirect("/users/perfil-user-list");
    } catch (error) {
      //console.log("Sientra por aqui 5 ");
      res.send(error);
    }
  },

  perfilDelete: async (req, res) => {
    try {
      const perfilD = await db.Perfil.findByPk(req.params.id);
      res.render("users/perfil-user-delete", { perfilD });
    } catch (error) {
      //console.log("Sientra por aqui 5 ");
      res.send(error);
    }
  },
  perfilDestroy: async (req, res) => {
    try {
      await db.Perfil.destroy({ where: { id: req.params.id } });
      perfiles = await db.Perfil.findAll();
      res.redirect("/users/perfil-user-list"); //, { perfiles, perfilesBorrados });
    } catch (error) {
      //console.log("Sientra por aqui 5 ");
      res.send(error);
    }
  },
  perfilActivate: async (req, res) => {
    try {
      const perfilA = await db.Perfil.findByPk(req.params.id, {
        paranoid: false,
      });
      res.render("users/perfil-user-activate", { perfilA });
    } catch (error) {
      res.send(error);
    }
  },
  perfilRestore: async (req, res) => {
    try {
      await db.Perfil.restore({ where: { id: req.params.id } });
      perfiles = await db.Perfil.findAll();
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
      perfiles = await db.Perfil.findAll();
      res.render("users/user-register", { perfiles });
    } catch (error) {
      res.send(error);
    }
  },

  // CREAR UN USUARIO POST
  userStore: async (req, res) => {
    try {
      console.log(" CREAR UN USUARIO 1");
      perfiles = await db.Perfil.findAll();
      errors = await validationResult(req).array();

      pass = req.body.password;
      conPass = req.body.confirmPassword;

      //evaluo si tiene errores
      console.log(errors);
      console.log(" CREAR UN USUARIO 2");
      console.log(errors.length);
      if (errors.length > 0) {
        console.log("deberia hacer el return si tiene errores");
        return res.render("users/user-register", {
          perfiles,
          errors: errors,
          old: req.body,
        });
      }
      //console.log(" CREAR UN USUARIO 2");
      //contrseña y confirmacion de contraseña son iguales
      if (pass === conPass) {
        pass = bcrypt.hashSync(pass, 10);
        contraseniaIguales = true;
      }
      //console.log(" CREAR UN USUARIO 3");
      //let usuarioACrear = await db.User.findAll({
      //  where: {
      //    email: req.body.email,
      //  },
      // });

      /* Pendiente */

      const usuarioACrear = await db.User.findAndCountAll({
        where: {
          email: {
            [Op.eq]: req.body.email,
          },
        },
      });

      console.log(usuarioACrear.count);

      if (usuarioACrear.count > 0) {
        console.log("Entra a validar");
        let ml = req.body.email;
        errors = [
          {
            value: ml,
            msg: "Este email ya esta registrado",
            param: "email",
            location: "body",
          },
        ];
        console.log(errors);
        return res.render("users/user-register", {
          perfiles,
          errors,
          old: req.body,
        });
      }
      console.log(errors);
      //console.log("salio de validar");
      //console.log(" CREAR UN USUARIO 4");
      if (contraseniaIguales == true) {
        let image;

        if (req.file != undefined) {
          image = req.file.filename;
        } else {
          image = "image-default.jpg";
        }

        console.log("req.body.perfilId = " + req.body.perfilId);
        console.log(" CREAR UN USUARIO 5");
        await db.User.create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          tel: req.body.tel,
          email: req.body.email,
          password: pass,
          image: image,
          perfilId: req.body.perfilId,
        });

        // perfiles = await db.User.findAll();
        console.log(perfiles);
        //res.redirect("/users/perfil-user-list");
        res.redirect("/");
      } else {
        console.log("Contraseña invalidas");
        return res.render("users/user-register", {
          perfiles,
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
      users = await db.User.findAll({ include: { all: true } });
      let usersBorrados = await db.User.findAll({
        include: { all: true },
        where: {
          deletedAt: {
            [db.Sequelize.Op.ne]: null,
          },
        },
        paranoid: false,
      });
      res.render("users/user-list", { users, usersBorrados });
    } catch (error) {
      res.send(error);
    }
  },

  userDelete: async (req, res) => {
    try {
      const userID = await db.User.findByPk(req.params.id);
      res.render("users/user-delete", { userID });
    } catch (error) {
      res.send(error);
    }
  },
  userDestroy: async (req, res) => {
    try {
      await db.User.destroy({ where: { id: req.params.id } });
      perfiles = await db.User.findAll();
      res.redirect("/users/user-list");
    } catch (error) {
      res.send(error);
    }
  },

  userActivate: async (req, res) => {
    try {
      const userA = await db.User.findByPk(req.params.id, {
        paranoid: false,
      });
      res.render("users/user-activate", { userA });
    } catch (error) {
      res.send(error);
    }
  },

  userRestore: async (req, res) => {
    try {
      await db.User.restore({ where: { id: req.params.id } });
      res.redirect("/users/user-list");
      //res.render("users/perfil-user-list", { perfiles, perfilesBorrados });
    } catch (error) {
      res.send(error);
    }
  },

  // Detalle de perfiles
  userDetail: async (req, res) => {
    try {
      //console.log("id_detail: " + req.params.id);
      const userD = await db.User.findByPk(req.params.id, {
        paranoid: false,
      });
      perfilN = await db.Perfil.findByPk(userD.perfilId, {
        paranoid: false,
      });
      res.render("users/user-detail", { userD, perfilN });
      //res.redirect("/perfil-detail", { perfil: perfil });
    } catch (error) {
      res.send(error);
    }
  },

  userEdit: async (req, res) => {
    try {
      userE = await db.User.findByPk(req.params.id, {
        paranoid: false,
      });
      perfilN = await db.Perfil.findByPk(userE.perfilId, {
        paranoid: false,
      });
      perfilTodo = await db.Perfil.findAll({ paranoid: false });

      res.render("users/user-edit", { userE, perfilN, perfilTodo });
    } catch (error) {
      res.send(error);
    }
  },

  userUpdate: async (req, res) => {
    try {
      userE = await db.User.findByPk(req.params.id, {
        paranoid: false,
      });
      // console.log(req.body);
      console.log(" Actualizar UN USUARIO 0");
      console.log("userE:" + userE.id);
      perfilN = await db.Perfil.findByPk(userE.perfilId, {
        paranoid: false,
      });
      perfilTodos = await db.Perfil.findAll({ paranoid: false });

      console.log(" Actualizar UN USUARIO 1");
      console.log(" perfilN" + perfilN);

      errors = await validationResult(req).array();

      pass = req.body.password;
      conPass = req.body.confirmPassword;

      //evaluo si tiene errores
      console.log(errors);
      console.log(" CREAR UN USUARIO 2");
      console.log(errors.length);
      if (errors.length > 0) {
        console.log("deberia hacer el return si tiene errores");
        return res.render("users/user-edit", {
          userE,
          perfilN,
          perfilTodo,
          errors: errors,
          old: req.body,
        });
      }
      //console.log(" CREAR UN USUARIO 2");
      //contrseña y confirmacion de contraseña son iguales
      if (pass === conPass) {
        pass = bcrypt.hashSync(pass, 10);
        contraseniaIguales = true;
      }
      //console.log(" CREAR UN USUARIO 3");
      //let usuarioACrear = await db.User.findAll({
      //  where: {
      //    email: req.body.email,
      //  },
      // });

      /* Pendiente */

      const usuarioACrear = await db.User.findAndCountAll({
        where: {
          email: {
            [Op.eq]: req.body.email,
          },
        },
      });

      console.log(usuarioACrear.count);

      if (usuarioACrear.count > 1) {
        console.log("Entra a validar");
        return res.render("users/user-edit", {
          errors: {
            email: { msg: "Este email ya esta registrado" },
          },
          old: req.body,
          perfilN,
          perfilTodo,
          userE,
        });
      }
      console.log(errors);
      //console.log("salio de validar");
      //console.log(" CREAR UN USUARIO 4");
      if (contraseniaIguales == true) {
        let image;

        if (req.file != undefined) {
          image = req.file.filename;
        } else {
          image = "image-default.jpg";
        }

        console.log("req.body.perfilId = " + req.body.perfilId);
        console.log(" Actualizar UN USUARIO 5");
        await db.User.update(
          {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            tel: req.body.tel,
            email: req.body.email,
            password: pass,
            image: image,
            perfilId: req.body.perfilId,
          },
          { where: { id: userE.id } }
        );

        // perfiles = await db.User.findAll()
        console.log("usuario del update");
        console.log(userE);
        //res.redirect("/users/perfil-user-list");
        res.redirect("/");
      } else {
        console.log("Contraseña invalidas");
        return res.render("users/user-edit", {
          userE,
          perfilN,
          perfilTodo,
          errors: errors.errors,
          old: req.body,
        });
      }
    } catch (error) {
      res.send(error);
    }
  },

  //LOGUEAR UN USUARIO GET
  login: (req, res) => {
    res.render("users/user-login");
  },
  //PROCESAR EL LOGUEO POST
  prosLogin: async (req, res) => {
    try {
      console.log("Evaluar ");
      errors = validationResult(req);

      // pass = req.body.password;

      if (!errors.isEmpty()) {
        console.log("pasa por aqui ");

        return res.render("users/user-login", {
          errors: { password: { msg: "Datos  invalidos" } },
        });
      }

      usuarioALoguear = await db.User.findOne({
        where: {
          email: req.body.mail,
        },
      });
      console.log("Evaluar 0");
      console.log(usuarioALoguear);
      // usuarioALoguear &&
      if (
        usuarioALoguear &&
        bcrypt.compareSync(req.body.password, usuarioALoguear.password)
      ) {
        //delete usuarioALoguear.password;
        //delete usuarioALoguear.confirmPassword;

        console.log("Evaluar 1");
        req.session.usuarioLogueado = usuarioALoguear;

        if (req.body.recordar_usuario) {
          res.cookie("userEmailCookie", usuarioALoguear.email);
          //  console.log(req.cookies.userEmailCookie);
        }

        return res.redirect("user-profile");
        // return res.redirect("/");
        //return res.render("users/user-profile");

        // return res.render("users/user-login", {
        //   errors: { password: { msg: "Datos  invalidos" } },
        //  });
      } // else {
      console.log("Evaluar 2");
      return res.render("users/user-login", {
        errors: { password: { msg: "Datos  invalidos" } },
      });
    } catch (error) {
      res.send(error);
    }
  },

  //   /* USERS  FIN*/
  // };

  // const controller = {

  profile: (req, res) => {
    console.log("estas en seesion");
    // console.log(req.session);
    console.log(req.cookies.userEmailCookie);
    res.render("users/user-profile", { userL: req.session.usuarioLogueado });
  },

  logout: (req, res) => {
    res.clearCookie("userEmailCookie");
    req.session.destroy();
    return res.redirect("/");
  },

  //   /* Guarda Usurio  de Creacion */
};

module.exports = controller;
