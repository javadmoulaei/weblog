exports.get = async (req, res) => {
  res.render("private/blogs", {
    pageTitle: "بخش مدیریت",
    path: "/dashboard",
    layout: "./layouts/dashboard",
    fullname: req.user.fullname,
  });
};
