const { Router } = require("express");

const router = new Router();

const blog = require("../controllers/blog");

router.get("/", blog.get);

module.exports = router;
