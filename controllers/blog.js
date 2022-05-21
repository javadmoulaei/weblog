const Blog = require("../models/Blog");
const { shamsiDate } = require("../utils/jalali");
const { get500 } = require("./errors");
exports.get = async (req, res) => {
  try {
    const page = +req.query.page || 1;
    const limit = +req.query.limit || 3;

    const posts = await Blog.find({ status: "public" })
      .sort({
        createdAt: "desc",
      })
      .skip((page - 1) * limit)
      .limit(limit);

    res.render("index", {
      pageTitle: "وبلاگ",
      path: "/",
      posts,
      shamsiDate,
      page,
      nextPage: page + 1,
      previousPage: page - 1,
      hasNextPage: limit * page < posts.length,
      hasPreviousPage: page > 1,
      lastPage: Math.ceil(posts.length / limit),
    });
  } catch (error) {
    get500(req, res, error);
  }
};
