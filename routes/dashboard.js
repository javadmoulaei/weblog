const { Router } = require("express");

const router = new Router();

router.get("/", (req, res) => {
  res.render("dashboard", {
    pageTitle: "dashboard",
    path: "/dashboard",
    layout: "./layouts/dashboard",
  });
});

router.get("/login", (req, res) => {
  res.render("login", { pageTitle: "sign-in", path: "/login" });
});

module.exports = router;
