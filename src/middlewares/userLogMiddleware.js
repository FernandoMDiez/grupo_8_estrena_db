let fs = require("fs");
let path = require("path");
/*  archivo de Usuarios */
let userFilePath = path.join(__dirname, "../data/users.json");
let users = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));

function userLogMiddleware(req, res, next) {
  //res.locals.userLogged = false; //se lo utiliza para el menu
  let emailCookie = req.cookies.CookieUserLogueado;
  let userCookie = users.find((usuario) => {
    return usuario.email == emailCookie;
  });

  if (userCookie) {
    console.log("si entro ");
    req.session.usuarioLogueado = userCookie;
  }

  if (req.session.usuarioLogueado) {
    res.locals.userLogged = true;
    // return res.redirect("users/user-profile");
    return res.redirect("user-profile");
  }

  next();
}
module.exports = userLogMiddleware;
