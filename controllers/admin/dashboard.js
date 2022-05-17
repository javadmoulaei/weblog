const Blog = require("../../models/Blog");

exports.get = async (req, res) => {
  try {
    const blogs = await Blog.find({ user: req.user.id });

    res.render("private/blogs", {
      pageTitle: "بخش مدیریت",
      path: "/dashboard",
      layout: "./layouts/dashboard",
      fullname: req.user.fullname,
      blogs,
    });
  } catch (error) {
    console.log(error);
  }
};
