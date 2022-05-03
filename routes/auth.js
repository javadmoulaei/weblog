const { Router } = require("express");
const yup = require("yup");

const router = new Router();
const schema = yup.object().shape({
  fullname: yup.string().required().min(4).max(255),
  email: yup.string().email(),
  password: yup.string().min(4).max(255).required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null]),
});

router.get("/login", (req, res) => {
  res.render("login", { pageTitle: "ورود", path: "/login" });
});

router.get("/register", (req, res) => {
  res.render("register", {
    pageTitle: "ثبت نام",
    path: "/register",
  });
});

router.post("/register", async (req, res) => {
  console.log(req.body);
  schema
    .validate(req.body)
    .then((result) => {
      res.redirect("/auth/login");
    })
    .catch((err) => {
      res.render("register", {
        pageTitle: "ثبت نام",
        path: "/register",
        errors: err.errors,
      });
    });
});

module.exports = router;
