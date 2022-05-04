const { Router } = require("express");

const User = require("../models/User");
const router = new Router();

router.get("/login", (req, res) => {
  res.render("login", { pageTitle: "ورود", path: "/login" });
});

router.get("/register", (req, res) => {
  res.render("register", {
    pageTitle: "ثبت نام",
    path: "/register",
  });
});

router.post("/register", async (req, res) => {
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
});

module.exports = router;
