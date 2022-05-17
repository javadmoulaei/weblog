const Blog = require("../../models/Blog");
const { shamsiDate } = require("../../utils/jalali");

exports.get = async (req, res) => {
  try {
    const blogs = await Blog.find({ user: req.user.id });

    res.render("private/blogs", {
      pageTitle: "بخش مدیریت",
      path: "/dashboard",
      layout: "./layouts/dashboard",
      fullname: req.user.fullname,
      blogs,
      shamsiDate,
    });
  } catch (error) {
    console.log(error);
  }
};
