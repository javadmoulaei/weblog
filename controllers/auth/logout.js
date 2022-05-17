const { get500 } = require("../errors");

exports.get = (req, res) => {
  try {
    req.logout();
    req.flash("success_msg", "با موفقیت خارج شدید.");
    res.redirect("/auth/login");
  } catch (error) {
    get500(req, res, error);
  }
};
