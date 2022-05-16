const { Router } = require("express");

const router = new Router();

const dashboard = require("./../controllers/admin/dashboard");

router.get("/", dashboard.get);

module.exports = router;
