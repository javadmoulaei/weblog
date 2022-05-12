const { Router } = require("express");

const login = require("../controllers/auth/login");
const register = require("../controllers/auth/register");
const logout = require("../controllers/auth/logout");

const { authenticated } = require("../middleware/auth");

const router = new Router();

router.get("/login", login.get);
router.post("/login", login.post);

router.get("/register", register.get);
router.post("/register", register.post);

router.get("/logout", authenticated, logout.get);

module.exports = router;
