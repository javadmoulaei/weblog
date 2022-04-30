const express = require("express");

const dashboardRoutes = require("./dashboard");

const app = express();
const router = express.Router();

router.use("/dashboard", dashboardRoutes);
router.get("/", (req, res) => {
  res.render("index", { pageTitle: "weblog", path: "/" });
});

module.exports = router;
