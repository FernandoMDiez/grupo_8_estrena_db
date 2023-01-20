let db = require("../database/models");
const Op = db.Sequelize.Op;

function userLogedMiddleware(req, res, next) {
  res.locals.isLogged = false;
  console.log(req.session);
  let emailCookie = req.cookies.userEmailCookie;
  if (emailCookie) {
    db.User.findOne({
      where: {
        email: emailCookie,
      },
    }).then((user) => {
      if (user) {
        console.log("Entra asiiiiiiiiiiiii");
        req.session.usuarioLogueado = user;
      }
    });
  }
  if (req.session && req.session.usuarioLogueado) {
    res.locals.isLogged = true;
    res.locals.usuarioLogueado = req.session.usuarioLogueado;
    console.log(req.session.usuarioLogueado);
  }

  console.log("emailCookie");
  console.log(emailCookie);
  console.log("saliendo de userlogeddd");
  next();
}
module.exports = userLogedMiddleware;
