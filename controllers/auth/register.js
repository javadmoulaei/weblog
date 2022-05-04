const User = require("../../models/User");

exports.get = (req, res) => {
  res.render("register", {
    pageTitle: "ثبت نام",
    path: "/register",
  });
};

exports.post = async (req, res) => {
  try {
    await User.userValidation(req.body);
    res.redirect("/auth/login");
  } catch (error) {
    console.log(error);
    const errors = [];

    error.inner.forEach((element) => {
      errors.push({
        name: element.path,
        message: element.message,
      });
    });

    return res.render("register", {
      pageTitle: "ثبت نام",
      path: "/register",
      errors,
    });
  }
};
