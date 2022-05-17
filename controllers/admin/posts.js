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
  try {
    await Blog.create({ ...req.body, user: req.user.id });

    res.redirect("/dashboard");
  } catch (error) {
    get500(req, res, error);
  }
};
