let fs = require("fs");
let path = require("path");
/*  archivo de Usuarios */
let userFilePath = path.join(__dirname, "../data/users.json");
let users = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));

function userLogMiddleware(req, res, next) {
  let emailCookie = req.cookies.CookieUserLogueado;
  let userCookie = users.find((usuario) => {
    return usuario.email == emailCookie;
  });

  if (userCookie) {
    console.log("si entro ");
    req.session.usuarioLogueado = userCookie;
  }

  if (req.session.usuarioLogueado) {
    // return res.redirect("users/user-profile");
    return res.redirect("user-profile");
  }

  next();
}
module.exports = userLogMiddleware;
