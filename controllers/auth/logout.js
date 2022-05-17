const { get500 } = require("../errors");

exports.get = (req, res) => {
  try {
    req.session = null;
    req.logout();
    res.redirect("/auth/login");
  } catch (error) {
    get500(req, res, error);
  }
};
