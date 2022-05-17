const multer = require("multer");

const { fileFilter, storage } = require("../../utils/multer");
const { get500 } = require("../errors");

exports.image = (req, res) => {
  try {
    const upload = multer({
      limits: { fileSize: 4000000 },
      dest: "uploads/",
      storage,
      fileFilter,
    }).single("image");

    upload(req, res, (err) => {
      if (err) res.send(err);
      else if (req.file) res.status(200).send("آپلود عکس موفقیت آمیز بود");
      else res.send("باید یه عکس انتخاب کنید");
    });
  } catch (error) {
    get500(req, res, error);
  }
};
