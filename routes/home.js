const { Router } = require("express");

const router = new Router();

const blog = require("../controllers/blog");

router.get("/", blog.get);

router.get("/posts/:id", blog.getOne);

module.exports = router;
