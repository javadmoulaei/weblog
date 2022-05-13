const passport = require("passport");

exports.get = (req, res) => {
  res.render("login", {
    pageTitle: "ورود",
    path: "/login",
    message: req.flash("success_msg"),
    error: req.flash("error"),
  });
};

exports.post = (req, res, next) => {
  passport.authenticate("local", {
    // successRedirect: "/dashboard",
    failureRedirect: "/auth/login",
    failureFlash: true,
  })(req, res, next);
};
