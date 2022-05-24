const { schema } = require("../validation/contact");
const { sendEmail } = require("../utils/mailer");

exports.get = (req, res) => {
  res.render("contact", {
    pageTitle: "تماس با ما",
    path: "/contact",
    message: req.flash("success_msg"),
    error: req.flash("error"),
    errors: [],
  });
};

exports.post = async (req, res) => {
  const errorArr = [];

  const { fullname, email, message, captcha } = req.body;

  try {
    await schema.validate(req.body, { abortEarly: false });

    sendEmail(
      email,
      fullname,
      "پیام از طرف وبلاگ",
      `${message} <br/> ایمیل کاربر : ${email}`
    );

    req.flash("success_msg", "پیام شما با موفقیت ارسال شد");

    res.render("contact", {
      pageTitle: "تماس با ما",
      path: "/contact",
      message: req.flash("success_msg"),
      error: req.flash("error"),
      errors: errorArr,
    });
  } catch (err) {
    err.inner.forEach((e) => {
      errorArr.push({
        name: e.path,
        message: e.message,
      });
    });
    res.render("contact", {
      pageTitle: "تماس با ما",
      path: "/contact",
      message: req.flash("success_msg"),
      error: req.flash("error"),
      errors: errorArr,
    });
  }
};
