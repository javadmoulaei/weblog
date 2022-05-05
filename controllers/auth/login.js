exports.get = (req, res) => {
  res.render("login", {
    pageTitle: "ورود",
    path: "/login",
    message: req.flash("success_register"),
  });
};
