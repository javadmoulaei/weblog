const path = require("path");

const express = require("express");
const expressLayout = require("express-ejs-layouts");
const dotenv = require("dotenv");
const morgan = require("morgan");

const connectDB = require("./config/db");
const indexRoutes = require("./routes");

dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

if (process.env.NODE_ENV == "development") app.use(morgan("dev"));

app.use(expressLayout);
app.set("view engine", "ejs");
app.set("layout", "./layouts/main");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

app.use(indexRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
