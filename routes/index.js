const express = require("express");

const app = express();
const router = express.Router();

router.use("/", require("./home"));
router.use("/dashboard", require("./dashboard"));
router.use("/auth", require("./auth"));

module.exports = router;
