const { Router } = require("express");

const router = new Router();

router.get("/login", (req, res) => {
  res.render("login", { pageTitle: "sign-in", path: "/login" });
});

module.exports = router;
