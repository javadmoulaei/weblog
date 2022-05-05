const User = require("../../models/User");

exports.get = (req, res) => {
  res.render("register", {
    pageTitle: "ثبت نام",
    path: "/register",
  });
};

exports.post = async (req, res) => {
  const errors = [];
  try {
    await User.userValidation(req.body);

    const user = await User.findOne({ email: req.body.email });

    if (user) {
      errors.push({ message: "کاربری با این ایمیل ثبت نام کرده است." });

      return res.render("register", {
        pageTitle: "ثبت نام",
        path: "/register",
        errors,
      });
    }

    await User.create(req.body);
    res.redirect("/auth/login");
  } catch (error) {
    console.log(error);

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
