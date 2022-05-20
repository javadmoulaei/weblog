const { Router } = require("express");

const router = new Router();

const dashboard = require("./../controllers/admin/dashboard");
const posts = require("./../controllers/admin/posts");
const upload = require("./../controllers/admin/upload");

router.get("/", dashboard.get);

router.get("/add-post", posts.addPostPage);
router.post("/posts", posts.post);

router.get("/edit-post/:id", posts.editPostPage);

router.post("/image-upload", upload.image);
module.exports = router;
