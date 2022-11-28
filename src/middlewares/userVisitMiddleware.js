function userVisitMiddleware(req, res, next) {
  if (!req.session.usuarioLogueado) {
    // return res.redirect("users/user-profile");
    return res.redirect("user-login");
  }
  next();
}
module.exports = userVisitMiddleware;
