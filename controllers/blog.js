const Blog = require("../models/Blog");
const { shamsiDate } = require("../utils/jalali");

exports.getIndex = async (req, res) => {
  try {
    const posts = await Blog.find({ status: "public" }).sort({
      createdAt: "desc",
    });

    res.render("index", { pageTitle: "وبلاگ", path: "/", posts, shamsiDate });
  } catch (error) {}
};
