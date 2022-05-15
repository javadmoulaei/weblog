const passport = require("passport");
const axios = require("axios");

exports.get = (req, res) => {
  res.render("login", {
    pageTitle: "ورود",
    path: "/login",
    message: req.flash("success_msg"),
    error: req.flash("error"),
  });
};

exports.post = async (req, res, next) => {
  if (!req.body["g-recaptcha-response"]) {
    req.flash("error", "اعتبارسنجی captcha الزامی میباشد.");
    return res.redirect("/auth/login");
  }

  const verifyUrl = `${process.env.CAPTCHA_URL}?secret=${process.env.CAPTCHA_SECRET}&response=${req.body["g-recaptcha-response"]}&remoteip=${req.connection.remoteAddress}`;

  const response = await axios.post(verifyUrl);

  if (!response.data.success) {
    req.flash("error", "اعتبارسنجی captcha الزامی میباشد.");
    return res.redirect("/auth/login");
  }

  passport.authenticate("local", {
    // successRedirect: "/dashboard",
    failureRedirect: "/auth/login",
    failureFlash: true,
  })(req, res, next);
};
