const path = require("path");

const debug = require("debug")("weblog-project");
const express = require("express");
const bodyParser = require("body-parser");
const expressLayout = require("express-ejs-layouts");
const dotenv = require("dotenv");
const morgan = require("morgan");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");
const MongoStore = require("connect-mongo");

const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();
debug("Connected To Database");

require("./config/passport");

const app = express();

if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
  debug("Morgan Enabled");
}
app.use(bodyParser.urlencoded({ extended: false }));

app.use(expressLayout);
app.set("view engine", "ejs");
app.set("layout", "./layouts/main");
app.set("views", "views");

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use(express.static(path.join(__dirname, "public")));

app.use("/", require("./routes"));
app.use((req, res) => {
  res.status(404).render("404", { pageTitle: "صفحه یافت نشد", path: "/404" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
