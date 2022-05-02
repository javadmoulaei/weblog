const { Router } = require("express");

const router = new Router();

router.get("/login", (req, res) => {
  res.render("login", { pageTitle: "ورود", path: "/login" });
});

router.get("/register", (req, res) => {
  res.render("register", { pageTitle: "ثبت نام", path: "/login" });
});

router.post("/register", (req, res) => {
  console.log(req.body);
});

module.exports = router;
