const { Router } = require("express");

const router = new Router();

const dashboard = require("./../controllers/admin/dashboard");
const posts = require("./../controllers/admin/posts");

router.get("/", dashboard.get);

router.get("/add-post", posts.addPostPage);

module.exports = router;
