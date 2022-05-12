exports.get = (req, res) => {
  req.logout();
  req.flash("success_msg", "با موفقیت خارج شدید.");
  res.redirect("/auth/login");
};
