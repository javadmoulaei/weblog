exports.addPostPage = (req, res) => {
  res.render("private/addPost", {
    pageTitle: "ایجاد پست",
    path: "/dashboard/add-post",
    layout: "./layouts/dashboard",
    fullname: req.user.fullname,
  });
};
