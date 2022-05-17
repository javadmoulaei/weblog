const Blog = require("../../models/Blog");

exports.addPostPage = (req, res) => {
  res.render("private/addPost", {
    pageTitle: "ایجاد پست",
    path: "/dashboard/add-post",
    layout: "./layouts/dashboard",
    fullname: req.user.fullname,
  });
};

exports.post = async (req, res) => {
  try {
    await Blog.create({ ...req.body, user: req.user.id });

    res.redirect("/dashboard");
  } catch (error) {
    console.log(error);
  }
};
