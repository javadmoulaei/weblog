const Blog = require("../../models/Blog");
const { get500 } = require("../errors");

exports.addPostPage = (req, res) => {
  try {
    res.render("private/addPost", {
      pageTitle: "ایجاد پست",
      path: "/dashboard/add-post",
      layout: "./layouts/dashboard",
      fullname: req.user.fullname,
    });
  } catch (error) {
    get500(req, res, error);
  }
};

exports.post = async (req, res) => {
  const errors = [];
  try {
    await Blog.postValidation(req.body);
    await Blog.create({ ...req.body, user: req.user.id });

    res.redirect("/dashboard");
  } catch (error) {
    error.inner.forEach((element) => {
      errors.push({
        name: element.path,
        message: element.message,
      });
    });

    return res.render("private/addPost", {
      pageTitle: "ایجاد پست",
      path: "/dashboard/add-post",
      layout: "./layouts/dashboard",
      fullname: req.user.fullname,
      errors,
    });
  }
};
